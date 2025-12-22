// ================================
// 详情页配置驱动渲染模块（中文注释）
// ================================

/**
 * 功能：解析 slug（中文注释）
 * 说明：优先从 URL 查询参数获取；否则基于文件名推断
 */
function getSlug() {
  const params = new URLSearchParams(window.location.search);
  const qSlug = params.get('slug');
  if (qSlug) return qSlug.trim().toLowerCase();
  const path = window.location.pathname;
  const name = path.split('/').pop() || '';
  return name.replace(/\.html$/i, '').toLowerCase();
}

/**
 * 功能：获取数据类型（中文注释）
 * 说明：从 URL 查询参数 type 获取，默认为 attractions
 */
function getDataType() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const validTypes = ['attractions', 'food', 'shopping', 'traffic'];
  return (type && validTypes.includes(type)) ? type : 'attractions';
}

/**
 * 功能：加载配置数据（中文注释）
 * 说明：拉取对应类型的 json 并做基本缓存
 */
const ConfigStore = (function () {
  let cache = {};
  return {
    async load() {
      const type = getDataType();
      if (cache[type]) return cache[type];
      const base = getAssetsBase();
      try {
        const res = await fetch(`${base}data/${type}.json`);
        if (!res.ok) throw new Error('配置加载失败');
        const json = await res.json();
        cache[type] = json && Array.isArray(json.items) ? json.items : [];
        return cache[type];
      } catch (e) {
        console.error(`[ConfigStore] Load failed for ${type}`, e);
        return [];
      }
    }
  };
})();
// 暴露到全局以便测试与调试
window.ConfigStore = ConfigStore;

/**
 * 功能：校验配置项（中文注释）
 * 说明：检查必填字段及类型范围，返回错误列表
 */
function validateItem(item) {
  const errors = [];
  function req(field, cond, msg) {
    if (!cond) errors.push(`${field}: ${msg}`);
  }
  req('slug', !!item.slug, '缺失');
  req('name', !!item.name, '缺失');
  req('nameEn', !!item.nameEn, '缺失');
  req('district.zh', item.district && !!item.district.zh, '缺失');
  req('district.en', item.district && !!item.district.en, '缺失');
  req('rating', typeof item.rating === 'number' && item.rating >= 0 && item.rating <= 5, '需 0-5 数值');
  req('image', !!item.image, '缺失');
  req('seo.title.zh', item.seo && item.seo.title && !!item.seo.title.zh, '缺失');
  req('seo.title.en', item.seo && item.seo.title && !!item.seo.title.en, '缺失');
  req('seo.description.zh', item.seo && item.seo.description && !!item.seo.description.zh, '缺失');
  req('seo.description.en', item.seo && item.seo.description && !!item.seo.description.en, '缺失');
  return errors;
}

/**
 * 功能：根据 slug 查找景点（中文注释）
 * 说明：支持主 slug 与别名匹配
 */
function findItemBySlug(items, slug) {
  const direct = items.find(i => i.slug === slug);
  if (direct) return direct;
  return items.find(i => Array.isArray(i.aliases) && i.aliases.includes(slug)) || null;
}

/**
 * 功能：设置页面 SEO（中文注释）
 * 说明：动态设置 title 与 meta description
 */
function applySEO(item) {
  const lang = document.body.getAttribute('data-lang') || 'zh';
  const title = lang === 'en' ? item.seo.title.en : item.seo.title.zh;
  const desc = lang === 'en' ? item.seo.description.en : item.seo.description.zh;
  document.title = title;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', desc);
}

/**
 * 功能：渲染详情内容（中文注释）
 * 说明：按当前语言渲染标题、区位、评分、图片、简介与亮点
 */
function renderDetail(item) {
  const root = document.getElementById('detailRoot');
  if (!root) return;
  const lang = document.body.getAttribute('data-lang') || 'zh';
  const name = lang === 'en' ? item.nameEn : item.name;
  const district = lang === 'en' ? item.district.en : item.district.zh;
  const introList = lang === 'en' ? (item.intro?.en || []) : (item.intro?.zh || []);
  const highlights = item.highlights || [];
  const base = getAssetsBase();
  const imgSrc = (item.image || '').startsWith('assets/') ? `${base}${item.image.replace('assets/','')}` : (item.image || `${base}images/placeholder.svg`);

  root.innerHTML = `
    <div class="detail-header" data-aos="fade-up">
      <h1 class="detail-title">${name}</h1>
    </div>
    <div class="detail-image" data-aos="zoom-in">
      <img src="${imgSrc}" alt="${name}" onerror="this.onerror=null;this.src='/assets/images/placeholder.svg'">
    </div>
    <div class="detail-content">
      <div class="detail-info" data-aos="fade-right">
        <h2>${lang === 'en' ? 'Introduction' : '景区介绍'}</h2>
        ${introList.map(p => `<p>${p}</p>`).join('')}
      </div>
      <div class="detail-highlights" data-aos="fade-left">
        <h2>${lang === 'en' ? 'Highlights' : '景区亮点'}</h2>
        <ul>
          ${highlights.map(h => `<li><i class="${h.icon || 'fas fa-check-circle'}"></i> ${lang === 'en' ? (h.en || '') : (h.zh || '')}</li>`).join('')}
        </ul>
      </div>
    </div>
    <div class="back-button" data-aos="fade-up">
      <a href="../${getDataType()}.html" class="btn btn-primary"><i class="fas fa-arrow-left"></i> ${lang === 'en' ? 'Back' : '返回'}</a>
    </div>
  `;

  // 渲染后刷新 AOS 并绑定返回按钮逻辑
  if (window.AOS && typeof AOS.refresh === 'function') {
    AOS.refresh();
  }
  if (typeof initDetailBackButton === 'function') {
    initDetailBackButton();
  }
}

/**
 * 功能：显示错误提示条（中文注释）
 * 说明：在页面顶部插入可关闭的错误信息
 */
function showErrorBanner(text) {
  const banner = document.createElement('div');
  banner.className = 'error-banner';
  banner.style.cssText = 'background:#ffe6e6;color:#900;padding:10px 16px;position:sticky;top:0;z-index:1000;display:flex;justify-content:space-between;align-items:center';
  banner.innerHTML = `<span>${text}</span><button style="background:none;border:0;color:#900;font-weight:bold">×</button>`;
  banner.querySelector('button').addEventListener('click', () => banner.remove());
  const container = document.querySelector('.attraction-detail-section .container') || document.body;
  container.prepend(banner);
}

/**
 * 功能：初始化渲染入口（中文注释）
 * 说明：加载配置、查找条目、校验与渲染，并绑定语言切换事件
 */
async function initDetailRender() {
  try {
    const slug = getSlug();
    const mode = new URLSearchParams(window.location.search).get('slug') ? 'query' : 'file';
    console.log(`[detail.render] mode=${mode} slug=${slug}`);
    const items = await ConfigStore.load();
    const item = findItemBySlug(items, slug);
    if (!item) {
      showErrorBanner('未找到对应景点，已显示占位内容');
      const fallback = {
        name: '未找到内容',
        nameEn: 'Not Found',
        district: { zh: '深圳', en: 'Shenzhen' },
        rating: 0,
        image: `${getAssetsBase()}images/placeholder.svg`,
        intro: { zh: ['暂无法显示该景点详情'], en: ['Detail is unavailable'] },
        highlights: []
      };
      applySEO({ seo: { title: { zh: '未找到内容', en: 'Not Found' }, description: { zh: '暂无描述', en: 'No description' } } });
      renderDetail(fallback);
      return;
    }
    const errors = validateItem(item);
    if (errors.length) {
      showErrorBanner('配置校验失败：' + errors.join('；'));
    }
    applySEO(item);
    renderDetail(item);
    console.log(`[detail.render] rendered slug=${slug}`);

    // 语言切换后重新渲染
    const langBtn = document.getElementById('langSwitch');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        applySEO(item);
        renderDetail(item);
      });
    }
  } catch (e) {
    console.error('[detail.render] 初始化失败', e);
    showErrorBanner(`页面初始化失败：${e && e.message ? e.message : '未知错误'}，请稍后重试`);
  }
}

// DOMContentLoaded 后初始化
document.addEventListener('DOMContentLoaded', initDetailRender);

// ================================
// 文化遗产与古迹详情页配置驱动渲染模块
// ================================

/**
 * 功能：解析 slug
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
 * 功能：获取数据类型
 * 说明：从 URL 查询参数 type 获取，默认为 heritage
 */
function getDataType() {
  const params = new URLSearchParams(window.location.search);
  const type = params.get('type');
  const validTypes = ['heritage', 'attractions', 'food', 'shopping', 'traffic'];
  return (type && validTypes.includes(type)) ? type : 'heritage';
}

/**
 * 功能：加载配置数据
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
 * 功能：获取静态资源基础路径
 * 说明：本地环境返回 'assets/'；GitHub Pages 项目站点返回 '/<repo>/assets/'
 */
function getAssetsBase() {
  const host = window.location.hostname || '';
  const path = window.location.pathname || '';
  const isGh = host.endsWith('github.io');
  if (isGh) {
    const seg = path.split('/').filter(Boolean)[0] || '';
    return seg ? `/${seg}/assets/` : '/assets/';
  }
  return '/assets/';
}

/**
 * 功能：校验配置项
 * 说明：检查必填字段及类型范围，返回错误列表
 */
function validateItem(item) {
  const errors = [];
  function req(field, cond, msg) {
    if (!cond) errors.push(`${field}: ${msg}`);
  }
  req('name', !!item.name, '缺失');
  req('nameEn', !!item.nameEn, '缺失');
  req('description', !!item.description, '缺失');
  req('descriptionEn', !!item.descriptionEn, '缺失');
  req('level', !!item.level, '缺失');
  req('image', !!item.image, '缺失');
  return errors;
}

/**
 * 功能：根据 slug 查找文化遗产
 * 说明：支持主 slug 与别名匹配
 */
function findItemBySlug(items, slug) {
  const direct = items.find(i => i.slug === slug);
  if (direct) return direct;
  return items.find(i => Array.isArray(i.aliases) && i.aliases.includes(slug)) || null;
}

/**
 * 功能：设置页面 SEO
 * 说明：动态设置 title 与 meta description
 */
function applySEO(item) {
  const lang = document.body.getAttribute('data-lang') || 'zh';
  const name = lang === 'en' ? item.nameEn : item.name;
  const desc = lang === 'en' ? item.descriptionEn : item.description;
  document.title = name;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    document.head.appendChild(meta);
  }
  meta.setAttribute('content', desc);
}

/**
 * 功能：渲染详情内容
 * 说明：按当前语言渲染标题、描述、级别、图片等
 */
function renderDetail(item) {
  const root = document.getElementById('detailRoot');
  if (!root) return;
  const lang = document.body.getAttribute('data-lang') || 'zh';
  const name = lang === 'en' ? item.nameEn : item.name;
  const description = lang === 'en' ? item.descriptionEn : item.description;
  const levelText = t(`history.heritage.level.${item.level}`);
  const base = getAssetsBase();
  const imgSrc = (item.image || '').startsWith('assets/') ? `${base}${item.image.replace('assets/','')}` : (item.image || `${base}images/placeholder.svg`);

  root.innerHTML = `
    <div class="detail-header" data-aos="fade-up">
      <h1 class="detail-title">${name}</h1>
      <div class="detail-meta">
        <span class="level"><i class="fas fa-award"></i> ${levelText}</span>
      </div>
    </div>
    <div class="detail-image" data-aos="zoom-in">
      <img src="${imgSrc}" alt="${name}" onerror="this.onerror=null;this.src='/assets/images/placeholder.svg'">
    </div>
    <div class="detail-content">
      <div class="detail-info" data-aos="fade-right">
        <h2>${lang === 'en' ? 'Introduction' : '遗产介绍'}</h2>
        <p>${description}</p>
      </div>
    </div>
    <div class="back-button" data-aos="fade-up">
      <a href="../history.html" class="btn btn-primary"><i class="fas fa-arrow-left"></i> ${lang === 'en' ? 'Back' : '返回'}</a>
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
 * 功能：显示错误提示条
 * 说明：在页面顶部插入可关闭的错误信息
 */
function showErrorBanner(text) {
  const banner = document.createElement('div');
  banner.className = 'error-banner';
  banner.style.cssText = 'background:#ffe6e6;color:#900;padding:10px 16px;position:sticky;top:0;z-index:1000;display:flex;justify-content:space-between;align-items:center';
  banner.innerHTML = `<span>${text}</span><button style="background:none;border:0;color:#900;font-weight:bold">×</button>`;
  banner.querySelector('button').addEventListener('click', () => banner.remove());
  const container = document.querySelector('.heritage-detail-section .container') || document.body;
  container.prepend(banner);
}

/**
 * 功能：初始化渲染入口
 * 说明：加载配置、查找条目、校验与渲染，并绑定语言切换事件
 */
async function initDetailRender() {
  try {
    const slug = getSlug();
    const mode = new URLSearchParams(window.location.search).get('slug') ? 'query' : 'file';
    console.log(`[heritage.detail.render] mode=${mode} slug=${slug}`);
    const items = await ConfigStore.load();
    const item = findItemBySlug(items, slug);
    if (!item) {
      showErrorBanner('未找到对应文化遗产与古迹，已显示占位内容');
      const fallback = {
        name: '未找到内容',
        nameEn: 'Not Found',
        description: '暂无法显示该文化遗产与古迹详情',
        descriptionEn: 'Detail is unavailable',
        level: 'provincial',
        image: `${getAssetsBase()}images/placeholder.svg`
      };
      applySEO(fallback);
      renderDetail(fallback);
      return;
    }
    const errors = validateItem(item);
    if (errors.length) {
      showErrorBanner('配置校验失败：' + errors.join('；'));
    }
    applySEO(item);
    renderDetail(item);
    console.log(`[heritage.detail.render] rendered slug=${slug}`);

    // 语言切换后重新渲染
    const langBtn = document.getElementById('langSwitch');
    if (langBtn) {
      langBtn.addEventListener('click', () => {
        applySEO(item);
        renderDetail(item);
      });
    }
  } catch (e) {
    console.error('[heritage.detail.render] 初始化失败', e);
    showErrorBanner(`页面初始化失败：${e && e.message ? e.message : '未知错误'}，请稍后重试`);
  }
}

/**
 * 功能：从全局heritageData获取数据
 * 说明：当无法从JSON文件加载时，使用全局heritageData
 */
function getGlobalHeritageData() {
  if (window.heritageData && Array.isArray(window.heritageData)) {
    return window.heritageData;
  }
  return [];
}

// DOMContentLoaded 后初始化
document.addEventListener('DOMContentLoaded', initDetailRender);
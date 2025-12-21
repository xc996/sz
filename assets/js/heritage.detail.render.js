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
  const description = lang === 'en' ? item.descriptionEn : (item.descriptionFull || item.description);
  const levelText = t(`history.heritage.level.${item.level}`);
  const base = getAssetsBase();
  const imgSrc = (item.image || '').startsWith('assets/') ? `${base}${item.image.replace('assets/','')}` : (item.image || `${base}images/placeholder.svg`);

  // 检查是否是大鹏所城
  const isDapeng = item.slug === 'dapeng';
  
  // 大鹏所城的扩展内容
  const dapengExtendedContent = isDapeng ? `
    <div class="detail-content">
      <div class="detail-info" data-aos="fade-right">
        <h2>${lang === 'en' ? 'History' : '历史沿革'}</h2>
        <p>${lang === 'en' ? 'Early Qing Dynasty: Originally set up with one thousand households and three hundred soldiers.<br><br>Shunzhi 13th year (1656): New安县 magistrate Fu Erzhi requested to change Dapeng Guard Post to Dapeng Defense Battalion with five hundred soldiers.<br><br>Kangxi 7th year (1668): Merged Dapeng Defense Battalion into Huizhou Garrison, under the jurisdiction of Huizhou Garrison Vice Commander, with 400 soldiers.<br><br>Kangxi 43rd year (1704): Changed Dapeng Defense Battalion to Dapeng Naval Battalion with 931 soldiers and 168 cannons.<br><br>Yongzheng 4th year (1726): Abolished guerrilla, established one colonel, added seven subordinate officers, and placed under the jurisdiction of Guangdong Water and Land Battalion.<br><br>Jiaqing 15th year (1810): Separation of land and water forces, Guangdong added Naval Commander stationed in Humen, with five battalions, Dapeng as offshore naval battalion with one colonel and 800 soldiers.<br><br>Daoguang 11th year (1831): Due to the vast sea area under its jurisdiction, it was difficult to defend, so it was divided into left and right battalions. Left battalion was the original Dapeng Battalion with 505 soldiers, right battalion stationed in Dongchong Guard Post with 482 soldiers.<br><br>Daoguang 20th year (1840): Due to rampant opium smuggling and increasing British threat, Dapeng Battalion was upgraded to Dapeng Brigade, adding one vice commander and moving to Kowloon.<br><br>Xianfeng 10th year (1860): Kowloon area was ceded to British, some sentry posts under Dapeng Brigade were in British territory, so they were abandoned.<br><br>Tongzhi 8th year (1869): The left battalion had 430 soldiers, the right battalion had 320 soldiers.<br><br>Guangxu 24th year (1898): British leased New Territories and outlying islands, all sentry posts under Dapeng Brigade were in British territory, so they were disbanded.<br><br>Guangxu 25th year (1899): Qing soldiers in Kowloon Walled City were expelled by British army, so both battalions of Dapeng Brigade were disbanded.<br><br>June 15, 2024, around 16:00: A small collapse occurred in the south gate wall of Dapeng Ancient City in Shenzhen. Emergency, cultural, and street office departments in Dapeng New District rushed to the scene immediately. Safety barriers have been set up around the collapse area, and emergency and cultural relic experts are conducting a comprehensive assessment of the collapse.' : '清初大鹏所原设防守千总一员，兵三百名。<br><br>顺治十三年（1656年），历史城墙新安县知县傅尔植奏请改设大鹏所防守营，官兵五百名。<br><br>康熙七年（1668年），并大鹏所防守营入惠州协，归惠州协副将管辖，时该营官兵凡四百员名。<br><br>康熙四十三年（1704年），改大鹏所防守营为大鹏水师营，官兵九百三十一名。防所大炮共一百六十八位。<br><br>雍正四年（1726年），裁游击，改设参将一员，添设外委千把总七员，改隶广东水陆提标统辖。<br><br>嘉庆十五年（1810年），水陆区分，广东增设水师提督，驻虎门，设五营，大鹏为外海水师营，设参将一员，兵额八百名。<br><br>道光十一年（1831年），以该营所辖之洋面宽广，难于防卫，遂分设左右二营。左营即原大鹏营，兵额五百零五名，右营驻东涌所城，兵四百八十二名。<br><br>道光二十年（1840年），以鸦片走私盛行及英人威胁日大，遂将大鹏营提升为协，增设副将一员，移驻九龙。<br><br>咸丰十年（1860年），九龙地区转归英属，大鹏协所辖部分台汛位英界内，故被废置。<br><br>同治八年（1869年），该协左营实存兵四百三十名，右营实存兵三百二十名。<br><br>光绪二十四年（1898年），英人租界新界及离岛地区，该协所辖汛台内全位英界内，故亦被裁设。<br><br>光绪二十五年（1899年），九龙寨城内之清朝官兵被英军驱逐，该协两营故亦被裁。<br><br>2024年6月15日16时许，深圳市大鹏所城南门城墙发生小范围坍塌。大鹏新区应急、文体、街道办事处等部门已第一时间赶赴现场处置。坍塌区域周围已设立安全围挡，并正组织应急、文物等领域专家对坍塌情况进行全面评估。'}</p>
      </div>
      <div class="detail-info" data-aos="fade-left">
        <h2>${lang === 'en' ? 'Architectural Features' : '建筑特点'}</h2>
        <p>${lang === 'en' ? 'According to "Xin\'an County Gazetteer" of Qing Dynasty, Dapeng Ancient City was built by Zhang Bin,千户 of Guangzhou Left Guard. It was constructed with bricks and stones inside and outside, known as "the best among coastal defense cities", with a perimeter of 325 zhang, height of 1.8 zhang, top width of 6 chi, base width of 14 chi, four gate towers, four watchtowers, sixteen sentry posts, and 654 crenels.<br><br>The city has a near-trapezoidal layout covering about 100,000 square meters. The city wall is 6 meters high and 1,200 meters long, with 654 crenels and horse paths. The city is divided into east, west, south, and north gates (the north gate was blocked during the Wanli period of Ming Dynasty), each gate has a watchtower, and two sentry posts on both sides. The east, west, and south sides of the city are surrounded by a moat 1,200 meters long, 5 meters wide, and 3 meters deep.' : '据清代《新安县志》记载，大鹏所城为广州左卫千户张斌开筑，内外砌以砖石，沿海所城，大鹏为最，周围三百二十五丈，高一丈八尺，面广六尺，址广一丈四尺，门楼四，敌楼如之，警铺一十六，雉堞六百五十四。所城平面呈近梯形布局，占地约10万平方米，城墙高6米、长1200米，上设雉堞654个，并辟有马道。全城分东、西、南、北四个城门（北门于明万历年间被堵塞），每个城门上建有一座敌楼，两边各设两个警铺。城外东、西、南三面，环绕着一条长1200米、宽5米、深3米的护城濠。'}</p>
      </div>
      <div class="detail-info" data-aos="fade-right">
        <h2>${lang === 'en' ? 'Research Value' : '研究价值'}</h2>
        <p>${lang === 'en' ? 'The main layout, streets, and buildings of Dapeng Ancient City are well-preserved. Parts of the city wall and east and south gates are intact. Inside the city, there are still Zhao Gong Temple, Tian Hou Temple, Hua Guang Temple, Hou Wang Temple, and more than ten Qing Dynasty general mansions and residential houses, among which "Zhenwei General\'s Mansion" of Lai Enjue is the most complete and outstanding.<br><br>It is of great value for studying ancient Chinese architectural history, urban planning and construction history, folk culture of Ming and Qing dynasties, and the development history of ancient architecture in Lingnan region.' : '大鹏所城主要格局、街道及建筑保存相当完整。体现城外观的部分城墙及东、南两城门保存完好，城内现存有赵公祠、天后庙、华光庙、候王庙和十余座清代将军府第以及一批清代民居，其中尤以赖恩爵的“振威将军第”保存最为完整和突出，对研究中国古代建筑史、城镇规划建设史、明清民俗文化及岭南地区古建筑发展史等均具有重要的价值。'}</p>
      </div>
      <div class="detail-info" data-aos="fade-left">
        <h2>${lang === 'en' ? 'Historical Culture' : '历史文化'}</h2>
        <p>${lang === 'en' ? 'Dapeng Ancient City, full name "Dapeng Garrison Thousand Household City", was a military fortress for coastal defense in Ming and Qing dynasties, known as "the best among coastal defense cities". It has deep cultural roots, gathering soldiers from all over China, integrating Hakka culture, Tanka culture, Cantonese culture, and coastal defense culture, giving birth to Shenzhen\'s earliest immigrant culture.<br><br>After more than 600 years of history, Dapeng Ancient City still preserves ancient temples, city gates, residential houses, courtyards, streets, granaries and other ancient architectural sites. Today, Dapeng Ancient City has become an important tourist attraction and cultural heritage, one of the best-preserved coastal defense fortresses from Ming and Qing dynasties in China.<br><br>Dapeng Ancient City is the source and root of Shenzhen\'s nickname "Pengcheng". It was established in Ming Dynasty to resist Japanese pirates and became a key coastal defense fortress in South China during Ming and Qing dynasties. It became famous for resisting British forces. In Ming Dynasty, there were generals like Liu Zhong and Xu Xun in Dapeng Ancient City. In Qing Dynasty, there were "three generations and five generals" of Lai family and "father-son generals" of Liu family, earning Dapeng Ancient City the honor of "General Village". In Qing Dynasty, Dapeng Ancient City and General Lai Enjue achieved victory in the first battle of the Opium War - the Battle of Kowloon, which was recorded in modern Chinese history.' : '大鹏所城，全称为“大鹏守御千户所城”，为明清两代中国海防的军事要塞，有“沿海所城，大鹏为最”之称。大鹏所城文化根脉深厚，聚集了来自天南地北的兵将，融合了客家文化、疍家文化、广府文化和海防文化，诞生了深圳最早的移民文化。大鹏所城历经600多年风雨，仍完好地保留着旧时的古庙、古城楼、古民居、古宅院、古街道、古粮仓等古代建筑遗址。如今，大鹏所城已成为一个重要的旅游胜地和文化遗产，是国内现存最完好的明清海防卫所遗存之一。<br><br>大鹏所城是深圳“鹏城”别名的源头与根脉，也是明代为了抗击倭寇而设立的“大鹏守御千户所城”，在明清两代是南中国海防军事要塞，因抗击英军而名动天下。历经600多年风雨的海防所城，有久远的历史和文化。明代大鹏所城有武略将军刘钟、徐勋，清代大鹏所城有赖氏“三代五将”、刘氏“父子将军”等明清两代十几个将军，为大鹏所城赢得了“将军村”的荣誉。清代的大鹏所城及守城的赖恩爵将军取得了鸦片战争首战——九龙海战的胜利，载入中国近代史册。'}</p>
      </div>
    </div>` : '';
  
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
    ${dapengExtendedContent}
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
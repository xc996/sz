// ===================================
// 深圳旅游网页 - 核心脚本
// ===================================

// ------------------------------
// 数据定义
// ------------------------------

// 翻译数据
const translations = {
    zh: {
        // 导航
        'nav.logo': '深圳',
        'nav.home': '首页',
        'nav.attractions': '景点',
        'nav.culture': '历史文化',
        'nav.food': '美食',
        'nav.shopping': '购物',
        'nav.transport': '交通',
        'nav.map': '地图',
        // 按钮提示
        'btn.lang': '切换语言',
        'btn.theme': '切换主题',
        
        // Hero区
        'hero.title1': '深圳',
        'hero.title2': 'SHENZHEN',
        'hero.subtitle': '创新之城 · 未来之都',
        'hero.stat1': '年改革开放',
        'hero.stat2': '平方公里',
        'hero.stat3': '万常住人口',
        'hero.explore': '探索更多',
        
        // 景点
        'attractions.title': '热门景点',
        'attractions.subtitle': '探索深圳最具代表性的地标建筑与自然风光',
        // 轮播图
        'attractions.slide1.title': '深圳湾公园',
        'attractions.slide1.desc': '绵延15公里的海滨长廊，欣赏日落的最佳地点',
        'attractions.slide2.title': '世界之窗',
        'attractions.slide2.desc': '一天游遍世界，130个微缩景观',
        'attractions.slide3.title': '欢乐谷',
        'attractions.slide3.desc': '华南地区最受欢迎的主题乐园',
        'attractions.slide4.title': '东部华侨城',
        'attractions.slide4.desc': '山海结合的生态旅游度假区',
        'attractions.slide5.title': '平安金融中心',
        'attractions.slide5.desc': '深圳最高建筑，599米云际观光层',
        
        // 文化
        'culture.title': '深圳故事',
        'culture.subtitle': '从小渔村到国际化大都市的华丽蜕变',
        
        // 美食
        'food.title': '美食天堂',
        'food.subtitle': '品味深圳的多元美食文化',
        'food.item1': '潮汕牛肉火锅',
        'food.desc1': '鲜嫩多汁的牛肉，浓郁的牛骨汤，深圳必尝美食',
        'food.item2': '客家盐焗鸡',
        'food.desc2': '皮脆肉嫩，咸香入骨，经典客家名菜',
        'food.item3': '粤菜海鲜',
        'food.desc3': '新鲜海鲜，原汁原味，地道粤菜风味',
        'food.item4': '深圳小吃',
        'food.desc4': '东门老街、车公庙美食街，各种特色小吃',
        
        // 购物
        'shopping.title': '购物天堂',
        'shopping.subtitle': '从高端商场到特色街区，满足你的购物欲望',
        'shopping.item1': '高端商场',
        'shopping.desc1': '万象城、海岸城、益田假日广场，国际品牌云集',
        'shopping.item2': '特色街区',
        'shopping.desc2': '东门老街、华强北、海上世界，各具特色',
        'shopping.item3': '电子产品',
        'shopping.desc3': '华强北电子市场，全球最大的电子集散地',
        
        // 交通
        'transport.title': '便捷交通',
        'transport.subtitle': '四通八达的交通网络，轻松畅游深圳',
        'transport.item1': '地铁',
        'transport.desc1': '覆盖全市主要区域，运营时间：6:30-23:00',
        'transport.item2': '公交',
        'transport.desc2': '线路密集，票价优惠，适合深度游览',
        'transport.item3': '出租车',
        'transport.desc3': '起步价10元，滴滴打车也很方便',
        'transport.item4': '机场',
        'transport.desc4': '深圳宝安国际机场，连接全球主要城市',
        
        // 地图
        'map.subtitle': '基于高德地图，支持缩放与互动',
        
        // Footer
        'footer.about': '关于深圳',
        'footer.desc': '中国改革开放的窗口，创新创业的热土',
        'footer.quick': '快速链接',
        'footer.attractions': '热门景点',
        'footer.map': '互动地图',
        'footer.culture': '文化故事',
        'footer.food': '美食推荐',
        'footer.contact': '联系我们',
        'footer.rights': '保留所有权利'
    },
    en: {
        // Navigation
        'nav.logo': 'Shenzhen',
        'nav.home': 'Home',
        'nav.attractions': 'Attractions',
        'nav.culture': 'History & Culture',
        'nav.food': 'Food',
        'nav.shopping': 'Shopping',
        'nav.transport': 'Transportation',
        'nav.map': 'Map',
        // Button tips
        'btn.lang': 'Switch Language',
        'btn.theme': 'Switch Theme',
        
        // Hero
        'hero.title1': 'SHENZHEN',
        'hero.title2': '深圳',
        'hero.subtitle': 'City of Innovation · Future Metropolis',
        'hero.stat1': 'Years of Reform',
        'hero.stat2': 'Square Kilometers',
        'hero.stat3': 'M Population',
        'hero.explore': 'Explore More',
        
        // Attractions
        'attractions.title': 'Popular Attractions',
        'attractions.subtitle': 'Explore Shenzhen\'s most iconic landmarks and natural scenery',
        // Carousel
        'attractions.slide1.title': 'Shenzhen Bay Park',
        'attractions.slide1.desc': 'A 15km coastal promenade, the best spot to watch the sunset',
        'attractions.slide2.title': 'Window of the World',
        'attractions.slide2.desc': 'Travel the world in one day with 130 miniature attractions',
        'attractions.slide3.title': 'Happy Valley',
        'attractions.slide3.desc': 'The most popular theme park in South China',
        'attractions.slide4.title': 'OCT East',
        'attractions.slide4.desc': 'Eco-tourism resort combining mountains and sea',
        'attractions.slide5.title': 'Ping An Finance Center',
        'attractions.slide5.desc': 'Shenzhen\'s tallest building with 599m observation deck',
        
        // Culture
        'culture.title': 'Shenzhen Story',
        'culture.subtitle': 'From fishing village to international metropolis',
        
        // Food
        'food.title': 'Food Paradise',
        'food.subtitle': 'Taste Shenzhen\'s diverse food culture',
        'food.item1': 'Chaoshan Beef Hotpot',
        'food.desc1': 'Tender beef, rich bone broth, a must-try in Shenzhen',
        'food.item2': 'Hakka Salt-Baked Chicken',
        'food.desc2': 'Crispy skin, tender meat, classic Hakka dish',
        'food.item3': 'Cantonese Seafood',
        'food.desc3': 'Fresh seafood, authentic Cantonese flavor',
        'food.item4': 'Shenzhen Snacks',
        'food.desc4': 'Dongmen Old Street, Chegongmiao Food Street, various snacks',
        
        // Shopping
        'shopping.title': 'Shopping Paradise',
        'shopping.subtitle': 'From high-end malls to characteristic streets, satisfy your shopping desires',
        'shopping.item1': 'High-end Malls',
        'shopping.desc1': 'MixC, Coastal City, Yitian Holiday Plaza, international brands',
        'shopping.item2': 'Characteristic Streets',
        'shopping.desc2': 'Dongmen Old Street, Huaqiangbei, Sea World, each with its own characteristics',
        'shopping.item3': 'Electronics',
        'shopping.desc3': 'Huaqiangbei Electronics Market, the world\'s largest electronics distribution center',
        
        // Transportation
        'transport.title': 'Convenient Transportation',
        'transport.subtitle': 'Extensive transportation network, easy to travel around Shenzhen',
        'transport.item1': 'Metro',
        'transport.desc1': 'Covers major areas, operating hours: 6:30-23:00',
        'transport.item2': 'Bus',
        'transport.desc2': 'Dense routes, affordable fares, suitable for deep exploration',
        'transport.item3': 'Taxi',
        'transport.desc3': 'Starting price ¥10, Didi is also convenient',
        'transport.item4': 'Airport',
        'transport.desc4': 'Shenzhen Baoan International Airport, connecting major cities worldwide',
        
        // Map
        'map.subtitle': 'Based on Amap, supports zooming and interaction',
        
        // Footer
        'footer.about': 'About Shenzhen',
        'footer.desc': 'Window of China\'s reform, hub of innovation',
        'footer.quick': 'Quick Links',
        'footer.attractions': 'Attractions',
        'footer.map': 'Map',
        'footer.culture': 'Culture',
        'footer.food': 'Food',
        'footer.contact': 'Contact Us',
        'footer.rights': 'All Rights Reserved'
    }
};

// 景点数据（配置驱动）
let attractionsList = [];

// 本地文件协议下的内置景点数据（中文注释）
const localAttractionsFallback = [
    {
        slug: 'shenzhenbaypark',
        name: '深圳湾公园',
        nameEn: 'Shenzhen Bay Park',
        district: { zh: '南山区', en: 'Nanshan District' },
        image: 'assets/images/深圳湾公园.jpg',
        seo: { description: { zh: '绵延15公里的海滨长廊，欣赏日落的最佳地点', en: 'A 15km coastal promenade, the best spot to watch the sunset' } }
    },
    {
        slug: 'windowoftheworld',
        name: '世界之窗',
        nameEn: 'Window of the World',
        district: { zh: '南山区', en: 'Nanshan District' },
        image: 'assets/images/世界之窗.jpg',
        seo: { description: { zh: '一天游遍世界，130个微缩景观', en: 'Travel the world in one day with 130 miniature attractions' } }
    },
    {
        slug: 'pinganfinancecenter',
        name: '平安金融中心',
        nameEn: 'Ping An Finance Center',
        district: { zh: '福田区', en: 'Futian District' },
        image: 'assets/images/平安金融中心.jpg',
        seo: { description: { zh: '深圳最高建筑，599米云际观光层', en: "Shenzhen's tallest building with 599m observation deck" } }
    }
];

/**
 * 获取静态资源基础路径（中文注释）
 * 说明：避免覆盖全局 window.getAssetsBase，使用独立包装函数
 */
function resolveAssetsBase() {
    return (typeof window !== 'undefined' && typeof window.getAssetsBase === 'function')
      ? window.getAssetsBase()
      : 'assets/';
}

/**
 * 功能：检测是否为文件协议（中文注释）
 * 说明：用于判断当前页面是否通过 file:// 直接打开
 */
function isFileProtocol() {
    return (window.location.protocol || '').startsWith('file');
}

/**
 * 功能：加载景点配置（中文注释）
 * 说明：优先从 assets/data/attractions.json 读取；在 file:// 环境下自动回退到内置数据
 */
async function loadAttractionsConfig() {
    if (attractionsList && attractionsList.length > 0) return attractionsList;
    const base = resolveAssetsBase();
    try {
        const res = await fetch(`${base}data/attractions.json`, { cache: 'no-cache' });
        if (!res.ok) throw new Error('配置加载失败');
        const json = await res.json();
        attractionsList = Array.isArray(json.items) ? json.items : [];
        return attractionsList;
    } catch (e) {
        if (isFileProtocol()) {
            console.warn('[attractions] 检测到通过文件方式打开，浏览器会阻止 fetch 读取本地文件。已使用内置示例数据作为回退。');
            attractionsList = localAttractionsFallback;
            return attractionsList;
        }
        console.error('[attractions] 配置读取失败', e);
        attractionsList = [];
        return attractionsList;
    }
}

// 时间轴数据
const timelineData = [
    {
        year: '1979',
        title: '特区成立',
        titleEn: 'SEZ Established',
        description: '深圳经济特区正式成立，从小渔村开始腾飞',
        descriptionEn: 'Shenzhen Special Economic Zone established, taking off from a fishing village'
    },
    {
        year: '1987',
        title: '土地拍卖',
        titleEn: 'Land Auction',
        description: '新中国第一次土地拍卖在深圳举行',
        descriptionEn: 'First land auction in New China held in Shenzhen'
    },
    {
        year: '1990',
        title: '证券交易所',
        titleEn: 'Stock Exchange',
        description: '深圳证券交易所成立，中国资本市场起航',
        descriptionEn: 'Shenzhen Stock Exchange founded, launching China\'s capital market'
    },
    {
        year: '2000',
        title: '科技之城',
        titleEn: 'Tech City',
        description: '高新技术产业蓬勃发展，成为创新中心',
        descriptionEn: 'High-tech industry booms, becoming an innovation hub'
    },
    {
        year: '2010',
        title: '设计之都',
        titleEn: 'Design Capital',
        description: '获评联合国教科文组织"设计之都"',
        descriptionEn: 'Named UNESCO City of Design'
    },
    {
        year: '2019',
        title: '先行示范区',
        titleEn: 'Pilot Demonstration',
        description: '建设中国特色社会主义先行示范区',
        descriptionEn: 'Building a pilot demonstration area of socialism with Chinese characteristics'
    }
];

// ------------------------------
// 全局变量
// ------------------------------
let currentLang = 'zh';
let currentTheme = 'light';

// ------------------------------
// 工具函数
// ------------------------------

// 翻译函数
function t(key) {
    return translations[currentLang][key] || key;
}

// 数字动画
function animateNumbers() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = Math.floor(target);
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 20);
    });
}

// ------------------------------
// 国际化功能
// ------------------------------

// 切换语言
function switchLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    document.body.setAttribute('data-lang', currentLang);
    
    // 更新所有带 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // 更新语言按钮文本和提示
    const langBtn = document.getElementById('langSwitch');
    if (langBtn) {
        langBtn.querySelector('span').textContent = currentLang === 'zh' ? 'EN' : '中';
        langBtn.setAttribute('title', translations[currentLang]['btn.lang']);
    }
    
    // 更新主题按钮提示
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.setAttribute('title', translations[currentLang]['btn.theme']);
    }
    
    // 更新景点卡片文本内容
    updateAttractionCardsText();
    // 更新时间轴文本内容
    renderTimeline();
    
    // 保存语言偏好
    localStorage.setItem('preferredLanguage', currentLang);
}

// 初始化语言
function initLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== currentLang) {
        switchLanguage();
    }
}

// ------------------------------
// 主题切换功能
// ------------------------------

// 切换主题
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);
    
    // 更新主题按钮图标
    const themeBtn = document.getElementById('themeToggle');
    const icon = themeBtn.querySelector('i');
    
    // 添加动画类
    icon.classList.add('theme-icon-animate');
    
    // 切换图标
    if (currentTheme === 'dark') {
        setTimeout(() => {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }, 300); // 动画中间点切换图标
    } else {
        setTimeout(() => {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }, 300); // 动画中间点切换图标
    }
    
    // 保存主题偏好
    localStorage.setItem('preferredTheme', currentTheme);
    
    // 动画结束后移除动画类
    setTimeout(() => {
        icon.classList.remove('theme-icon-animate');
    }, 600);
}

// 初始化主题
function initTheme() {
    // 检查保存的主题偏好
    const savedTheme = localStorage.getItem('preferredTheme');
    
    // 检查系统主题偏好
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 优先使用保存的主题，其次是系统主题
    if (savedTheme) {
        currentTheme = savedTheme;
    } else if (systemPrefersDark) {
        currentTheme = 'dark';
    }
    
    // 应用主题
    document.body.setAttribute('data-theme', currentTheme);
    
    // 更新按钮图标
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        const icon = themeBtn.querySelector('i');
        if (currentTheme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
}

// ------------------------------
// 导航栏功能
// ------------------------------

// 自动高亮当前页面导航
function initActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    console.log('[Nav] Init active nav check. Path:', currentPath);
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // 移除所有 active 类
        link.classList.remove('active');
        
        if (href === '#' || href.startsWith('#')) return;

        // 简单匹配：当前路径包含 href 中的关键部分
        // 例如：/pages/attractions/detail.html 包含 attractions，匹配 <a href="pages/attractions.html">
        const hrefKey = href.replace('.html', '').split('/').pop();
        if (currentPath.includes(hrefKey)) {
             link.classList.add('active');
             console.log('[Nav] Activated via JS:', href);
        } 
        // 处理首页匹配
        else if (currentPath.endsWith('/') && href === 'index.html') {
            link.classList.add('active');
            console.log('[Nav] Activated home via JS:', href);
        }
    });
}

// 导航栏滚动效果
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) {
        console.error('[Navbar] Element not found!');
        return;
    }
    
    function updateNavbar() {
        const scrollY = window.scrollY;
        // 添加日志排查滚动问题
        // console.log('[Navbar] ScrollY:', scrollY); 
        
        if (scrollY > 50) {
            if (!navbar.classList.contains('scrolled')) {
                navbar.classList.add('scrolled');
                console.log('[Navbar] Added .scrolled class');
            }
        } else {
            if (navbar.classList.contains('scrolled')) {
                navbar.classList.remove('scrolled');
                console.log('[Navbar] Removed .scrolled class');
            }
        }
    }
    
    updateNavbar();
    window.addEventListener('scroll', updateNavbar);
}

// 移动端菜单切换
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const isSmall = () => window.matchMedia('(max-width: 992px)').matches;
    if (!menuToggle || !navMenu) return;
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    menuToggle.addEventListener('mouseenter', () => {
        if (isSmall()) navMenu.classList.add('active');
    });
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    navMenu.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', (e) => {
            const a = li.querySelector('a');
            if (a && e.target !== a) a.click();
            navMenu.classList.remove('active');
        });
    });
    navMenu.addEventListener('mouseleave', () => {
        if (!isSmall()) navMenu.classList.remove('active');
    });
    document.addEventListener('mouseover', (e) => {
        if (isSmall()) return;
        const target = e.target;
        const inside = navMenu.contains(target) || menuToggle.contains(target);
        if (!inside && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });
    document.addEventListener('click', (e) => {
        if (!isSmall()) return;
        const target = e.target;
        const isInsideMenu = navMenu.contains(target);
        const isToggle = menuToggle.contains(target);
        if (navMenu.classList.contains('active') && !isInsideMenu && !isToggle) {
            navMenu.classList.remove('active');
        }
    });
}

// ------------------------------
// 返回顶部按钮
// ------------------------------

function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ------------------------------
// 动态渲染函数
// ------------------------------

/**
 * 功能：渲染景点列表（中文注释）
 * 说明：根据已加载的配置渲染卡片；当无数据时展示友好提示
 */
async function renderAttractions() {
    const grid = document.getElementById('attractionsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const items = await loadAttractionsConfig();
    if (!items || items.length === 0) {
        renderAttractionsEmptyState();
        return;
    }
    items.forEach(attraction => {
        const slug = attraction.slug;
        const detailUrl = `attractions/detail.html?slug=${slug}`;
        const base = resolveAssetsBase();
        const imgSrc = (attraction.image || '').startsWith('assets/') ? `${base}${attraction.image.replace('assets/','')}` : (attraction.image || `${base}images/placeholder.svg`);
        console.log(`[list] link=${detailUrl} slug=${slug} mode=query`);
        
        const card = document.createElement('div');
        card.className = 'attraction-card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${imgSrc}" alt="${currentLang === 'zh' ? attraction.name : attraction.nameEn}" onerror="this.onerror=null;this.src='/assets/images/placeholder.svg'">
            </div>
            <div class="card-content">
                <h3 class="card-title">${currentLang === 'zh' ? attraction.name : attraction.nameEn}</h3>
                <p class="card-description">${currentLang === 'zh' ? (attraction.seo?.description?.zh || '') : (attraction.seo?.description?.en || '')}</p>
                <div class="card-meta">
                    <div class="card-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${currentLang === 'zh' ? (attraction.district?.zh || '') : (attraction.district?.en || '')}</span>
                    </div>
                    <a href="${detailUrl}" class="detail-btn" data-slug="${slug}" title="${currentLang === 'zh' ? '查看详情' : 'View Details'}">${currentLang === 'zh' ? '详' : 'Detail'}</a>
                </div>
            </div>
        `;
        card.setAttribute('data-index', String(items.indexOf(attraction)));
        grid.appendChild(card);
    });
    
    // 确保卡片创建完成后绑定点击事件
    bindAttractionClickEvents();
}

/**
 * 功能：渲染空状态提示（中文注释）
 * 说明：在无法加载配置或数据为空时，为用户提供解决方案与回退说明
 */
function renderAttractionsEmptyState() {
    const grid = document.getElementById('attractionsGrid');
    if (!grid) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'empty-state';
    wrapper.innerHTML = `
        <div class="empty-state-content">
            <h3>无法加载景点数据</h3>
            <p>检测到通过本地文件方式打开页面，浏览器会阻止读取本地 JSON 文件。</p>
            <p>解决方案：</p>
            <ul>
                <li>在项目目录运行：<code>python3 -m http.server 5500</code></li>
                <li>然后访问：<code>http://localhost:5500/attractions.html</code></li>
            </ul>
            <p>当前已展示少量内置示例数据作为回退。</p>
        </div>
    `;
    grid.appendChild(wrapper);
}

/**
 * 功能：更新景点卡片的文本内容
 * 说明：只更新现有卡片的文本内容，不重新渲染整个列表，提高性能
 */
async function updateAttractionCardsText() {
    const cards = document.querySelectorAll('.attraction-card');
    if (!cards || cards.length === 0) {
        // 如果没有卡片，重新渲染
        await renderAttractions();
        return;
    }
    
    const items = await loadAttractionsConfig();
    if (!items || items.length === 0) return;
    
    cards.forEach(card => {
        const index = parseInt(card.getAttribute('data-index'));
        const attraction = items[index];
        if (!attraction) return;
        
        // 更新卡片标题
        const title = card.querySelector('.card-title');
        if (title) {
            title.textContent = currentLang === 'zh' ? attraction.name : attraction.nameEn;
        }
        
        // 更新卡片描述
        const description = card.querySelector('.card-description');
        if (description) {
            description.textContent = currentLang === 'zh' ? (attraction.seo?.description?.zh || '') : (attraction.seo?.description?.en || '');
        }
        
        // 更新卡片位置
        const location = card.querySelector('.card-location span');
        if (location) {
            location.textContent = currentLang === 'zh' ? (attraction.district?.zh || '') : (attraction.district?.en || '');
        }
        
        // 更新查看详情按钮
        const detailBtn = card.querySelector('.detail-btn');
        if (detailBtn) {
            detailBtn.textContent = currentLang === 'zh' ? '详' : 'Detail';
            detailBtn.setAttribute('title', currentLang === 'zh' ? '查看详情' : 'View Details');
        }
    });
}

/**
 * 功能：在离开列表进入详情前保存当前滚动位置（中文注释）
 * 说明：使用 sessionStorage 存储 Y 坐标与进入的条目标识，便于返回时恢复
 */
function saveEntryScroll(slug) {
    try {
        sessionStorage.setItem('attractionsScrollY', String(window.scrollY));
        sessionStorage.setItem('attractionsEntrySlug', slug || '');
        sessionStorage.setItem('attractionsSavedAt', String(Date.now()));
    } catch (e) {}
}

/**
 * 功能：从 sessionStorage 恢复列表滚动位置（中文注释）
 * 说明：仅在数据有效且未过期时恢复，并清理已使用的数据
 */
function restoreEntryScroll() {
    const yStr = sessionStorage.getItem('attractionsScrollY');
    const atStr = sessionStorage.getItem('attractionsSavedAt');
    const y = yStr ? parseInt(yStr, 10) : NaN;
    const at = atStr ? parseInt(atStr, 10) : 0;
    if (!Number.isNaN(y) && Date.now() - at < 5 * 60 * 1000) {
        window.scrollTo({ top: y, behavior: 'auto' });
    }
    sessionStorage.removeItem('attractionsScrollY');
    sessionStorage.removeItem('attractionsEntrySlug');
    sessionStorage.removeItem('attractionsSavedAt');
}

/**
 * 功能：为详情链接绑定点击事件以保存滚动位置（中文注释）
 * 说明：在跳转到 attractions/*.html 之前记录当前位置
 */
function bindDetailEntryScroll() {
    const links = document.querySelectorAll('.detail-btn');
    if (!links || links.length === 0) return;
    links.forEach(link => {
        link.addEventListener('click', () => {
            const slug = link.getAttribute('data-slug') || '';
            saveEntryScroll(slug);
        });
    });
}
// 渲染时间轴
function renderTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    
    // 检查是否已有时间轴项，如果有则只更新文本内容
    const existingItems = timeline.querySelectorAll('.timeline-item');
    if (existingItems.length === timelineData.length) {
        // 更新现有项的文本内容
        existingItems.forEach((item, index) => {
            const dataItem = timelineData[index];
            if (!dataItem) return;
            
            const h3 = item.querySelector('h3');
            if (h3) {
                h3.textContent = currentLang === 'zh' ? dataItem.title : dataItem.titleEn;
            }
            
            const p = item.querySelector('.timeline-text');
            if (p) {
                p.textContent = currentLang === 'zh' ? dataItem.description : dataItem.descriptionEn;
            }
        });
        return;
    }
    
    // 如果没有现有项或数量不匹配，则重新渲染
    timeline.innerHTML = '';
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-year">${item.year}</div>
                <h3>${currentLang === 'zh' ? item.title : item.titleEn}</h3>
                <p class="timeline-text">${currentLang === 'zh' ? item.description : item.descriptionEn}</p>
            </div>
            <div class="timeline-dot"></div>
        `;
        timeline.appendChild(timelineItem);
    });
}

// ------------------------------
// 初始化函数
// ------------------------------

// 页面加载完成后执行
function init() {
    // 初始化AOS动画（存在性判断）
    if (window.AOS && typeof AOS.init === 'function') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    
    // 初始化语言
    initLanguage();
    
    // 初始化主题
    initTheme();
    
    // 初始化导航栏
    initNavbarScroll();
    initActiveNav();
    initMobileMenu();
    
    // 初始化返回顶部按钮
    initBackToTop();
    
    // 渲染时间轴
    renderTimeline();
    
    // 渲染景点
    renderAttractions();
    
    // 数字动画
    animateNumbers();
    
    // 绑定事件
    const langSwitch = document.getElementById('langSwitch');
    const themeToggle = document.getElementById('themeToggle');
    const ctaBtn = document.querySelector('.cta-btn');
    
    if (langSwitch) {
        langSwitch.addEventListener('click', switchLanguage);
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            // 滚动到景点展示区
            const attractionsSection = document.getElementById('attractions');
            if (attractionsSection) {
                attractionsSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // 监听滚动事件，为新进入视口的元素添加动画
    window.addEventListener('scroll', () => {
        // 可以在这里添加滚动触发的动画逻辑
    });
}

// ------------------------------
// 景点详情弹窗功能
// ------------------------------

// 显示景点详情弹窗
function showAttractionDetail(attraction) {
    // 获取当前语言
    const lang = document.body.getAttribute('data-lang') || 'zh';
    const name = lang === 'en' ? attraction.nameEn : attraction.name;
    const desc = lang === 'en' ? attraction.descriptionEn : attraction.description;
    const location = lang === 'en' ? attraction.locationEn : attraction.location;
    
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <img src="${attraction.image}" alt="${name}">
            <h2>${name}</h2>
            <p>${desc}</p>
            <div class="modal-info">
                <span><i class="fas fa-map-marker-alt"></i> ${location}</span>
            </div>
        </div>
    `;
    
    // 添加到页面
    document.body.appendChild(modal);
    
    // 关闭模态框 - 点击关闭按钮
    modal.querySelector('.modal-close').addEventListener('click', () => {
        closeModal(modal);
    });
    
    // 关闭模态框 - 点击遮罩层
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal);
        }
    });
    
    // 关闭模态框 - 按ESC键
    const handleEscKey = (e) => {
        if (e.key === 'Escape') {
            closeModal(modal);
            document.removeEventListener('keydown', handleEscKey);
        }
    };
    document.addEventListener('keydown', handleEscKey);
}

// 关闭模态框
function closeModal(modal) {
    // 确保动画只应用一次
    if (modal.classList.contains('closing')) return;
    modal.classList.add('closing');
    
    // 平滑淡出效果
    modal.style.transition = 'opacity 0.3s ease';
    modal.style.opacity = '0';
    
    const content = modal.querySelector('.modal-content');
    content.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    content.style.transform = 'scale(0.95)';
    content.style.opacity = '0';
    
    // 确保动画完成后再移除元素
    setTimeout(() => {
        if (modal.parentNode) {
            modal.remove();
        }
    }, 300);
}

// 绑定景点卡片点击事件
function bindAttractionClickEvents() {
    const cards = document.querySelectorAll('.attraction-card');
    cards.forEach((card, index) => {
        card.addEventListener('click', (e) => {
            // 检查点击的目标是否是链接或链接的子元素，如果是则不显示弹窗
            if (e.target.closest('a')) {
                return;
            }
            const i = parseInt(card.getAttribute('data-index') || String(index), 10);
            const data = attractionsList[i];
            if (data) {
                // 处理图片路径，确保使用正确的资源路径
                const base = resolveAssetsBase();
                const imgSrc = (data.image || '').startsWith('assets/') ? `${base}${data.image.replace('assets/','')}` : (data.image || `${base}images/placeholder.svg`);
                
                const mapped = {
                    name: data.name,
                    nameEn: data.nameEn,
                    description: data.seo?.description?.zh || '',
                    descriptionEn: data.seo?.description?.en || '',
                    image: imgSrc,
                    location: data.district?.zh || '',
                    locationEn: data.district?.en || ''
                };
                console.log(`[list] card-click slug=${data.slug}`);
                showAttractionDetail(mapped);
            }
        });
    });
}

// ------------------------------
// 轮播功能
// ------------------------------

// 轮播对象
const carousel = {
    currentIndex: 0,
    items: [],
    indicators: [],
    interval: null,
    autoPlay: true,
    intervalTime: 5000,
    
    // 初始化轮播
    init() {
        this.items = document.querySelectorAll('.carousel-item');
        this.createIndicators();
        this.startAutoPlay();
        this.bindEvents();
    },
    
    // 创建指示器
    createIndicators() {
        const indicatorsContainer = document.getElementById('carouselIndicators');
        if (!indicatorsContainer) return;
        
        indicatorsContainer.innerHTML = '';
        this.indicators = [];
        
        this.items.forEach((item, index) => {
            const indicator = document.createElement('button');
            indicator.className = `carousel-indicator ${index === 0 ? 'active' : ''}`;
            indicator.setAttribute('data-index', index);
            indicator.addEventListener('click', () => this.goToSlide(index));
            indicatorsContainer.appendChild(indicator);
            this.indicators.push(indicator);
        });
    },
    
    // 切换到指定幻灯片
    goToSlide(index) {
        // 移除当前活动状态
        this.items[this.currentIndex].classList.remove('active');
        this.indicators[this.currentIndex].classList.remove('active');
        
        // 更新索引
        this.currentIndex = index;
        if (this.currentIndex >= this.items.length) {
            this.currentIndex = 0;
        } else if (this.currentIndex < 0) {
            this.currentIndex = this.items.length - 1;
        }
        
        // 添加新的活动状态
        this.items[this.currentIndex].classList.add('active');
        this.indicators[this.currentIndex].classList.add('active');
        
        // 重置自动播放
        if (this.autoPlay) {
            this.resetAutoPlay();
        }
    },
    
    // 下一张
    next() {
        this.goToSlide(this.currentIndex + 1);
    },
    
    // 上一张
    prev() {
        this.goToSlide(this.currentIndex - 1);
    },
    
    // 开始自动播放
    startAutoPlay() {
        if (this.autoPlay && !this.interval) {
            this.interval = setInterval(() => {
                this.next();
            }, this.intervalTime);
        }
    },
    
    // 重置自动播放
    resetAutoPlay() {
        clearInterval(this.interval);
        this.interval = null;
        this.startAutoPlay();
    },
    
    // 暂停自动播放
    pauseAutoPlay() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    },
    
    // 绑定事件
    bindEvents() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.prev());
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.next());
        }
        
        // 点击指示器也会重置自动播放
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });
    }
};

// ------------------------------
// 页面加载完成后初始化
// ------------------------------

document.addEventListener('DOMContentLoaded', () => {
    init();
    
    if (document.querySelector('.carousel-section')) {
        carousel.init();
    }
    
    bindAttractionClickEvents();
    
    if (document.getElementById('attractionsGrid')) {
        restoreEntryScroll();
        bindDetailEntryScroll();
    }
});

// ------------------------------
// 监听系统主题变化
// ------------------------------

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // 只有在用户没有手动设置主题时才自动切换
    if (!localStorage.getItem('preferredTheme')) {
        currentTheme = e.matches ? 'dark' : 'light';
        document.body.setAttribute('data-theme', currentTheme);
        
        // 更新主题按钮图标
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            const icon = themeBtn.querySelector('i');
            if (currentTheme === 'dark') {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    }
});

// 在页面通过 bfcache 恢复时也尝试恢复滚动（中文注释）
window.addEventListener('pageshow', () => {
    if (document.getElementById('attractionsGrid')) {
        restoreEntryScroll();
    }
});

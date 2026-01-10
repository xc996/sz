// ===================================
// 深圳旅游网页 - 交通脚本
// ===================================

// 翻译数据
const translations = {
    zh: {
        'nav.logo': '深圳',
        'nav.home': '首页',
        'nav.attractions': '景点',
        'nav.culture': '历史文化',
        'nav.food': '美食',
        'nav.shopping': '购物',
        'nav.transport': '交通',
        'nav.map': '地图',
        'btn.lang': '切换语言',
        'btn.theme': '切换主题',
        'hero.transport.title1': '交通',
        'hero.transport.title2': 'TRANSPORT',
        'transport.main-title': '深圳交通',
        'transport.main-subtitle': '多种交通方式，便捷出行',
        'transport.features': '主要特点：',
        'transport.metro.title': '深圳地铁',
        'transport.metro.desc': '深圳地铁是覆盖全市主要区域的地下交通网络，运营时间通常为6:30-23:00。网络密集，准时高效，冷气充足，是深圳市民和游客出行的首选方式。',
        'transport.metro.feature1': '覆盖全市主要区域',
        'transport.metro.feature2': '运营时间：6:30-23:00',
        'transport.metro.feature3': '准时高效，班次密集',
        'transport.metro.feature4': '支持扫码支付和深圳通',
        'transport.airport.title': '深圳宝安国际机场',
        'transport.airport.desc': '深圳宝安国际机场是一座现代化的大型国际机场，拥有独特的“大飞鱼”造型T3航站楼，海陆空联运便捷。机场连接全球多个城市，是深圳的空中门户。',
        'transport.airport.feature1': '拥有“大飞鱼”造型T3航站楼',
        'transport.airport.feature2': '国际通航，连接全球',
        'transport.airport.feature3': '海陆空联运便捷',
        'transport.airport.feature4': '多条地铁线直达',
        'transport.train.title': '高铁/火车站',
        'transport.train.desc': '深圳拥有多个主要火车站，包括深圳北站、福田站、深圳站等，连接全国各大城市。高铁直达香港西九龙仅需14分钟，交通十分便捷。',
        'transport.train.stations': '主要站点：',
        'transport.train.station1': '深圳北站：主要高铁站，连接全国',
        'transport.train.station2': '福田站：亚洲最大地下火车站',
        'transport.train.station3': '深圳站：连接香港红磡',
        'transport.train.station4': '高铁直达香港西九龙仅需14分钟',
        'transport.title': '便捷交通',
        'transport.subtitle': '四通八达的交通网络，轻松畅游深圳',
        'traffic.empty.title': '无法加载数据',
        'traffic.empty.desc': '请检查网络连接或稍后重试。',
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
        'nav.logo': 'Shenzhen',
        'nav.home': 'Home',
        'nav.attractions': 'Attractions',
        'nav.culture': 'History & Culture',
        'nav.food': 'Food',
        'nav.shopping': 'Shopping',
        'nav.transport': 'Transportation',
        'nav.map': 'Map',
        'btn.lang': 'Switch Language',
        'btn.theme': 'Switch Theme',
        'hero.transport.title1': 'TRANSPORT',
        'hero.transport.title2': '交通',
        'transport.main-title': 'Transportation',
        'transport.main-subtitle': 'Multiple travel options for easy commuting',
        'transport.features': 'Key Features:',
        'transport.metro.title': 'Shenzhen Metro',
        'transport.metro.desc': 'Shenzhen Metro is a citywide rapid transit network covering major areas. Typical operating hours are 6:30–23:00. With frequent trains, punctual service, and air-conditioned stations and cars, it is a top choice for both residents and visitors.',
        'transport.metro.feature1': 'Covers major areas across the city',
        'transport.metro.feature2': 'Operating hours: 6:30–23:00',
        'transport.metro.feature3': 'Frequent service and punctual operations',
        'transport.metro.feature4': 'Supports QR payments and Shenzhen Tong',
        'transport.airport.title': 'Shenzhen Bao’an International Airport',
        'transport.airport.desc': 'Shenzhen Bao’an International Airport is a modern international hub featuring the iconic T3 terminal with a “manta ray” design. With convenient sea-air-land connections, it links Shenzhen to cities around the world.',
        'transport.airport.feature1': 'Iconic “manta ray” T3 terminal design',
        'transport.airport.feature2': 'International routes connecting global destinations',
        'transport.airport.feature3': 'Convenient sea-air-land intermodal links',
        'transport.airport.feature4': 'Direct access via multiple metro lines',
        'transport.train.title': 'High-Speed Rail / Railway Stations',
        'transport.train.desc': 'Shenzhen has several major railway stations, including Shenzhen North, Futian, and Shenzhen Station, connecting to cities nationwide. High-speed trains reach Hong Kong West Kowloon in as little as 14 minutes.',
        'transport.train.stations': 'Major Stations:',
        'transport.train.station1': 'Shenzhen North: main HSR hub with nationwide connections',
        'transport.train.station2': 'Futian: one of Asia’s largest underground stations',
        'transport.train.station3': 'Shenzhen Station: connects to Hong Kong Hung Hom',
        'transport.train.station4': 'HSR to Hong Kong West Kowloon in as little as 14 minutes',
        'transport.title': 'Convenient Transportation',
        'transport.subtitle': 'Extensive transportation network, easy to travel around Shenzhen',
        'traffic.empty.title': 'Unable to load data',
        'traffic.empty.desc': 'Please check your network connection or try again later.',
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

let trafficList = [];

const localTrafficFallback = [
    {
        slug: 'metro',
        name: '深圳地铁',
        nameEn: 'Shenzhen Metro',
        district: { zh: '全市', en: 'Citywide' },
        image: 'assets/images/traffic_metro.svg',
        seo: { description: { zh: '四通八达的地下交通网络', en: 'Extensive underground transport network' } }
    }
];

function isFileProtocol() {
    return (window.location.protocol || '').startsWith('file');
}

async function loadTrafficConfig() {
    if (trafficList && trafficList.length > 0) return trafficList;
    const base = getAssetsBase();
    try {
        const res = await fetch(`${base}data/traffic.json`, { cache: 'no-cache' });
        if (!res.ok) throw new Error('配置加载失败');
        const json = await res.json();
        trafficList = Array.isArray(json.items) ? json.items : [];
        return trafficList;
    } catch (e) {
        if (isFileProtocol()) {
            console.warn('[traffic] 检测到本地文件模式，使用回退数据');
            trafficList = localTrafficFallback;
            return trafficList;
        }
        console.error('[traffic] 配置读取失败', e);
        trafficList = [];
        return trafficList;
    }
}

// ------------------------------
// 全局变量
// ------------------------------
let currentLang = 'zh';
let currentTheme = 'light';

// ------------------------------
// 工具函数
// ------------------------------

function t(key) {
    return translations[currentLang][key] || key;
}

// ------------------------------
// 国际化功能
// ------------------------------

function switchLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    document.body.setAttribute('data-lang', currentLang);
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
    
    const langBtn = document.getElementById('langSwitch');
    if (langBtn) {
        langBtn.querySelector('span').textContent = currentLang === 'zh' ? 'EN' : '中';
        langBtn.setAttribute('title', translations[currentLang]['btn.lang']);
    }
    
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.setAttribute('title', translations[currentLang]['btn.theme']);
    }
    
    updateTrafficCardsText();
    localStorage.setItem('preferredLanguage', currentLang);
}

function initLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && savedLang !== currentLang) {
        switchLanguage();
    }
}

// ------------------------------
// 主题切换功能
// ------------------------------

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);
    
    const themeBtn = document.getElementById('themeToggle');
    const icon = themeBtn.querySelector('i');
    
    icon.classList.add('theme-icon-animate');
    
    if (currentTheme === 'dark') {
        setTimeout(() => {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }, 300);
    } else {
        setTimeout(() => {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }, 300);
    }
    
    localStorage.setItem('preferredTheme', currentTheme);
    
    setTimeout(() => {
        icon.classList.remove('theme-icon-animate');
    }, 600);
}

function initTheme() {
    const savedTheme = localStorage.getItem('preferredTheme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        currentTheme = savedTheme;
    } else if (systemPrefersDark) {
        currentTheme = 'dark';
    }
    
    document.body.setAttribute('data-theme', currentTheme);
    
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
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // 移除所有 active 类
        link.classList.remove('active');
        
        if (href === '#' || href.startsWith('#')) return;

        // 简单匹配：当前路径包含 href 中的关键部分
        // 例如：/pages/traffic/detail.html 包含 traffic，匹配 <a href="pages/traffic.html">
        const hrefKey = href.replace('.html', '').split('/').pop();
        if (currentPath.includes(hrefKey)) {
             link.classList.add('active');
        } 
        // 处理首页匹配
        else if (currentPath.endsWith('/') && href === 'index.html') {
            link.classList.add('active');
        }
    });
}

function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    updateNavbar();
    window.addEventListener('scroll', updateNavbar);
}

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

async function renderTraffic() {
    const grid = document.getElementById('trafficGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const items = await loadTrafficConfig();
    if (!items || items.length === 0) {
        renderTrafficEmptyState();
        return;
    }
    items.forEach(item => {
        const slug = item.slug;
        const detailUrl = `attractions/detail.html?type=traffic&slug=${slug}`;
        const base = getAssetsBase();
        const imgSrc = (item.image || '').startsWith('assets/') ? `${base}${item.image.replace('assets/','')}` : (item.image || `${base}images/placeholder.svg`);
        
        const card = document.createElement('div');
        card.className = 'attraction-card'; // 复用卡片样式
        card.innerHTML = `
            <div class="card-image">
                <img src="${imgSrc}" alt="${currentLang === 'zh' ? item.name : item.nameEn}" onerror="this.onerror=null;this.src='/assets/images/placeholder.svg'">
            </div>
            <div class="card-content">
                <h3 class="card-title">${currentLang === 'zh' ? item.name : item.nameEn}</h3>
                <p class="card-description">${currentLang === 'zh' ? (item.seo?.description?.zh || '') : (item.seo?.description?.en || '')}</p>
                <div class="card-meta">
                    <div class="card-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${currentLang === 'zh' ? (item.district?.zh || '') : (item.district?.en || '')}</span>
                    </div>
                    <a href="${detailUrl}" class="detail-btn" data-slug="${slug}" title="${currentLang === 'zh' ? '查看详情' : 'View Details'}">${currentLang === 'zh' ? '详' : 'Detail'}</a>
                </div>
            </div>
        `;
        card.setAttribute('data-index', String(items.indexOf(item)));
        grid.appendChild(card);
    });
}

function renderTrafficEmptyState() {
    const grid = document.getElementById('trafficGrid');
    if (!grid) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'empty-state';
    wrapper.innerHTML = `
        <div class="empty-state-content">
            <h3 data-i18n="traffic.empty.title">${t('traffic.empty.title')}</h3>
            <p data-i18n="traffic.empty.desc">${t('traffic.empty.desc')}</p>
        </div>
    `;
    grid.appendChild(wrapper);
}

async function updateTrafficCardsText() {
    const cards = document.querySelectorAll('.attraction-card');
    if (!cards || cards.length === 0) {
        await renderTraffic();
        return;
    }
    
    const items = await loadTrafficConfig();
    if (!items || items.length === 0) return;
    
    cards.forEach(card => {
        const index = parseInt(card.getAttribute('data-index'));
        const item = items[index];
        if (!item) return;
        
        const title = card.querySelector('.card-title');
        if (title) {
            title.textContent = currentLang === 'zh' ? item.name : item.nameEn;
        }
        
        const description = card.querySelector('.card-description');
        if (description) {
            description.textContent = currentLang === 'zh' ? (item.seo?.description?.zh || '') : (item.seo?.description?.en || '');
        }
        
        const location = card.querySelector('.card-location span');
        if (location) {
            location.textContent = currentLang === 'zh' ? (item.district?.zh || '') : (item.district?.en || '');
        }
        
        const detailBtn = card.querySelector('.detail-btn');
        if (detailBtn) {
            detailBtn.textContent = currentLang === 'zh' ? '详' : 'Detail';
            detailBtn.setAttribute('title', currentLang === 'zh' ? '查看详情' : 'View Details');
        }
    });
}

function saveEntryScroll(slug) {
    try {
        sessionStorage.setItem('trafficScrollY', String(window.scrollY));
        sessionStorage.setItem('trafficEntrySlug', slug || '');
        sessionStorage.setItem('trafficSavedAt', String(Date.now()));
    } catch (e) {}
}

function restoreEntryScroll() {
    const yStr = sessionStorage.getItem('trafficScrollY');
    const atStr = sessionStorage.getItem('trafficSavedAt');
    const y = yStr ? parseInt(yStr, 10) : NaN;
    const at = atStr ? parseInt(atStr, 10) : 0;
    if (!Number.isNaN(y) && Date.now() - at < 5 * 60 * 1000) {
        window.scrollTo({ top: y, behavior: 'auto' });
    }
    sessionStorage.removeItem('trafficScrollY');
    sessionStorage.removeItem('trafficEntrySlug');
    sessionStorage.removeItem('trafficSavedAt');
}

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

// ------------------------------
// 初始化函数
// ------------------------------

function init() {
    if (window.AOS && typeof AOS.init === 'function') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
    
    initLanguage();
    initTheme();
    initNavbarScroll();
    initActiveNav();
    initMobileMenu();
    initBackToTop();
    renderTraffic();
    
    const langSwitch = document.getElementById('langSwitch');
    const themeToggle = document.getElementById('themeToggle');
    
    if (langSwitch) {
        langSwitch.addEventListener('click', switchLanguage);
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
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
        this.ensureTitle();
        this.items = document.querySelectorAll('.carousel-item');
        this.createIndicators();
        this.startAutoPlay();
        this.bindEvents();
    },

    ensureTitle() {
        if (document.querySelector('.carousel-title')) return;
        const carouselWrapper = document.getElementById('carouselWrapper');
        if (!carouselWrapper || !carouselWrapper.parentNode) return;

        const carouselTitle = document.createElement('div');
        carouselTitle.className = 'carousel-title';
        carouselTitle.innerHTML = `
            <h1 data-i18n="hero.transport.title1">${currentLang === 'zh' ? '交通' : 'TRANSPORT'}</h1>
            <h2 data-i18n="hero.transport.title2">${currentLang === 'zh' ? 'TRANSPORT' : '交通'}</h2>
        `;
        carouselWrapper.parentNode.insertBefore(carouselTitle, carouselWrapper);
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
    
    // 初始化轮播
    if (document.querySelector('.carousel-section')) {
        console.log('Carousel section found, initializing...');
        carousel.init();
    }
    
    if (document.getElementById('trafficGrid')) {
        restoreEntryScroll();
        bindDetailEntryScroll();
    }
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('preferredTheme')) {
        currentTheme = e.matches ? 'dark' : 'light';
        document.body.setAttribute('data-theme', currentTheme);
        
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

window.addEventListener('pageshow', () => {
    if (document.getElementById('trafficGrid')) {
        restoreEntryScroll();
    }
});

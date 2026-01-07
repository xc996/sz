// ===================================
// 深圳旅游网页 - 美食脚本
// ===================================

// ------------------------------
// 数据定义
// ------------------------------

// 翻译数据 (复用，实际开发中建议提取为公共模块)
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
        'hero.food.title1': '美食',
        'hero.food.title2': 'FOOD',
        'food.title': '美食天堂',
        'food.subtitle': '品味深圳的多元美食文化',
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
        'hero.food.title1': 'FOOD',
        'hero.food.title2': '美食',
        'food.title': 'Food Paradise',
        'food.subtitle': 'Taste Shenzhen\'s diverse food culture',
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

// 美食数据
let foodList = [];

// 本地回退数据
const localFoodFallback = [
    {
        slug: 'beefhotpot',
        name: '潮汕牛肉火锅',
        nameEn: 'Chaoshan Beef Hotpot',
        district: { zh: '全市', en: 'Citywide' },
        image: 'assets/images/潮汕牛肉火锅.jpg',
        seo: { description: { zh: '鲜嫩多汁的牛肉，浓郁的牛骨汤', en: 'Tender beef, rich bone broth' } }
    },
    {
        slug: 'coconutchicken',
        name: '椰子鸡',
        nameEn: 'Coconut Chicken Hotpot',
        district: { zh: '全市', en: 'Citywide' },
        image: 'assets/images/椰子鸡.jpg',
        seo: { description: { zh: '清甜椰子水煮文昌鸡', en: 'Wenchang chicken cooked in sweet coconut water' } }
    }
];

function isFileProtocol() {
    return (window.location.protocol || '').startsWith('file');
}

async function loadFoodConfig() {
    if (foodList && foodList.length > 0) return foodList;
    const base = getAssetsBase();
    try {
        const res = await fetch(`${base}data/food.json`, { cache: 'no-cache' });
        if (!res.ok) throw new Error('配置加载失败');
        const json = await res.json();
        foodList = Array.isArray(json.items) ? json.items : [];
        return foodList;
    } catch (e) {
        if (isFileProtocol()) {
            console.warn('[food] 检测到本地文件模式，使用回退数据');
            foodList = localFoodFallback;
            return foodList;
        }
        console.error('[food] 配置读取失败', e);
        foodList = [];
        return foodList;
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
    
    updateFoodCardsText();
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
        // 例如：/pages/food/detail.html 包含 food，匹配 <a href="pages/food.html">
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

async function renderFood() {
    const grid = document.getElementById('foodGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const items = await loadFoodConfig();
    if (!items || items.length === 0) {
        renderFoodEmptyState();
        return;
    }
    items.forEach(item => {
        const slug = item.slug;
        const detailUrl = `attractions/detail.html?type=food&slug=${slug}`;
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
                    <a href="${detailUrl}" class="detail-btn" data-slug="${slug}" title="${currentLang === 'zh' ? '查看详情' : 'View Details'}">${currentLang === 'zh' ? '品' : 'Try'}</a>
                </div>
            </div>
        `;
        card.setAttribute('data-index', String(items.indexOf(item)));
        grid.appendChild(card);
    });
}

function renderFoodEmptyState() {
    const grid = document.getElementById('foodGrid');
    if (!grid) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'empty-state';
    wrapper.innerHTML = `
        <div class="empty-state-content">
            <h3>无法加载数据</h3>
            <p>请检查网络连接或稍后重试。</p>
        </div>
    `;
    grid.appendChild(wrapper);
}

async function updateFoodCardsText() {
    const cards = document.querySelectorAll('.attraction-card');
    if (!cards || cards.length === 0) {
        await renderFood();
        return;
    }
    
    const items = await loadFoodConfig();
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
        

        
        const detailBtn = card.querySelector('.detail-btn');
        if (detailBtn) {
            detailBtn.textContent = currentLang === 'zh' ? '品' : 'Try';
            detailBtn.setAttribute('title', currentLang === 'zh' ? '查看详情' : 'View Details');
        }
    });
}

function saveEntryScroll(slug) {
    try {
        sessionStorage.setItem('foodScrollY', String(window.scrollY));
        sessionStorage.setItem('foodEntrySlug', slug || '');
        sessionStorage.setItem('foodSavedAt', String(Date.now()));
    } catch (e) {}
}

function restoreEntryScroll() {
    const yStr = sessionStorage.getItem('foodScrollY');
    const atStr = sessionStorage.getItem('foodSavedAt');
    const y = yStr ? parseInt(yStr, 10) : NaN;
    const at = atStr ? parseInt(atStr, 10) : 0;
    if (!Number.isNaN(y) && Date.now() - at < 5 * 60 * 1000) {
        window.scrollTo({ top: y, behavior: 'auto' });
    }
    sessionStorage.removeItem('foodScrollY');
    sessionStorage.removeItem('foodEntrySlug');
    sessionStorage.removeItem('foodSavedAt');
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
    renderFood();
    
    // 初始化轮播
    carousel.init();
    
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
// 页面加载完成后初始化
// ------------------------------

document.addEventListener('DOMContentLoaded', () => {
    init();
    
    if (document.getElementById('foodGrid')) {
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
    if (document.getElementById('foodGrid')) {
        restoreEntryScroll();
    }
});

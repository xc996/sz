// ===================================
// 深圳旅游网页 - 购物脚本
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
        'shopping.title': '购物天堂',
        'shopping.subtitle': '从高端商场到特色街区，满足你的购物欲望',
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
        'shopping.title': 'Shopping Paradise',
        'shopping.subtitle': 'From high-end malls to characteristic streets, satisfy your shopping desires',
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

let shoppingList = [];

const localShoppingFallback = [
    {
        slug: 'mixc',
        name: '万象城',
        nameEn: 'The MixC',
        district: { zh: '罗湖区/南山区', en: 'Luohu/Nanshan' },
        image: 'assets/images/shop_mixc.jpg',
        seo: { description: { zh: '深圳顶级奢华购物中心', en: 'Shenzhen\'s top luxury shopping mall' } }
    }
];

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

function isFileProtocol() {
    return (window.location.protocol || '').startsWith('file');
}

async function loadShoppingConfig() {
    if (shoppingList && shoppingList.length > 0) return shoppingList;
    const base = getAssetsBase();
    try {
        const res = await fetch(`${base}data/shopping.json`, { cache: 'no-cache' });
        if (!res.ok) throw new Error('配置加载失败');
        const json = await res.json();
        shoppingList = Array.isArray(json.items) ? json.items : [];
        return shoppingList;
    } catch (e) {
        if (isFileProtocol()) {
            console.warn('[shopping] 检测到本地文件模式，使用回退数据');
            shoppingList = localShoppingFallback;
            return shoppingList;
        }
        console.error('[shopping] 配置读取失败', e);
        shoppingList = [];
        return shoppingList;
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
    
    updateShoppingCardsText();
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
        // 例如：/pages/shopping/detail.html 包含 shopping，匹配 <a href="pages/shopping.html">
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
    if (!menuToggle || !navMenu) return;
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
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

async function renderShopping() {
    const grid = document.getElementById('shoppingGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    const items = await loadShoppingConfig();
    if (!items || items.length === 0) {
        renderShoppingEmptyState();
        return;
    }
    items.forEach(item => {
        const slug = item.slug;
        const detailUrl = `attractions/detail.html?type=shopping&slug=${slug}`;
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

function renderShoppingEmptyState() {
    const grid = document.getElementById('shoppingGrid');
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

async function updateShoppingCardsText() {
    const cards = document.querySelectorAll('.attraction-card');
    if (!cards || cards.length === 0) {
        await renderShopping();
        return;
    }
    
    const items = await loadShoppingConfig();
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
        sessionStorage.setItem('shoppingScrollY', String(window.scrollY));
        sessionStorage.setItem('shoppingEntrySlug', slug || '');
        sessionStorage.setItem('shoppingSavedAt', String(Date.now()));
    } catch (e) {}
}

function restoreEntryScroll() {
    const yStr = sessionStorage.getItem('shoppingScrollY');
    const atStr = sessionStorage.getItem('shoppingSavedAt');
    const y = yStr ? parseInt(yStr, 10) : NaN;
    const at = atStr ? parseInt(atStr, 10) : 0;
    if (!Number.isNaN(y) && Date.now() - at < 5 * 60 * 1000) {
        window.scrollTo({ top: y, behavior: 'auto' });
    }
    sessionStorage.removeItem('shoppingScrollY');
    sessionStorage.removeItem('shoppingEntrySlug');
    sessionStorage.removeItem('shoppingSavedAt');
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
    renderShopping();
    
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
    
    if (document.getElementById('shoppingGrid')) {
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
    if (document.getElementById('shoppingGrid')) {
        restoreEntryScroll();
    }
});

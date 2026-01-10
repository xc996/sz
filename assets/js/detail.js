// 景区详情页面脚本

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
        'footer.about': 'About Shenzhen',
        'footer.desc': 'Window of China\'s reform, hub of innovation',
        'footer.quick': 'Quick Links',
        'footer.attractions': 'Attractions',
        'footer.map': 'Interactive Map',
        'footer.culture': 'Culture',
        'footer.food': 'Food',
        'footer.contact': 'Contact Us',
        'footer.rights': 'All Rights Reserved'
    }
};

let currentLang = 'zh';
let currentTheme = 'light';

/**
 * 功能：翻译函数
 * 说明：根据当前语言返回对应文案，未命中则回退为 key
 */
function t(key) {
    return translations[currentLang][key] || key;
}

/**
 * 功能：将 data-i18n 文案应用到页面
 * 说明：遍历所有带 data-i18n 的元素并刷新文本
 */
function applyI18nToDom() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });
}

/**
 * 功能：切换语言
 * 说明：切换 zh/en，更新 data-lang、按钮文案与本地缓存
 */
function switchLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    document.body.setAttribute('data-lang', currentLang);
    applyI18nToDom();

    const langBtn = document.getElementById('langSwitch');
    if (langBtn) {
        langBtn.querySelector('span').textContent = currentLang === 'zh' ? 'EN' : '中';
        langBtn.setAttribute('title', t('btn.lang'));
    }

    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.setAttribute('title', t('btn.theme'));
    }

    localStorage.setItem('preferredLanguage', currentLang);
}

/**
 * 功能：初始化语言
 * 说明：读取本地缓存 preferredLanguage 并渲染页面文案
 */
function initLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang === 'zh' || savedLang === 'en') {
        currentLang = savedLang;
    }
    document.body.setAttribute('data-lang', currentLang);
    applyI18nToDom();

    const langBtn = document.getElementById('langSwitch');
    if (langBtn) {
        langBtn.querySelector('span').textContent = currentLang === 'zh' ? 'EN' : '中';
        langBtn.setAttribute('title', t('btn.lang'));
    }
}

/**
 * 功能：切换主题
 * 说明：切换 light/dark，更新 data-theme、图标并持久化
 */
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);

    const themeBtn = document.getElementById('themeToggle');
    if (!themeBtn) return;
    const icon = themeBtn.querySelector('i');
    if (!icon) return;

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

/**
 * 功能：初始化主题
 * 说明：优先读取本地缓存 preferredTheme，否则跟随系统主题
 */
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
        themeBtn.setAttribute('title', t('btn.theme'));
        const icon = themeBtn.querySelector('i');
        if (icon && currentTheme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    }
}

// 初始化AOS动画
window.addEventListener('load', () => {
    AOS.init({
        duration: 600, // 加快动画速度，从1000ms改为600ms
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
});

// 返回顶部按钮功能
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

// 详情页面导航栏 - 固定背景无需滚动效果
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    // 详情页面导航栏始终显示背景，无需滚动效果
    navbar.classList.add('scrolled');
}

// 移动端菜单切换
function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const isSmall = () => window.matchMedia('(max-width: 992px)').matches;
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    menuToggle.addEventListener('mouseenter', () => {
        if (isSmall()) navMenu.classList.add('active');
    });
    
    // 点击菜单项后关闭菜单
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

// 自动高亮当前页面导航
function initActiveNav() {
    const currentPath = window.location.pathname;
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type'); // 获取查询参数中的类型
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // 首先移除所有 active 类
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // 如果查询参数中有 type，优先根据 type 匹配
    if (type) {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            const hrefKey = href.replace('.html', '').split('/').pop();
            if (hrefKey === type) {
                link.classList.add('active');
            }
        });
        return; // 匹配成功后直接返回，不再执行后续逻辑
    }
    
    // 处理首页 (#home)
    const isHome = currentPath.endsWith('/') || currentPath.endsWith('index.html');
    
    // 如果没有 type 参数，执行正常的路径匹配
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const isHomeLink = href === '#home';
        
        if (isHome && isHomeLink) {
            link.classList.add('active');
            return;
        }
        
        // 处理其他页面 (xxx.html)
        // 简单判断：当前路径包含 href 中的关键部分（例如 /pages/attractions/ 包含 attractions）
        const isOtherMatch = href && href !== '#' && !href.startsWith('#') && 
                           (currentPath.includes(href.replace('.html', '')) || 
                            currentPath.includes(href.split('/').pop().replace('.html', '')));
        
        if (isOtherMatch) {
            link.classList.add('active');
        }
    });
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initTheme();
    initNavbarScroll();
    initMobileMenu();
    initBackToTop();
    initDetailBackButton();
    initDetailCardsAccessibility();
    initActiveNav(); // 添加初始化活动导航功能
    
    const langSwitch = document.getElementById('langSwitch');
    const themeToggle = document.getElementById('themeToggle');
    
    if (langSwitch) {
        langSwitch.addEventListener('click', switchLanguage);
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
});

/**
 * 详情页返回按钮逻辑（中文注释）
 * 优先使用浏览器历史返回以保留列表滚动位置；
 * 若来源不是列表页则回到对应类型的列表页
 */
function initDetailBackButton() {
    const backLink = document.querySelector('.back-button a');
    if (!backLink) return;
    
    // 获取当前页面类型
    const type = new URLSearchParams(window.location.search).get('type') || 'attractions';
    
    backLink.addEventListener('click', (e) => {
        const ref = document.referrer || '';
        // 检查来源是否为当前类型的列表页
        const listPage = `${type}.html`;
        const canGoBack = ref.includes(listPage) || ref.endsWith(listPage);
        
        if (canGoBack && window.history.length > 1) {
            e.preventDefault();
            history.back();
        } else {
            // 保持默认跳转到列表页，href 已经在 renderDetail 中动态设置
        }
    });
}

/**
 * 功能：增强详情页信息卡片的可访问性与触摸体验（中文注释）
 * 说明：
 *  - 为 .info-card 添加 ARIA 角色与 tabindex，支持键盘操作
 *  - 统一移动端触摸行为，提升点击体验
 */
function initDetailCardsAccessibility() {
    const cards = document.querySelectorAll('.detail-cards .info-card');
    if (!cards || cards.length === 0) return;
    cards.forEach(card => {
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

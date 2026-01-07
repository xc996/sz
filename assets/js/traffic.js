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
        'transport.metro.title': '深圳地铁',
        'transport.metro.desc': '深圳地铁是覆盖全市主要区域的地下交通网络，运营时间通常为6:30-23:00。网络密集，准时高效，冷气充足，是深圳市民和游客出行的首选方式。',
        'transport.features': '主要特点：',
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
        'transport.main-title': 'Shenzhen Transportation',
        'transport.main-subtitle': 'Multiple transportation methods for convenient travel',
        'transport.metro.title': 'Shenzhen Metro',
        'transport.metro.desc': 'Shenzhen Metro is an underground transportation network covering major areas of the city, usually operating from 6:30 to 23:00. With a dense network, punctuality, efficiency, and sufficient air conditioning, it is the preferred mode of transportation for Shenzhen citizens and tourists.',
        'transport.features': 'Key Features:',
        'transport.metro.feature1': 'Covers major areas of the city',
        'transport.metro.feature2': 'Operating hours: 6:30-23:00',
        'transport.metro.feature3': 'Punctual, efficient, and frequent service',
        'transport.metro.feature4': 'Supports QR code payment and Shenzhen Tong',
        'transport.airport.title': 'Shenzhen Bao\'an International Airport',
        'transport.airport.desc': 'Shenzhen Bao\'an International Airport is a modern large-scale international airport with a unique "Manta Ray" shaped Terminal 3, offering convenient sea-land-air transportation. The airport connects to multiple cities worldwide and is Shenzhen\'s air gateway.',
        'transport.airport.feature1': 'Features the unique "Manta Ray" shaped Terminal 3',
        'transport.airport.feature2': 'International flights connecting to the world',
        'transport.airport.feature3': 'Convenient sea-land-air transportation',
        'transport.airport.feature4': 'Direct access via multiple metro lines',
        'transport.train.title': 'High-speed Railway/ Train Stations',
        'transport.train.desc': 'Shenzhen has multiple major railway stations, including Shenzhen North Station, Futian Station, Shenzhen Station, etc., connecting to major cities across the country. High-speed trains to Hong Kong West Kowloon take only 14 minutes, making transportation very convenient.',
        'transport.train.stations': 'Major Stations:',
        'transport.train.station1': 'Shenzhen North Station: Main high-speed railway station, connecting to the whole country',
        'transport.train.station2': 'Futian Station: Asia\'s largest underground railway station',
        'transport.train.station3': 'Shenzhen Station: Connecting to Hong Kong Hung Hom',
        'transport.train.station4': 'High-speed trains to Hong Kong West Kowloon take only 14 minutes',
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
    
    updateCarouselTitle(); // 更新轮播标题
    localStorage.setItem('preferredLanguage', currentLang);
}

function updateCarouselTitle() {
    const carouselTitle = document.querySelector('.carousel-title');
    if (carouselTitle) {
        const h1 = carouselTitle.querySelector('h1');
        const h2 = carouselTitle.querySelector('h2');
        
        if (h1) {
            h1.textContent = translations[currentLang]['hero.transport.title1'];
            h1.setAttribute('data-i18n', 'hero.transport.title1');
        }
        
        if (h2) {
            h2.textContent = translations[currentLang]['hero.transport.title2'];
            h2.setAttribute('data-i18n', 'hero.transport.title2');
        }
    }
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
// 轮播图功能
// ------------------------------

let currentSlide = 0;
let carouselInterval = null;
let isCarouselRunning = false;

function initCarousel() {
    const carouselWrapper = document.getElementById('carouselWrapper');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    
    if (!carouselWrapper) {
        return;
    }
    
    const carouselItems = carouselWrapper.querySelectorAll('.carousel-item');
    const totalSlides = carouselItems.length;
    
    if (totalSlides === 0) return;
    
    // 创建轮播标题
    const carouselTitle = document.createElement('div');
    carouselTitle.className = 'carousel-title';
    carouselTitle.innerHTML = `
        <h1 data-i18n="hero.transport.title1">${currentLang === 'zh' ? '交通' : 'TRANSPORT'}</h1>
        <h2 data-i18n="hero.transport.title2">${currentLang === 'zh' ? 'TRANSPORT' : '交通'}</h2>
    `;
    carouselWrapper.parentNode.insertBefore(carouselTitle, carouselWrapper);
    
    // 创建指示器
    indicatorsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
        const indicator = document.createElement('button');
        indicator.className = 'carousel-indicator';
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
    
    // 添加按钮事件监听
    if (prevBtn) {
        prevBtn.addEventListener('click', () => prevSlide());
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => nextSlide());
    }
    
    // 启动自动轮播
    startAutoCarousel();
    
    // 添加鼠标悬停暂停功能
    carouselWrapper.addEventListener('mouseenter', pauseAutoCarousel);
    carouselWrapper.addEventListener('mouseleave', startAutoCarousel);
    
    // 页面可见性变化时暂停/恢复轮播
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            pauseAutoCarousel();
        } else {
            startAutoCarousel();
        }
    });
}

function goToSlide(slideIndex) {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const totalSlides = carouselItems.length;
    
    if (totalSlides === 0) return;
    
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    
    // 移除所有活动状态
    carouselItems.forEach(item => item.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    
    // 设置新的活动状态
    carouselItems[slideIndex].classList.add('active');
    indicators[slideIndex].classList.add('active');
    
    currentSlide = slideIndex;
}

function nextSlide() {
    goToSlide(currentSlide + 1);
    resetAutoCarousel();
}

function prevSlide() {
    goToSlide(currentSlide - 1);
    resetAutoCarousel();
}

function startAutoCarousel() {
    if (isCarouselRunning) return;
    
    clearCarouselInterval();
    
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 5000); // 每5秒切换一次
    
    isCarouselRunning = true;
}

function pauseAutoCarousel() {
    if (!isCarouselRunning) return;
    
    clearCarouselInterval();
    isCarouselRunning = false;
}

function clearCarouselInterval() {
    if (carouselInterval) {
        clearInterval(carouselInterval);
        carouselInterval = null;
    }
}

function resetAutoCarousel() {
    pauseAutoCarousel();
    startAutoCarousel();
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
    initCarousel();
    
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

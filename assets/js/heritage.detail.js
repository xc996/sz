// 文化遗产与古迹详情页面脚本

// 初始化AOS动画
document.addEventListener('DOMContentLoaded', () => {
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
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    // 点击菜单项后关闭菜单
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// 详情页返回按钮逻辑
function initDetailBackButton() {
    const backLink = document.querySelector('.back-button a');
    if (!backLink) return;
    backLink.addEventListener('click', (e) => {
        const ref = document.referrer || '';
        const canGoBack = ref.includes('/history.html') || ref.endsWith('history.html');
        if (canGoBack && window.history.length > 1) {
            e.preventDefault();
            history.back();
        } else {
            // 保持默认跳转到列表页
        }
    });
}

// 功能：增强详情页信息卡片的可访问性与触摸体验
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
        // 简单判断：当前路径包含 href 中的关键部分（例如 /pages/history/ 包含 history）
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
    initNavbarScroll();
    initMobileMenu();
    initBackToTop();
    initDetailBackButton();
    initDetailCardsAccessibility();
    initActiveNav(); // 添加初始化活动导航功能
    
    // 可以在这里添加更多详情页面特定的功能
});
// 景区详情页面脚本

// 初始化AOS动画
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
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

// 初始化所有功能
document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initMobileMenu();
    initBackToTop();
    initDetailBackButton();
    initDetailCardsAccessibility();
    
    // 可以在这里添加更多详情页面特定的功能
});

/**
 * 详情页返回按钮逻辑（中文注释）
 * 优先使用浏览器历史返回以保留列表滚动位置；
 * 若来源不是列表页则回到 attractions.html
 */
function initDetailBackButton() {
    const backLink = document.querySelector('.back-button a');
    if (!backLink) return;
    backLink.addEventListener('click', (e) => {
        const ref = document.referrer || '';
        const canGoBack = ref.includes('/attractions.html') || ref.endsWith('attractions.html');
        if (canGoBack && window.history.length > 1) {
            e.preventDefault();
            history.back();
        } else {
            // 保持默认跳转到列表页
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

// ===================================
// 深圳旅游网页 - 历史文化页面脚本
// ===================================

// ------------------------------
// 数据定义
// ------------------------------

// 翻译数据 - 扩展原有的翻译
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
        'hero.title1': '文化',
        'hero.title2': 'CULTURE',
        
        // 历史文化轮播图
        'history.slide1.title': '深圳历史',
        'history.slide1.desc': '从渔村到国际化大都市的变迁',
        'history.slide2.title': '岭南文化',
        'history.slide2.desc': '传承千年的地方文化',
        'history.slide3.title': '非遗传承',
        'history.slide3.desc': '保护和传承非物质文化遗产',
        'history.slide4.title': '传统节日',
        'history.slide4.desc': '丰富多彩的民俗活动',
        'history.slide5.title': '文化融合',
        'history.slide5.desc': '传统与现代的完美结合',
        
        // 历史轴
        'history.timeline.title': '历史轴',
        'history.timeline.subtitle': '深圳的发展历程',
        
        // 岭南文化
        'history.lingnan.title': '岭南文化',
        'history.lingnan.subtitle': '岭南地区的独特文化传统',
        'history.lingnan.item1.title': '建筑风格',
        'history.lingnan.item1.desc': '骑楼、碉楼等特色建筑展现岭南风情',
        'history.lingnan.item2.title': '饮食文化',
        'history.lingnan.item2.desc': '粤菜、潮汕菜、客家菜三大菜系交汇',
        'history.lingnan.item3.title': '民俗活动',
        'history.lingnan.item3.desc': '醒狮、龙舟、粤剧等传统民俗',
        'history.lingnan.item4.title': '工艺技艺',
        'history.lingnan.item4.desc': '陶瓷、刺绣、木雕等传统工艺',
        
        // 非物质文化遗产
        'history.heritage.title': '非物质文化遗产',
        'history.heritage.subtitle': '深圳的国家级和省级非遗项目',
        'history.heritage.level.national': '国家级',
        'history.heritage.level.provincial': '省级',
        
        // 传统节日
        'history.festivals.title': '传统节日',
        'history.festivals.subtitle': '深圳的传统节日庆典',
        
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
        'hero.title1': 'CULTURE',
        'hero.title2': '文化',
        
        // History carousel
        'history.slide1.title': 'Shenzhen History',
        'history.slide1.desc': 'From fishing village to international metropolis',
        'history.slide2.title': 'Lingnan Culture',
        'history.slide2.desc': 'Thousand-year-old local cultural heritage',
        'history.slide3.title': 'Intangible Heritage',
        'history.slide3.desc': 'Protecting and inheriting intangible cultural heritage',
        'history.slide4.title': 'Traditional Festivals',
        'history.slide4.desc': 'Colorful folk activities',
        'history.slide5.title': 'Cultural Integration',
        'history.slide5.desc': 'Perfect combination of tradition and modernity',
        
        // Timeline
        'history.timeline.title': 'Timeline',
        'history.timeline.subtitle': 'Development history of Shenzhen',
        
        // Lingnan Culture
        'history.lingnan.title': 'Lingnan Culture',
        'history.lingnan.subtitle': 'Unique cultural traditions of Lingnan region',
        'history.lingnan.item1.title': 'Architectural Style',
        'history.lingnan.item1.desc': 'Qilou, diaolou and other characteristic buildings',
        'history.lingnan.item2.title': 'Food Culture',
        'history.lingnan.item2.desc': 'Convergence of Cantonese, Chaoshan and Hakka cuisines',
        'history.lingnan.item3.title': 'Folk Activities',
        'history.lingnan.item3.desc': 'Lion dance, dragon boat, Cantonese opera and other traditions',
        'history.lingnan.item4.title': 'Craftsmanship',
        'history.lingnan.item4.desc': 'Ceramics, embroidery, wood carving and other crafts',
        
        // Intangible Heritage
        'history.heritage.title': 'Intangible Cultural Heritage',
        'history.heritage.subtitle': 'National and provincial heritage projects in Shenzhen',
        'history.heritage.level.national': 'National',
        'history.heritage.level.provincial': 'Provincial',
        
        // Traditional Festivals
        'history.festivals.title': 'Traditional Festivals',
        'history.festivals.subtitle': 'Traditional festival celebrations in Shenzhen',
        
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

// 历史轴数据
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

// 岭南文化数据
const lingnanData = [
    {
        icon: 'fas fa-home',
        title: 'history.lingnan.item1.title',
        description: 'history.lingnan.item1.desc'
    },
    {
        icon: 'fas fa-utensils',
        title: 'history.lingnan.item2.title',
        description: 'history.lingnan.item2.desc'
    },
    {
        icon: 'fas fa-theater-masks',
        title: 'history.lingnan.item3.title',
        description: 'history.lingnan.item3.desc'
    },
    {
        icon: 'fas fa-palette',
        title: 'history.lingnan.item4.title',
        description: 'history.lingnan.item4.desc'
    }
];

// 非物质文化遗产数据
const heritageData = [
    {
        name: '麒麟舞',
        nameEn: 'Kirin Dance',
        description: '深圳传统民俗舞蹈，象征吉祥如意',
        descriptionEn: 'Traditional folk dance in Shenzhen, symbolizing good luck',
        level: 'national',
        image: 'assets/images/轮1.jpg'
    },
    {
        name: '客家山歌',
        nameEn: 'Hakka Mountain Songs',
        description: '客家传统民歌，表达情感和生活',
        descriptionEn: 'Traditional Hakka folk songs, expressing emotions and life',
        level: 'provincial',
        image: 'assets/images/轮2.jpg'
    },
    {
        name: '粤剧',
        nameEn: 'Cantonese Opera',
        description: '广东传统戏曲，唱腔优美，表演细腻',
        descriptionEn: 'Traditional Cantonese opera with beautiful singing and delicate performances',
        level: 'national',
        image: 'assets/images/轮3.jpg'
    },
    {
        name: '南头古城庙会',
        nameEn: 'Nantou Ancient City Temple Fair',
        description: '南头古城传统庙会，热闹非凡',
        descriptionEn: 'Traditional temple fair in Nantou Ancient City, very lively',
        level: 'provincial',
        image: 'assets/images/轮4.jpg'
    }
];

// 传统节日数据
const festivalsData = [
    {
        name: '春节',
        nameEn: 'Spring Festival',
        date: '农历正月初一',
        dateEn: 'Lunar New Year',
        description: '中国最重要的传统节日，家人团聚，喜庆祥和',
        descriptionEn: 'China\'s most important traditional festival, family reunion and joy',
        icon: 'fas fa-fire-alt',
        image: 'assets/images/轮1.jpg'
    },
    {
        name: '元宵节',
        nameEn: 'Lantern Festival',
        date: '农历正月十五',
        dateEn: 'Lunar January 15th',
        description: '赏花灯、吃汤圆，象征团圆美满',
        descriptionEn: 'Appreciate lanterns and eat tangyuan, symbolizing reunion and happiness',
        icon: 'fas fa-lightbulb',
        image: 'assets/images/轮2.jpg'
    },
    {
        name: '端午节',
        nameEn: 'Dragon Boat Festival',
        date: '农历五月初五',
        dateEn: 'Lunar May 5th',
        description: '赛龙舟、吃粽子，纪念屈原',
        descriptionEn: 'Dragon boat races and eating zongzi, commemorating Qu Yuan',
        icon: 'fas fa-anchor',
        image: 'assets/images/轮3.jpg'
    },
    {
        name: '中秋节',
        nameEn: 'Mid-Autumn Festival',
        date: '农历八月十五',
        dateEn: 'Lunar August 15th',
        description: '赏月、吃月饼，家人团聚的节日',
        descriptionEn: 'Appreciate the moon and eat mooncakes, a festival for family reunion',
        icon: 'fas fa-moon',
        image: 'assets/images/轮4.jpg'
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
    
    // 更新所有内容
    renderTimeline();
    renderLingnanCulture();
    renderHeritage();
    renderFestivals();
    
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

// 导航栏滚动效果
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

// 移动端菜单切换
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

// 渲染历史轴
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

// 渲染岭南文化
function renderLingnanCulture() {
    const grid = document.getElementById('lingnanGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    lingnanData.forEach((item, index) => {
        const lingnanItem = document.createElement('div');
        lingnanItem.className = 'lingnan-item';
        lingnanItem.innerHTML = `
            <i class="${item.icon}"></i>
            <h3>${t(item.title)}</h3>
            <p>${t(item.description)}</p>
        `;
        grid.appendChild(lingnanItem);
    });
}

// 渲染非物质文化遗产
function renderHeritage() {
    const grid = document.getElementById('heritageGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    heritageData.forEach((item, index) => {
        const heritageItem = document.createElement('div');
        heritageItem.className = 'heritage-item';
        heritageItem.innerHTML = `
            <div class="heritage-image">
                <img src="${item.image}" alt="${currentLang === 'zh' ? item.name : item.nameEn}">
            </div>
            <div class="heritage-content">
                <h3 class="heritage-title">${currentLang === 'zh' ? item.name : item.nameEn}</h3>
                <p class="heritage-description">${currentLang === 'zh' ? item.description : item.descriptionEn}</p>
                <span class="heritage-level">${t(`history.heritage.level.${item.level}`)}</span>
            </div>
        `;
        grid.appendChild(heritageItem);
    });
}

// 渲染传统节日
function renderFestivals() {
    const grid = document.getElementById('festivalsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    festivalsData.forEach((item, index) => {
        const festivalItem = document.createElement('div');
        festivalItem.className = 'festival-item';
        festivalItem.innerHTML = `
            <div class="festival-image">
                <img src="${item.image}" alt="${currentLang === 'zh' ? item.name : item.nameEn}">
            </div>
            <div class="festival-content">
                <h3 class="festival-title">
                    <i class="${item.icon}"></i>
                    ${currentLang === 'zh' ? item.name : item.nameEn}
                </h3>
                <p class="festival-date">${currentLang === 'zh' ? item.date : item.dateEn}</p>
                <p class="festival-description">${currentLang === 'zh' ? item.description : item.descriptionEn}</p>
            </div>
        `;
        grid.appendChild(festivalItem);
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
    initMobileMenu();
    
    // 初始化返回顶部按钮
    initBackToTop();
    
    // 渲染内容
    renderTimeline();
    renderLingnanCulture();
    renderHeritage();
    renderFestivals();
    
    // 初始化轮播
    carousel.init();
    
    // 绑定事件
    const langSwitch = document.getElementById('langSwitch');
    const themeToggle = document.getElementById('themeToggle');
    
    if (langSwitch) {
        langSwitch.addEventListener('click', switchLanguage);
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // 监听滚动事件
    window.addEventListener('scroll', () => {
        // 可以在这里添加滚动触发的动画逻辑
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    init();
});

// 监听系统主题变化
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
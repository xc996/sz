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
        'history.slide2.title': '文化特色',
        'history.slide2.desc': '传承千年的地方文化',
        'history.slide3.title': '文化遗产',
        'history.slide3.desc': '保护和传承文化遗产与古迹',
        'history.slide4.title': '现代与传统的交融',
        'history.slide4.desc': '丰富多彩的民俗活动',
        'history.slide5.title': '文化融合',
        'history.slide5.desc': '传统与现代的完美结合',
        
        // 历史轴
        'history.timeline.title': '历史轴',
        'history.timeline.subtitle': '深圳的发展历程',
        
        // 文化特色
        'history.features.title': '文化特色',
        'history.features.subtitle': '深圳地区的独特文化传统',
        'history.features.item1.title': '客家文化',
        'history.features.item1.desc': '除围屋、宗祠、山歌、凉帽技艺外，深圳客家因“迁海复界”后迁入滨海，被称为“滨海客家”：建筑上把客家围屋与广府碉楼结合，出现专门炮楼；经济上也由“重农”转向“重农亦重商”，参与海洋贸易乃至广州十三行网络。',
        'history.features.item2.title': '海洋文化',
        'history.features.item2.desc': '除渔歌、祭海、妈祖信仰外，深圳历史上还有盐业生产、蚝业养殖（沙井蚝）等经济活动，是岭南“盐农—渔—商”复合海洋文化的组成部分。',
        'history.features.item3.title': '海防文化',
        'history.features.item3.desc': '大鹏所城是明代“大鹏守御千户所”，与南头古城互为犄角，共同构成明清珠三角东岸海防体系；城内现存10余座清代将军府第及古庙、粮仓等，被誉为“沿海所城，大鹏为最”。',
        'history.features.item4.title': '饮食文化',
        'history.features.item4.desc': '深圳饮食融合广府、客家风味，并发展出特色"沙井蚝宴"、"公明烧鹅"等地方美食，体现了多元包容的特质。',
        'history.features.item5.title': '宗族文化',
        'history.features.item5.desc': '深圳保留了大量明清宗祠建筑，如陈氏宗祠、文氏宗祠等，族谱文化、祭祖仪式传承至今，体现了传统社会组织形态。',
        'history.features.item6.title': '侨乡文化',
        'history.features.item6.desc': '深圳是著名侨乡，海外侨胞众多，形成了独特的侨乡建筑和侨批文化，体现了深圳与海外华人社会的深厚联系。',
        
        // 文化遗产与古迹
        'history.heritage.title': '文化遗产与古迹',
        'history.heritage.subtitle': '深圳的历史文化遗产与著名古迹',
        'history.heritage.level.national': '国家级',
        'history.heritage.level.provincial': '省级',
        
        // 现代与传统的交融
        'history.festivals.title': '现代与传统的交融',
        'history.festivals.subtitle': '深圳在飞速发展的同时，也非常重视历史文化的保护与传承。通过"城市更新"计划，许多古村落得到了保护性开发，成为现代都市中的文化绿洲。',
        
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
        'history.slide2.title': 'Cultural Features',
        'history.slide2.desc': 'Thousand-year-old local cultural heritage',
        'history.slide3.title': 'Cultural Heritage',
        'history.slide3.desc': 'Protecting and inheriting cultural heritage and monuments',
        'history.slide4.title': 'Blending of Modern and Traditional',
        'history.slide4.desc': 'Colorful folk activities',
        'history.slide5.title': 'Cultural Integration',
        'history.slide5.desc': 'Perfect combination of tradition and modernity',
        
        // Timeline
        'history.timeline.title': 'Timeline',
        'history.timeline.subtitle': 'Development history of Shenzhen',
        
        // Cultural Features
        'history.features.title': 'Cultural Features',
        'history.features.subtitle': 'Unique cultural traditions of Shenzhen region',
        'history.features.item1.title': 'Hakka Culture',
        'history.features.item1.desc': 'In addition to enclosed houses, ancestral halls, mountain songs, and cool hat craftsmanship, Shenzhen Hakka were called "Coastal Hakka" because they moved to the coast after the "coastal evacuation and reclamation" period: architecturally, they combined Hakka enclosed houses with Cantonese watchtowers, resulting in specialized gun towers; economically, they shifted from "agriculture-focused" to "both agriculture and commerce-focused", participating in maritime trade and even the Guangzhou Thirteen Hongs network.',
        'history.features.item2.title': 'Marine Culture',
        'history.features.item2.desc': 'In addition to fishing songs, sea sacrifice ceremonies, and Mazu belief, Shenzhen also had salt production and oyster farming (Shajing oysters) in history, being part of Lingnan\'s "salt farmer-fisherman-merchant" composite marine culture.',
        'history.features.item3.title': 'Coastal Defense Culture',
        'history.features.item3.desc': 'Dapeng Ancient City was the "Dapeng Garrison Thousand Household Office" in the Ming Dynasty, forming a coastal defense system with Nantou Ancient City on the east coast of the Pearl River Delta during the Ming and Qing Dynasties; the city still preserves more than 10 Qing Dynasty general mansions, ancient temples, and granaries, known as "among coastal defense cities, Dapeng is the best".',
        'history.features.item4.title': 'Food Culture',
        'history.features.item4.desc': 'Shenzhen\'s cuisine integrates Cantonese and Hakka flavors, and has developed characteristic local delicacies such as "Shajing Oyster Feast" and "Gongming Roast Goose", reflecting its diverse and inclusive characteristics.',
        'history.features.item5.title': 'Clan Culture',
        'history.features.item5.desc': 'Shenzhen has preserved a large number of ancestral hall buildings from the Ming and Qing dynasties, such as Chen Ancestral Hall and Wen Ancestral Hall, with genealogy culture and ancestor worship ceremonies inherited to this day, reflecting traditional social organization forms.',
        'history.features.item6.title': 'Overseas Chinese Culture',
        'history.features.item6.desc': 'Shenzhen is a famous hometown of overseas Chinese, with a large number of overseas Chinese, forming a unique overseas Chinese architecture and overseas Chinese letter culture, reflecting the deep connection between Shenzhen and the overseas Chinese community.',
        
        // Cultural Heritage and Monuments
        'history.heritage.title': 'Cultural Heritage and Monuments',
        'history.heritage.subtitle': 'Historical cultural heritage and famous monuments in Shenzhen',
        'history.heritage.level.national': 'National',
        'history.heritage.level.provincial': 'Provincial',
        
        // Blending of Modern and Traditional
        'history.festivals.title': 'Blending of Modern and Traditional',
        'history.festivals.subtitle': 'While developing rapidly, Shenzhen also attaches great importance to the protection and inheritance of historical culture. Through the "urban renewal" plan, many ancient villages have been protected and developed, becoming cultural oases in the modern metropolis.',
        
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

// 文化特色数据
const featuresData = [
    {
        icon: 'fas fa-home',
        title: 'history.features.item1.title',
        description: 'history.features.item1.desc'
    },
    {
        icon: 'fas fa-ship',
        title: 'history.features.item2.title',
        description: 'history.features.item2.desc'
    },
    {
        icon: 'fas fa-shield-alt',
        title: 'history.features.item3.title',
        description: 'history.features.item3.desc'
    },
    {
        icon: 'fas fa-utensils',
        title: 'history.features.item4.title',
        description: 'history.features.item4.desc'
    },
    {
        icon: 'fas fa-users',
        title: 'history.features.item5.title',
        description: 'history.features.item5.desc'
    },
    {
        icon: 'fas fa-globe',
        title: 'history.features.item6.title',
        description: 'history.features.item6.desc'
    }
];

// 文化遗产与古迹数据
const heritageData = [
    {
        name: '大鹏所城',
        nameEn: 'Dapeng Ancient City',
        description: '明代海防要塞，保存完好的明清海防体系，被誉为"沿海所城，大鹏为最"',
        descriptionEn: 'Ming Dynasty coastal defense fortress with well-preserved Ming and Qing coastal defense system, known as "among coastal defense cities, Dapeng is the best"',
        level: 'national',
        image: 'assets/images/大鹏所城.jpg'
    },
    {
        name: '南头古城',
        nameEn: 'Nantou Ancient City',
        description: '深圳历史最悠久的古城，见证了深圳从汉代到现代的历史变迁',
        descriptionEn: 'Shenzhen\'s oldest ancient city, witnessing Shenzhen\'s historical changes from Han Dynasty to modern times',
        level: 'national',
        image: 'assets/images/南头古城.jpg'
    },
    {
        name: '鹤湖新居',
        nameEn: 'Hehu Xingu',
        description: '深圳保存最完整、规模最大的客家围屋建筑群，被誉为"客家围屋博物馆"',
        descriptionEn: 'The most complete and largest preserved Hakka enclosed house complex in Shenzhen, known as the "Hakka Enclosed House Museum"',
        level: 'national',
        image: 'assets/images/鹤湖新居.jpg'
    },
    {
        name: '咸头岭遗址',
        nameEn: 'Xiantouling Site',
        description: '深圳最早的史前文化遗址，距今约7000年，展现了珠三角地区早期人类文明',
        descriptionEn: 'Shenzhen\'s earliest prehistoric cultural site, dating back about 7000 years, showing early human civilization in the Pearl River Delta region',
        level: 'national',
        image: 'assets/images/咸头岭遗址.jpg'
    },
    {
        name: '文天祥纪念馆',
        nameEn: 'Wen Tianxiang Memorial Hall',
        description: '纪念南宋民族英雄文天祥的纪念馆，展示其生平事迹和崇高精神',
        descriptionEn: 'Memorial hall commemorating Wen Tianxiang, a national hero of the Southern Song Dynasty, showcasing his life story and noble spirit',
        level: 'provincial',
        image: 'assets/images/文天祥纪念馆.jpg'
    },
    {
        name: '大万世居',
        nameEn: 'Dawanshiju',
        description: '大万世居，又称"大万围"，是全国最大且保存最完整的方形客家围屋之一',
        descriptionEn: 'Dawanshiju, also known as "Dawan Wei", is one of the largest and best-preserved square Hakka enclosed houses in China',
        level: 'provincial',
        image: 'assets/images/大万世居.jpg'
    }
];

// 现代与传统的交融数据
const blendingData = [
    {
        name: '博物馆体系',
        nameEn: 'Museum System',
        description: '深圳博物馆、南头古城博物馆等机构系统地展示城市历史',
        descriptionEn: 'Shenzhen Museum, Nantou Ancient City Museum and other institutions systematically display the city\'s history',
        icon: 'fas fa-building',
        image: 'assets/images/轮1.jpg'
    },
    {
        name: '非遗传承',
        nameEn: 'Intangible Cultural Heritage',
        description: '200多项非物质文化遗产得到保护和活态传承',
        descriptionEn: 'More than 200 intangible cultural heritages have been protected and dynamically inherited',
        icon: 'fas fa-masks-theater',
        image: 'assets/images/轮2.jpg'
    },
    {
        name: '古村新生',
        nameEn: 'Ancient Villages Revival',
        description: '大芬油画村、观澜版画村等成为文化创意产业基地',
        descriptionEn: 'Dafen Oil Painting Village, Guanlan Printmaking Village and others have become cultural and creative industry bases',
        icon: 'fas fa-city',
        image: 'assets/images/轮3.jpg'
    },
    {
        name: '文化教育',
        nameEn: 'Cultural Education',
        description: '将历史文化纳入中小学教育体系，培养文化认同',
        descriptionEn: 'Integrate historical culture into the education system of primary and secondary schools to cultivate cultural identity',
        icon: 'fas fa-book-open',
        image: 'assets/images/轮4.jpg'
    },
    {
        name: '数字博物馆',
        nameEn: 'Digital Museum',
        description: '运用VR/AR技术打造线上数字博物馆，让文物"活"起来',
        descriptionEn: 'Use VR/AR technology to create online digital museums, bringing cultural relics "to life"',
        icon: 'fas fa-laptop-code',
        image: 'assets/images/轮1.jpg'
    },
    {
        name: '文化街区活化',
        nameEn: 'Cultural Block Revitalization',
        description: '将历史街区改造为集商业、文化、旅游于一体的综合体',
        descriptionEn: 'Transform historical blocks into complexes integrating business, culture and tourism',
        icon: 'fas fa-map-marker-alt',
        image: 'assets/images/轮2.jpg'
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
    renderCulturalFeatures();
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

// 自动高亮当前页面导航
function initActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // 移除所有 active 类
        link.classList.remove('active');
        
        if (href === '#' || href.startsWith('#')) return;

        // 简单匹配
        if (currentPath.endsWith(href)) {
             link.classList.add('active');
        }
        else if (currentPath.endsWith('/') && href === 'index.html') {
            link.classList.add('active');
        }
    });
}

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

// 渲染文化特色
function renderCulturalFeatures() {
    const grid = document.getElementById('featuresGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    featuresData.forEach((item, index) => {
        const featureItem = document.createElement('div');
        featureItem.className = 'feature-item';
        featureItem.innerHTML = `
            <i class="${item.icon}"></i>
            <h3>${t(item.title)}</h3>
            <p>${t(item.description)}</p>
        `;
        grid.appendChild(featureItem);
    });
}

// 渲染文化遗产与古迹
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
                <div class="heritage-footer">
                    <span class="heritage-level">${t(`history.heritage.level.${item.level}`)}</span>
                    <button class="heritage-intro-btn">${currentLang === 'zh' ? '介绍' : 'Introduction'}</button>
                </div>
            </div>
        `;
        
        // 添加点击事件
        const introBtn = heritageItem.querySelector('.heritage-intro-btn');
        if (introBtn) {
            // 生成slug
            let slug = item.name.toLowerCase().replace(/[\s\u4e00-\u9fa5]/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '');
            // 特殊处理
            if (item.name === '大鹏所城') slug = 'dapeng';
            if (item.name === '南头古城') slug = 'nantou';
            if (item.name === '鹤湖新居') slug = 'hehu';
            if (item.name === '咸头岭遗址') slug = 'xiantouling';
            if (item.name === '文天祥纪念馆') slug = 'wentianxiang';
            if (item.name === '大万世居') slug = 'dawanshiju';
            
            introBtn.addEventListener('click', () => {
                window.location.href = `history/detail.html?slug=${slug}&type=heritage`;
            });
        }
        
        grid.appendChild(heritageItem);
    });
}

// 渲染现代与传统的交融
function renderFestivals() {
    const grid = document.getElementById('festivalsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    blendingData.forEach((item, index) => {
        const festivalItem = document.createElement('div');
        festivalItem.className = 'festival-item';
        festivalItem.innerHTML = `
            <div class="festival-content">
                <h3 class="festival-title">
                    <i class="${item.icon}"></i>
                    ${currentLang === 'zh' ? item.name : item.nameEn}
                </h3>
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
    initActiveNav();
    initMobileMenu();
    
    // 初始化返回顶部按钮
    initBackToTop();
    
    // 渲染内容
    renderTimeline();
    renderCulturalFeatures();
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
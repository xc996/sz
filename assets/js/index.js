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
        // 景点详情
        'attraction.szbay.name': '深圳湾公园',
        'attraction.szbay.desc': '绵延15公里的海滨长廊，欣赏日落的最佳地点',
        'attraction.szbay.badge': '热门',
        'attraction.szbay.location': '南山区',
        'attraction.window.name': '世界之窗',
        'attraction.window.desc': '一天游遍世界，130个微缩景观',
        'attraction.window.badge': '必游',
        'attraction.window.location': '南山区',
        'attraction.happyvalley.name': '欢乐谷',
        'attraction.happyvalley.desc': '华南地区最受欢迎的主题乐园',
        'attraction.happyvalley.badge': '刺激',
        'attraction.happyvalley.location': '南山区',
        'attraction.octeast.name': '东部华侨城',
        'attraction.octeast.desc': '山海结合的生态旅游度假区',
        'attraction.octeast.badge': '推荐',
        'attraction.octeast.location': '盐田区',
        'attraction.bookcity.name': '深圳中心书城',
        'attraction.bookcity.desc': '华南地区最大的书店，文化地标',
        'attraction.bookcity.badge': '文艺',
        'attraction.bookcity.location': '福田区',
        'attraction.pingan.name': '平安金融中心',
        'attraction.pingan.desc': '深圳最高建筑，599米云际观光层',
        'attraction.pingan.badge': '地标',
        'attraction.pingan.location': '福田区',
        
        // 文化
        'culture.title': '深圳故事',
        'culture.subtitle': '从小渔村到国际化大都市的华丽蜕变',
        
        // 城市概览
        'intro.title': '城市概览',
        'intro.subtitle': '深圳简介',
        'intro.desc1': '深圳位于中国南部沿海，毗邻香港，是中国改革开放的窗口和经济特区。自1980年设立特区以来，深圳从一个小渔村迅速发展成为人口超千万的国际大都市。',
        'intro.desc2': '深圳是中国的科技创新中心之一，拥有华为、腾讯、大疆等众多知名企业，被誉为"中国硅谷"。',
        'intro.desc3': '城市环境优美，拥有梧桐山、大小梅沙、深圳湾等自然景观，同时拥有完善的城市基础设施和便捷的交通网络。',
        
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
        
        // 城市特色
        'features.title': '城市特色',
        'features.subtitle': '创新、开放、年轻、包容。',
        'features.tech.title': '科技创新',
        'features.tech.desc': '聚集了大量高科技企业和研发机构，在电子信息、互联网、人工智能等领域处于全国领先地位。',
        'features.modern.title': '现代都市',
        'features.modern.desc': '高楼林立，城市规划先进，拥有平安金融中心、京基100等标志性建筑。',
        'features.young.title': '年轻人口',
        'features.young.desc': '平均年龄约32岁，是中国最年轻的城市之一，充满活力和创造力。',
        'features.inclusive.title': '开放包容',
        'features.inclusive.desc': '作为移民城市，深圳汇集了来自全国各地的人才，文化多元，氛围包容。',
        'features.green.title': '绿色生态',
        'features.green.desc': '拥有多个城市公园和自然保护区，人均公园绿地面积居全国前列。',
        'features.food.title': '美食天堂',
        'features.food.desc': '汇聚了粤菜、川菜、湘菜等各地美食，还有丰富的早茶文化和夜宵文化。',
        
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
        
        // Footer
        'footer.about': '关于深圳',
        'footer.desc': '中国改革开放的窗口，创新创业的热土',
        'footer.quick': '快速链接',
        'footer.attractions': '热门景点',
        'footer.map': '互动地图',
        'footer.culture': '文化故事',
        'footer.food': '美食推荐',
        'footer.contact': '联系我们',
        'footer.rights': '保留所有权利',
        'footer.city': '深圳',
        
        // 地图
        'map.subtitle': '基于高德地图，支持缩放与互动'
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
        // Attraction Details
        'attraction.szbay.name': 'Shenzhen Bay Park',
        'attraction.szbay.desc': 'A 15km coastal promenade, the best spot to watch the sunset',
        'attraction.szbay.badge': 'Popular',
        'attraction.szbay.location': 'Nanshan District',
        'attraction.window.name': 'Window of the World',
        'attraction.window.desc': 'Travel the world in one day with 130 miniature attractions',
        'attraction.window.badge': 'Must-Visit',
        'attraction.window.location': 'Nanshan District',
        'attraction.happyvalley.name': 'Happy Valley',
        'attraction.happyvalley.desc': 'The most popular theme park in South China',
        'attraction.happyvalley.badge': 'Thrilling',
        'attraction.happyvalley.location': 'Nanshan District',
        'attraction.octeast.name': 'OCT East',
        'attraction.octeast.desc': 'Eco-tourism resort combining mountains and sea',
        'attraction.octeast.badge': 'Recommended',
        'attraction.octeast.location': 'Yantian District',
        'attraction.bookcity.name': 'Central Book City',
        'attraction.bookcity.desc': 'The largest bookstore in South China, a cultural landmark',
        'attraction.bookcity.badge': 'Literary',
        'attraction.bookcity.location': 'Futian District',
        'attraction.pingan.name': 'Ping An Finance Center',
        'attraction.pingan.desc': 'Shenzhen\'s tallest building with 599m observation deck',
        'attraction.pingan.badge': 'Landmark',
        'attraction.pingan.location': 'Futian District',
        
        // Culture
        'culture.title': 'Shenzhen Story',
        'culture.subtitle': 'From fishing village to international metropolis',
        
        // Introduction
        'intro.title': 'City Overview',
        'intro.subtitle': 'About Shenzhen',
        'intro.desc1': 'Located on the southern coast of China, adjacent to Hong Kong, Shenzhen is a window of China\'s reform and opening up and a special economic zone. Since its establishment in 1980, Shenzhen has rapidly developed from a small fishing village into an international metropolis with a population of over 10 million.',
        'intro.desc2': 'Shenzhen is one of China\'s science and technology innovation centers, home to many well-known enterprises such as Huawei, Tencent, and DJI, and is known as the \"Silicon Valley of China\".',
        'intro.desc3': 'The city has a beautiful environment with natural landscapes such as Wutong Mountain, Dapeng Bay, and Shenzhen Bay, as well as complete urban infrastructure and convenient transportation networks.',
        
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
        
        // Features
        'features.title': 'City Features',
        'features.subtitle': 'Innovation, Openness, Youth, Inclusiveness.',
        'features.tech.title': 'Technological Innovation',
        'features.tech.desc': 'Gathers a large number of high-tech enterprises and R&D institutions, leading the country in electronic information, internet, artificial intelligence and other fields.',
        'features.modern.title': 'Modern Metropolis',
        'features.modern.desc': 'High-rise buildings, advanced urban planning, with landmark buildings such as Ping An Finance Center and Kingkey 100.',
        'features.young.title': 'Young Population',
        'features.young.desc': 'With an average age of about 32, it is one of the youngest cities in China, full of vitality and creativity.',
        'features.inclusive.title': 'Open and Inclusive',
        'features.inclusive.desc': 'As an immigrant city, Shenzhen gathers talents from all over the country, with diverse culture and inclusive atmosphere.',
        'features.green.title': 'Green Ecology',
        'features.green.desc': 'Home to multiple urban parks and nature reserves, with per capita park green space ranking among the top in the country.',
        'features.food.title': 'Food Paradise',
        'features.food.desc': 'Gathering Cantonese, Sichuan, Hunan and other regional cuisines, as well as rich morning tea culture and night food culture.',
        
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
        
        // Footer
        'footer.about': 'About Shenzhen',
        'footer.desc': 'Window of China\'s reform, hub of innovation',
        'footer.quick': 'Quick Links',
        'footer.attractions': 'Attractions',
        'footer.map': 'Map',
        'footer.culture': 'Culture',
        'footer.food': 'Food',
        'footer.contact': 'Contact Us',
        'footer.rights': 'All Rights Reserved',
        'footer.city': 'Shenzhen',
        
        // Map
        'map.subtitle': 'Based on Amap, supports zooming and interaction'
    }
};

// 景点详情数据 - 仅用于模态框
const attractionsDetail = {
    szbay: {
        name: '深圳湾公园',
        nameEn: 'Shenzhen Bay Park',
        description: '绵延15公里的海滨长廊，欣赏日落的最佳地点',
        descriptionEn: 'A 15km coastal promenade, the best spot to watch the sunset',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
        location: '南山区',
        locationEn: 'Nanshan District',
        lat: 22.5189,
        lng: 113.9447
    },
    window: {
        name: '世界之窗',
        nameEn: 'Window of the World',
        description: '一天游遍世界，130个微缩景观',
        descriptionEn: 'Travel the world in one day with 130 miniature attractions',
        image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?w=800',
        location: '南山区',
        locationEn: 'Nanshan District',
        lat: 22.5364,
        lng: 113.9750
    },
    happyvalley: {
        name: '欢乐谷',
        nameEn: 'Happy Valley',
        description: '华南地区最受欢迎的主题乐园',
        descriptionEn: 'The most popular theme park in South China',
        image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800',
        location: '南山区',
        locationEn: 'Nanshan District',
        lat: 22.5394,
        lng: 113.9806
    },
    octeast: {
        name: '东部华侨城',
        nameEn: 'OCT East',
        description: '山海结合的生态旅游度假区',
        descriptionEn: 'Eco-tourism resort combining mountains and sea',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        location: '盐田区',
        locationEn: 'Yantian District',
        lat: 22.6028,
        lng: 114.2242
    },
    bookcity: {
        name: '深圳中心书城',
        nameEn: 'Central Book City',
        description: '华南地区最大的书店，文化地标',
        descriptionEn: 'The largest bookstore in South China, a cultural landmark',
        image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800',
        location: '福田区',
        locationEn: 'Futian District',
        lat: 22.5439,
        lng: 114.0600
    },
    pingan: {
        name: '平安金融中心',
        nameEn: 'Ping An Finance Center',
        description: '深圳最高建筑，599米云际观光层',
        descriptionEn: 'Shenzhen\'s tallest building with 599m observation deck',
        image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
        location: '福田区',
        locationEn: 'Futian District',
        lat: 22.5364,
        lng: 114.0547
    }
};

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
    
    // 重新渲染时间轴
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
    
    

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // 处理首页 (#home)
        // 如果路径以 / 结尾或以 index.html 结尾，且链接是 #home，则高亮
        const isHome = currentPath.endsWith('/') || currentPath.endsWith('index.html');
        const isHomeLink = href === '#home';
        
        // 处理其他页面 (xxx.html)
        // 排除锚点链接和空链接
        // 简单判断：当前路径包含 href (例如 /pages/map.html 包含 map.html)
        const isOtherMatch = href && href !== '#' && !href.startsWith('#') && currentPath.includes(href);
        
        if ((isHome && isHomeLink) || isOtherMatch) {
            if (!link.classList.contains('active')) {
                link.classList.add('active');
                
            } else {
                
            }
        } else {
            // 如果不匹配，但有 active 类，则移除
            if (link.classList.contains('active')) {
                link.classList.remove('active');
                
            }
        }
    });
}

// 导航栏滚动效果
function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    
    // 检查并设置初始状态
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // 初始化时立即检查
    updateNavbar();
    
    // 监听滚动事件
    window.addEventListener('scroll', updateNavbar);
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
    const log = window.Logger ? window.Logger('home') : console
    if (window.AOS && typeof AOS.init === 'function') {
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true, mirror: false })
        log.info('AOS initialized')
    } else {
        log.warn('AOS not available')
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
    
    // 绑定滚动提示箭头点击事件
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const introSection = document.querySelector('.intro-section');
            if (introSection) {
                // 计算导航栏高度作为偏移量
                const navbarHeight = document.getElementById('navbar').offsetHeight || 0;
                const targetPosition = introSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
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
function showAttractionDetail(attractionKey) {
    const attraction = attractionsDetail[attractionKey];
    if (!attraction) return;
    
    // 获取当前语言
    const lang = document.body.getAttribute('data-lang') || 'zh';
    const name = lang === 'en' ? attraction.nameEn : attraction.name;
    const desc = lang === 'en' ? attraction.descriptionEn : attraction.description;
    const location = lang === 'en' ? attraction.locationEn : attraction.location;
    
    // 处理图片路径
    const base = getAssetsBase();
    // 如果是网络图片(http开头)则保持原样，如果是本地资源(assets开头)则拼接路径
    const imgSrc = (attraction.image || '').startsWith('http') ? attraction.image : 
                  ((attraction.image || '').startsWith('assets/') ? `${base}${attraction.image.replace('assets/','')}` : attraction.image);

    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <img src="${imgSrc}" alt="${name}">
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
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            // 检查点击的目标是否是链接或链接的子元素，如果是则不显示弹窗
            if (e.target.closest('a')) {
                return;
            }
            const attractionKey = card.getAttribute('data-attraction');
            showAttractionDetail(attractionKey);
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
    const domLog = window.Logger ? window.Logger('home') : console
    
    if (document.querySelector('.carousel-section')) {
        carousel.init()
        domLog.info('Carousel initialized')
    } else {
        domLog.debug('Carousel section not found')
    }
    
    // 绑定景点卡片点击事件
    if (document.querySelector('.attractions-grid')) {
        bindAttractionClickEvents()
        domLog.info('Attractions events bound')
    } else {
        domLog.debug('Attractions grid not found')
    }

    // 使用iframe嵌入官方地图页时，不进行JSAPI初始化
    if (window.AMap && document.getElementById('mapContainer')) {
        initMap();
    }

    // 防止首次加载带有哈希时自动跳转到锚点顶部
    preventInitialHashJump();
    // 初始化哈希滚动（支持偏移与后续 hashchange）
    initHashScroll();

    // 初始化地图 iframe 懒加载
    initLazyMapIframe();
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

// ----------------------------------
// 地图功能
// ----------------------------------

/**
 * 初始化高德地图（JSAPI 2.0）
 * 功能点：
 * 1) 以深圳市中心为初始中心点
 * 2) 初始缩放级别为12，限制缩放范围为3-18
 * 3) 开启滚轮缩放、双击缩放与拖拽
 * 4) 添加标准缩放控件与比例尺控件
 * 5) 提供错误处理与移动端兼容支持
 */
function initMap() {
    const container = document.getElementById('mapContainer');
    const errorBox = document.getElementById('mapError');

    if (!container) return;

    try {
        if (!window.AMap || typeof window.AMap.Map !== 'function') {
            throw new Error('AMap JSAPI 加载失败，请检查网络或 Key 配置');
        }

        const center = [114.057868, 22.543099];

        const map = new AMap.Map('mapContainer', {
            center,
            zoom: 12,
            zooms: [3, 18],
            scrollWheel: true,
            doubleClickZoom: true,
            zoomEnable: true,
            dragEnable: true,
            resizeEnable: true,
        });

        addMapControls(map);

        // 移动端优化：确保容器在窗口尺寸变化时重绘
        window.addEventListener('resize', () => {
            map && map.resize();
        });

        // 明确禁止任何自动跳转逻辑（不启用定位或城市搜索插件）
        // 保持初始中心点为深圳
        map.setCenter(center);

    } catch (err) {
        if (errorBox) {
            errorBox.style.display = 'block';
            errorBox.textContent = `地图加载失败：${err.message}`;
        }
        // 回退UI：给容器一个提示背景
        if (container) {
            container.innerHTML = '';
        }
    }
}

/**
 * 添加地图控件（缩放控件、比例尺）
 * 保证在JSAPI 2.0环境下正常工作
 */
function addMapControls(map) {
    if (!map || !window.AMap || !AMap.plugin) return;
    AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], () => {
        const toolbar = new AMap.ToolBar({
            position: 'LT',
        });
        const scale = new AMap.Scale();
        map.addControl(toolbar);
        map.addControl(scale);
    });
}

// ----------------------------------
// 哈希锚点滚动与首屏行为修复
// ----------------------------------

/**
 * 根据 URL 哈希滚动到目标区块，并考虑固定导航栏偏移
 * 说明：
 *  - 支持所有以 id 作为锚点的 section（如 #map、#food 等）
 *  - 计算导航栏高度，避免标题被遮挡
 */
function scrollToHashTarget() {
    const hash = window.location.hash || '';
    if (!hash) return;
    const target = document.querySelector(hash);
    if (!target) return;

    const navbar = document.getElementById('navbar');
    const offset = navbar ? (navbar.offsetHeight || 0) : 0;

    const rect = target.getBoundingClientRect();
    const absoluteTop = window.scrollY + rect.top;

    window.scrollTo({
        top: Math.max(absoluteTop - offset, 0),
        behavior: 'smooth'
    });
}

/**
 * 初始化哈希滚动行为
 * 说明：
 *  - 拦截页面内锚点链接点击，改为平滑滚动并更新地址栏哈希
 *  - 监听 hashchange，确保通过脚本或历史操作变更哈希时也能正确滚动
 */
function initHashScroll() {
    // 拦截页面内锚点链接点击（如导航/页脚）
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetHash = link.getAttribute('href');
            if (!targetHash || targetHash === '#') return;
            e.preventDefault();
            if (targetHash === '#map') {
                loadMapIframe();
            }
            history.pushState(null, '', targetHash);
            scrollToHashTarget();
        });
    });

    // 监听哈希变化
    window.addEventListener('hashchange', () => {
        if (window.location.hash === '#map') {
            loadMapIframe();
        }
        scrollToHashTarget();
    });
}

/**
 * 防止首次加载带有哈希（如 index.html#map）时浏览器自动跳转到底部
 * 处理方式：
 *  - 在 DOMContentLoaded 后移除哈希，并回到页面顶部
 *  - 之后的锚点点击将由 initHashScroll 接管，采用平滑滚动与偏移修正
 */
function preventInitialHashJump() {
    if (!window.location.hash) return;
    history.replaceState(null, document.title, window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'auto' });
}

/**
 * 懒加载地图 iframe，避免首屏加载导致焦点滚动
 * 说明：
 *  - 默认不设置 iframe 的 src，仅在用户滚动到地图区或点击“地图”链接时加载
 */
function loadMapIframe() {
    const iframe = document.getElementById('mapContainer');
    if (!iframe) return false;
    const dataSrc = iframe.getAttribute('data-src');
    if (!dataSrc) return false;
    if (iframe.getAttribute('src')) return true; // 已加载
    iframe.setAttribute('src', dataSrc);
    return true;
}

/**
 * 初始化地图 iframe 的懒加载（IntersectionObserver）
 * 说明：
 *  - 当地图 section 进入视口时才设置 iframe.src
 */
function initLazyMapIframe() {
    const section = document.getElementById('map');
    if (!section || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadMapIframe();
                observer.disconnect();
            }
        });
    }, { root: null, rootMargin: '200px', threshold: 0.01 });
    observer.observe(section);
}

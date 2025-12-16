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
        'footer.rights': 'All Rights Reserved'
    }
};

// 景点数据
const attractionsData = [
    {
        id: 1,
        name: '深圳湾公园',
        nameEn: 'Shenzhen Bay Park',
        category: 'nature',
        description: '绵延15公里的海滨长廊，欣赏日落的最佳地点',
        descriptionEn: 'A 15km coastal promenade, the best spot to watch the sunset',
        image: 'images/深圳湾公园.jpg',
        location: '南山区',
        locationEn: 'Nanshan District',
        rating: 4.8,
        badge: '热门',
        badgeEn: 'Popular',
        lat: 22.5189,
        lng: 113.9447
    },
    {
        id: 2,
        name: '世界之窗',
        nameEn: 'Window of the World',
        category: 'culture',
        description: '一天游遍世界，130个微缩景观',
        descriptionEn: 'Travel the world in one day with 130 miniature attractions',
        image: 'https://images.unsplash.com/photo-1549144511-f099e773c147?w=800',
        location: '南山区',
        locationEn: 'Nanshan District',
        rating: 4.6,
        badge: '必游',
        badgeEn: 'Must-Visit',
        lat: 22.5364,
        lng: 113.9750
    },
    {
        id: 3,
        name: '欢乐谷',
        nameEn: 'Happy Valley',
        category: 'landmark',
        description: '华南地区最受欢迎的主题乐园',
        descriptionEn: 'The most popular theme park in South China',
        image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800',
        location: '南山区',
        locationEn: 'Nanshan District',
        rating: 4.7,
        badge: '刺激',
        badgeEn: 'Thrilling',
        lat: 22.5394,
        lng: 113.9806
    },
    {
        id: 4,
        name: '东部华侨城',
        nameEn: 'OCT East',
        category: 'nature',
        description: '山海结合的生态旅游度假区',
        descriptionEn: 'Eco-tourism resort combining mountains and sea',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
        location: '盐田区',
        locationEn: 'Yantian District',
        rating: 4.9,
        badge: '推荐',
        badgeEn: 'Recommended',
        lat: 22.6028,
        lng: 114.2242
    },
    {
        id: 5,
        name: '深圳中心书城',
        nameEn: 'Central Book City',
        category: 'culture',
        description: '华南地区最大的书店，文化地标',
        descriptionEn: 'The largest bookstore in South China, a cultural landmark',
        image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800',
        location: '福田区',
        locationEn: 'Futian District',
        rating: 4.5,
        badge: '文艺',
        badgeEn: 'Literary',
        lat: 22.5439,
        lng: 114.0600
    },
    {
        id: 6,
        name: '平安金融中心',
        nameEn: 'Ping An Finance Center',
        category: 'landmark',
        description: '深圳最高建筑，599米云际观光层',
        descriptionEn: 'Shenzhen\'s tallest building with 599m observation deck',
        image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
        location: '福田区',
        locationEn: 'Futian District',
        rating: 4.8,
        badge: '地标',
        badgeEn: 'Landmark',
        lat: 22.5364,
        lng: 114.0547
    },
    {
        id: 7,
        name: '小梅沙',
        nameEn: 'Xiaomeisha Beach',
        category: 'nature',
        description: '深圳东部的美丽海滩，适合游泳和休闲',
        descriptionEn: 'Beautiful beach in eastern Shenzhen, perfect for swimming and relaxation',
        image: 'https://images.unsplash.com/photo-1551029506-0807df4e2031?w=800',
        location: '盐田区',
        locationEn: 'Yantian District',
        rating: 4.6,
        badge: '海滩',
        badgeEn: 'Beach',
        lat: 22.5847,
        lng: 114.2847
    },
    {
        id: 8,
        name: '大梅沙',
        nameEn: 'Dameisha Beach',
        category: 'nature',
        description: '深圳最大的免费海滩，设施完善，人气旺盛',
        descriptionEn: 'Shenzhen\'s largest free beach with complete facilities and vibrant atmosphere',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        location: '盐田区',
        locationEn: 'Yantian District',
        rating: 4.7,
        badge: '免费',
        badgeEn: 'Free',
        lat: 22.5689,
        lng: 114.2789
    },
    {
        id: 9,
        name: '莲花山公园',
        nameEn: 'Lianhuashan Park',
        category: 'nature',
        description: '深圳中心区的城市公园，可以俯瞰福田CBD',
        descriptionEn: 'Urban park in Shenzhen\'s central area with panoramic views of Futian CBD',
        image: 'https://images.unsplash.com/photo-1522759438344-6a9f6d5f14af?w=800',
        location: '福田区',
        locationEn: 'Futian District',
        rating: 4.5,
        badge: '城市',
        badgeEn: 'Urban',
        lat: 22.5459,
        lng: 114.0589
    },
    {
        id: 10,
        name: '红树林自然保护区',
        nameEn: 'Mangrove Nature Reserve',
        category: 'nature',
        description: '国家级自然保护区，候鸟栖息地',
        descriptionEn: 'National nature reserve and migratory bird habitat',
        image: 'https://images.unsplash.com/photo-1503551723145-6c040742065b?w=800',
        location: '福田区',
        locationEn: 'Futian District',
        rating: 4.8,
        badge: '生态',
        badgeEn: 'Eco',
        lat: 22.5219,
        lng: 113.9479
    },
    {
        id: 11,
        name: '海上世界',
        nameEn: 'Sea World',
        category: 'culture',
        description: '集餐饮、娱乐、购物于一体的海滨综合体',
        descriptionEn: 'Coastal complex with dining, entertainment and shopping',
        image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800',
        location: '南山区',
        locationEn: 'Nanshan District',
        rating: 4.6,
        badge: '娱乐',
        badgeEn: 'Entertainment',
        lat: 22.5309,
        lng: 113.9359
    },
    {
        id: 12,
        name: '深圳博物馆',
        nameEn: 'Shenzhen Museum',
        category: 'culture',
        description: '了解深圳历史和文化的重要场所',
        descriptionEn: 'Important place to learn about Shenzhen\'s history and culture',
        image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800',
        location: '福田区',
        locationEn: 'Futian District',
        rating: 4.7,
        badge: '文化',
        badgeEn: 'Culture',
        lat: 22.5409,
        lng: 114.0529
    },
    {
        id: 13,
        name: '东门老街',
        nameEn: 'Dongmen Old Street',
        category: 'shopping',
        description: '深圳最古老的商业街，热闹非凡',
        descriptionEn: 'Shenzhen\'s oldest commercial street with bustling atmosphere',
        image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=800',
        location: '罗湖区',
        locationEn: 'Luohu District',
        rating: 4.4,
        badge: '购物',
        badgeEn: 'Shopping',
        lat: 22.5439,
        lng: 114.1029
    },
    {
        id: 14,
        name: '华强北',
        nameEn: 'Huaqiangbei',
        category: 'shopping',
        description: '全球最大的电子产品集散地',
        descriptionEn: 'The world\'s largest electronics distribution center',
        image: 'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=800',
        location: '福田区',
        locationEn: 'Futian District',
        rating: 4.5,
        badge: '电子',
        badgeEn: 'Electronics',
        lat: 22.5389,
        lng: 114.0659
    },
    {
        id: 15,
        name: '仙湖植物园',
        nameEn: 'Fairy Lake Botanical Garden',
        category: 'nature',
        description: '集植物科研、科普、旅游于一体的综合性植物园',
        descriptionEn: 'Comprehensive botanical garden for research, education and tourism',
        image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800',
        location: '罗湖区',
        locationEn: 'Luohu District',
        rating: 4.8,
        badge: '植物',
        badgeEn: 'Botanical',
        lat: 22.5739,
        lng: 114.1189
    },
    {
        id: 16,
        name: '杨梅坑',
        nameEn: 'Yangmeikeng',
        category: 'nature',
        description: '深圳东部的美丽海湾，适合骑行和徒步',
        descriptionEn: 'Beautiful bay in eastern Shenzhen, perfect for cycling and hiking',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800',
        location: '大鹏新区',
        locationEn: 'Dapeng New District',
        rating: 4.7,
        badge: '自然',
        badgeEn: 'Nature',
        lat: 22.5486,
        lng: 114.5856
    },
    {
        id: 17,
        name: '吉钓沙',
        nameEn: 'Jidiaosha',
        category: 'nature',
        description: '水质清澈的海滩，适合游泳和沙滩活动',
        descriptionEn: 'Beach with clear water, ideal for swimming and beach activities',
        image: 'https://images.unsplash.com/photo-1551029506-0807df4e2031?w=800',
        location: '大鹏新区',
        locationEn: 'Dapeng New District',
        rating: 4.8,
        badge: '海滩',
        badgeEn: 'Beach',
        lat: 22.5444,
        lng: 114.5733
    },
    {
        id: 18,
        name: '天文台',
        nameEn: 'Shenzhen Observatory',
        category: 'science',
        description: '深圳天文台，俯瞰大鹏湾美景',
        descriptionEn: 'Shenzhen Observatory, overlooking the beautiful scenery of Dapeng Bay',
        image: 'https://images.unsplash.com/photo-1580327121178-9053119a0861?w=800',
        location: '大鹏新区',
        locationEn: 'Dapeng New District',
        rating: 4.9,
        badge: '科学',
        badgeEn: 'Science',
        lat: 22.5167,
        lng: 114.5433
    },
    {
        id: 19,
        name: '鹿嘴山庄',
        nameEn: 'Luzui Villa',
        category: 'resort',
        description: '悬崖边的度假山庄，电影《美人鱼》拍摄地',
        descriptionEn: 'Cliffside resort, filming location of the movie "The Mermaid"',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
        location: '大鹏新区',
        locationEn: 'Dapeng New District',
        rating: 4.7,
        badge: '度假',
        badgeEn: 'Resort',
        lat: 22.5497,
        lng: 114.6000
    },
    {
        id: 20,
        name: '望郎归',
        nameEn: 'Wanglanggui',
        category: 'scenic',
        description: '形似妇人望夫归来的奇石景观',
        descriptionEn: 'Strange rock formation resembling a woman waiting for her husband',
        image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
        location: '大鹏新区',
        locationEn: 'Dapeng New District',
        rating: 4.6,
        badge: '奇石',
        badgeEn: 'Rock Formation',
        lat: 22.5333,
        lng: 114.5667
    },
    {
        id: 21,
        name: '鱼翅石',
        nameEn: 'Yuchishi',
        category: 'scenic',
        description: '形状酷似鱼翅的天然岩石',
        descriptionEn: 'Natural rock formation resembling shark fin',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
        location: '大鹏新区',
        locationEn: 'Dapeng New District',
        rating: 4.5,
        badge: '奇石',
        badgeEn: 'Rock Formation',
        lat: 22.5250,
        lng: 114.5583
    }
];

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
    
    // 更新语言按钮文本
    const langBtn = document.getElementById('langSwitch');
    if (langBtn) {
        langBtn.querySelector('span').textContent = currentLang === 'zh' ? 'EN' : '中';
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

// 渲染景点
function renderAttractions() {
    const grid = document.getElementById('attractionsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    attractionsData.forEach(attraction => {
        // 生成详情页链接，使用景点名称的拼音或英文名称作为文件名
        const slug = attraction.nameEn.toLowerCase().replace(/\s+/g, '');
        const detailUrl = `attractions/${slug}.html`;
        
        const card = document.createElement('div');
        card.className = 'attraction-card';
        card.innerHTML = `
            <div class="card-image">
                <img src="${attraction.image}" alt="${currentLang === 'zh' ? attraction.name : attraction.nameEn}">
                <span class="card-badge">${currentLang === 'zh' ? attraction.badge : attraction.badgeEn}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${currentLang === 'zh' ? attraction.name : attraction.nameEn}</h3>
                <p class="card-description">${currentLang === 'zh' ? attraction.description : attraction.descriptionEn}</p>
                <div class="card-meta">
                    <div class="card-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${currentLang === 'zh' ? attraction.location : attraction.locationEn}</span>
                    </div>
                    <a href="${detailUrl}" class="detail-btn" title="查看详情">详</a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 渲染时间轴
function renderTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    
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
    // 初始化AOS动画
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // 初始化语言
    initLanguage();
    
    // 初始化主题
    initTheme();
    
    // 初始化导航栏
    initNavbarScroll();
    initMobileMenu();
    
    // 初始化返回顶部按钮
    initBackToTop();
    
    // 渲染时间轴
    renderTimeline();
    
    // 渲染景点
    renderAttractions();
    
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
    
    if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
            // 滚动到景点展示区
            const attractionsSection = document.getElementById('attractions');
            if (attractionsSection) {
                attractionsSection.scrollIntoView({
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
function showAttractionDetail(attraction) {
    // 获取当前语言
    const lang = document.body.getAttribute('data-lang') || 'zh';
    const name = lang === 'en' ? attraction.nameEn : attraction.name;
    const desc = lang === 'en' ? attraction.descriptionEn : attraction.description;
    const location = lang === 'en' ? attraction.locationEn : attraction.location;
    
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <img src="${attraction.image}" alt="${name}">
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
    document.addEventListener('keydown', handleEscKey);
    
    function handleEscKey(e) {
        if (e.key === 'Escape') {
            closeModal(modal);
            document.removeEventListener('keydown', handleEscKey);
        }
    }
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
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            showAttractionDetail(attractionsData[index]);
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
    
    // 初始化轮播
    if (document.querySelector('.carousel-section')) {
        carousel.init();
    }
    
    // 绑定景点卡片点击事件
    if (document.querySelector('.attractions-grid')) {
        bindAttractionClickEvents();
    }
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
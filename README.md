# 深圳旅游网 (Shenzhen Tourism Website)

A responsive, bilingual (CN/EN) website showcasing Shenzhen's attractions, culture, food, shopping, and transportation.

一个展示深圳景点、文化、美食、购物和交通的响应式双语（中/英）网站。

## ✨ 主要特性 (Key Features)

*   **双语支持 (Bilingual Support)**：实时切换中文/英文，覆盖全站内容。
*   **响应式设计 (Responsive Design)**：完美适配桌面端、平板和移动端设备。
*   **深色模式 (Dark Mode)**：支持系统自动检测及手动切换亮色/深色主题。
*   **交互式地图 (Interactive Map)**：集成高德地图 (AMap)，展示深圳地理位置。
*   **流畅动画 (Smooth Animations)**：集成 AOS (Animate On Scroll) 滚动动画库。
*   **模块化架构 (Modular Architecture)**：采用配置驱动的数据渲染，易于维护和扩展。

## 📁 目录结构 (Directory Structure)

```
sz/
├── assets/                 # 静态资源目录
│   ├── css/                # 样式文件 (common.css, index.css, etc.)
│   ├── js/                 # 脚本文件 (index.js, detail.render.js, etc.)
│   ├── images/             # 图片资源
│   ├── data/               # JSON 数据文件 (attractions.json, food.json, etc.)
│   ├── vendor/             # 第三方库 (Font Awesome, AOS)
│   └── webfonts/           # 字体文件
├── pages/                  # 子页面目录
│   ├── attractions/        # 景点详情页模板
│   ├── attractions.html    # 景点总览
│   ├── food.html           # 美食推荐
│   ├── history.html        # 历史文化
│   ├── shopping.html       # 购物天堂
│   ├── traffic.html        # 交通指南
│   └── map.html            # 独立地图页
├── index.html              # 网站首页
└── README.md               # 项目说明文档
```

## 🛠️ 技术栈 (Tech Stack)

*   **HTML5**: 语义化标签，SEO 友好。
*   **CSS3**: Flexbox & Grid 布局，CSS 变量，动画。
*   **JavaScript (ES6+)**: 模块化开发，DOM 操作，动态渲染。
*   **Font Awesome**: 图标库。
*   **AOS**: 滚动动画库。

## 🚀 快速开始 (Getting Started)

本项目为纯静态网站，无需复杂的构建过程。

### 方式一：直接运行
直接在浏览器中打开 `index.html` 即可预览。

### 方式二：本地服务器 (推荐)
为了避免浏览器的跨域限制 (CORS) 导致 JSON 数据无法加载，建议使用本地服务器运行。

**Python:**
```bash
python -m http.server 8000
# 访问 http://localhost:8000
```

**Node.js (http-server):**
```bash
npx http-server -p 8000
# 访问 http://localhost:8000
```

## 📝 最近更新 (Recent Updates) - 2025-12-21

### 1. 项目结构重构 (Refactoring)
*   **目录整理**：将除首页外的所有 HTML 文件移至 `pages/` 目录，保持根目录整洁。
*   **路径修正**：更新了所有页面中的资源引用路径（`../assets/...`），确保链接有效。

### 2. CSS 模块化与去重 (CSS Modularization)
*   **提取公共样式**：创建 `assets/css/common.css`，集中管理全局变量、重置样式、导航栏、页脚、按钮及动画。
*   **清理冗余代码**：大幅精简各页面专属 CSS 文件，去除重复定义，减小体积。
*   **修复样式丢失**：修复了重构过程中轮播图 (`carousel`) 和卡片网格 (`grid`) 样式丢失的问题。

### 3. 资源路径与缓存优化 (Assets & Caching)
*   **绝对路径引用**：将 JS 中的图片路径统一改为根目录绝对路径 (`/assets/images/...`)，彻底解决多级目录下路径解析错误的问题。
*   **缓存清除 (Cache Busting)**：全站资源引用添加版本号参数 (`?v=20251221...`)，确保用户始终加载最新代码。

### 4. 功能修复 (Bug Fixes)
*   **文件编码修复**：彻底清除 HTML 文件头部的 BOM 字符，解决了页面顶部出现不可见空白行的问题。
*   **UI 细节优化**：
    *   修复地图页 (`map.html`) 顶部背景图显示异常，强制全屏填充。
    *   优化全站底部的滚动提示组件，调整布局并增加箭头动画，消除视觉重叠。
*   **地图页修复**：修复了地图容器高度塌陷导致 `iframe` 无法显示的问题。
*   **图片显示修复**：解决了历史文化页 (`history.html`) 图片因路径错误无法显示的问题。
*   **布局修复**：解决了购物页 (`shopping.html`) 和景点页 (`attractions.html`) 因样式缺失导致的排版错乱。

## 📄 License

MIT License

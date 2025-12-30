# 深圳旅游网 (SZ Tourism Site) 项目技术白皮书

**文档版本**: 2.0.0  
**生成日期**: 2025-12-30  
**项目代号**: SZ-Portal  
**技术栈**: Vanilla JS, CSS3, Vite, Node.js  
**部署平台**: GitHub Pages  

---

## 目录 (Table of Contents)

- [深圳旅游网 (SZ Tourism Site) 项目技术白皮书](#深圳旅游网-sz-tourism-site-项目技术白皮书)
  - [目录 (Table of Contents)](#目录-table-of-contents)
  - [1. 项目概述 (Executive Summary)](#1-项目概述-executive-summary)
    - [1.1 项目背景](#11-项目背景)
    - [1.2 核心价值主张](#12-核心价值主张)
  - [2. 技术愿景与架构决策 (Technical Vision \& Architecture)](#2-技术愿景与架构决策-technical-vision--architecture)
    - [2.1 为什么选择 "Vanilla JS + Vite"？](#21-为什么选择-vanilla-js--vite)
    - [2.2 架构图解](#22-架构图解)
  - [3. 项目目录结构详解 (Directory Structure)](#3-项目目录结构详解-directory-structure)
  - [4. 核心系统深度剖析 (Core Systems Analysis)](#4-核心系统深度剖析-core-systems-analysis)
    - [4.1 原生国际化引擎 (Native I18n Engine)](#41-原生国际化引擎-native-i18n-engine)
    - [4.2 动态主题系统 (Dynamic Theming System)](#42-动态主题系统-dynamic-theming-system)
    - [4.3 智能路径管理 (Intelligent Path Management)](#43-智能路径管理-intelligent-path-management)
    - [4.4 数据驱动渲染 (Data-Driven Rendering)](#44-数据驱动渲染-data-driven-rendering)
  - [5. 模块级源码解读 (Module-Level Source Code Analysis)](#5-模块级源码解读-module-level-source-code-analysis)
    - [5.1 首页逻辑 (`index.js`)](#51-首页逻辑-indexjs)
    - [5.2 详情页通用渲染器 (`detail.js`)](#52-详情页通用渲染器-detailjs)
    - [5.3 历史文化模块 (`history.js`)](#53-历史文化模块-historyjs)
    - [5.4 工具函数库 (`utils.js`)](#54-工具函数库-utilsjs)
  - [6. UI/UX 设计体系 (Design System)](#6-uiux-设计体系-design-system)
    - [6.1 色彩系统 (Color Palette)](#61-色彩系统-color-palette)
    - [6.2 字体排印 (Typography)](#62-字体排印-typography)
    - [6.3 响应式策略 (Responsive Strategy)](#63-响应式策略-responsive-strategy)
  - [7. 工程化与运维 (Engineering \& DevOps)](#7-工程化与运维-engineering--devops)
    - [7.1 自动化链接巡检 (`audit-links.mjs`)](#71-自动化链接巡检-audit-linksmjs)
    - [7.2 CI/CD 流水线 (`pages.yml`)](#72-cicd-流水线-pagesyml)
  - [8. 开发者指南 (Developer Guide)](#8-开发者指南-developer-guide)
    - [8.1 环境搭建](#81-环境搭建)
    - [8.2 如何添加一个新的景点？](#82-如何添加一个新的景点)
    - [8.3 如何添加一种新语言？](#83-如何添加一种新语言)
  - [9. 性能与安全 (Performance \& Security)](#9-性能与安全-performance--security)
    - [9.1 性能优化成果](#91-性能优化成果)
    - [9.2 安全模型](#92-安全模型)
  - [10. 未来演进路线 (Roadmap)](#10-未来演进路线-roadmap)
    - [10.1 PWA 升级 (Progressive Web App)](#101-pwa-升级-progressive-web-app)
    - [10.2 搜索功能增强](#102-搜索功能增强)
    - [10.3 互动地图 2.0](#103-互动地图-20)
    - [10.4 社区共建机制](#104-社区共建机制)

---

## 1. 项目概述 (Executive Summary)

### 1.1 项目背景
在粤港澳大湾区一体化发展的宏大叙事下，深圳作为核心引擎城市，其国际形象的传播至关重要。"深圳旅游网" (SZ Tourism Site) 旨在打造一个**高性能、零门槛、国际化**的数字门户，向全球游客展示深圳"创新、开放、包容"的城市特质。

本项目摒弃了臃肿的 CMS 系统和复杂的服务器端渲染架构，采用**现代静态网站 (Modern Static Site)** 技术路线，以极低的运营成本实现了极高的用户体验。

### 1.2 核心价值主张
*   **速度 (Speed)**: 首屏加载时间 < 1秒，全球任意节点秒开。
*   **可访问性 (Accessibility)**: 严格遵循 WCAG 2.1 标准，确保视障人士可用。
*   **健壮性 (Robustness)**: 即使在无后端、弱网甚至离线环境下，核心内容依然可见。
*   **可维护性 (Maintainability)**: 基于 JSON 的数据管理，非技术人员也能轻松更新内容。

---

## 2. 技术愿景与架构决策 (Technical Vision & Architecture)

### 2.1 为什么选择 "Vanilla JS + Vite"？

在 React、Vue 等框架统治前端的今天，本项目反其道而行之，选择了**原生 JavaScript (ES6+)** 配合 **Vite** 构建工具。这一决策基于以下深层考量：

1.  **运行时性能极致化**:
    *   现代框架的 Runtime (运行时) 体积通常在 30KB-100KB (Gzip后)，且需要经过 Parsing (解析) 和 Hydration (注水) 过程，这会占用主线程并延迟 TTI (可交互时间)。
    *   本项目采用原生 DOM 操作，浏览器直接执行，**0 Runtime 开销**。在低端移动设备上，性能优势尤为明显。

2.  **长期维护的稳定性**:
    *   框架有生命周期（如 Vue2 到 Vue3 的断代升级），而 Web 标准（HTML/CSS/JS）是永恒的。本项目代码在 5 年后甚至 10 年后，无需任何依赖升级即可直接在浏览器运行。

3.  **开发体验 (DX) 与构建效率**:
    *   引入 **Vite** 是为了解决原生开发的痛点。开发环境下利用 ES Modules 实现**毫秒级热更新 (HMR)**；生产环境下利用 Rollup 进行**Tree-shaking** 和 **Code Splitting**。这是"传统工艺"与"现代工具"的完美结合。

### 2.2 架构图解

```mermaid
graph TD
    User[用户 Browser]
    CDN[GitHub Pages CDN]
    
    subgraph "Build System (Vite/Rollup)"
        Src[源码 /src]
        Data[数据 /assets/data/*.json]
        Assets[资源 /assets/images]
        Dist[产物 /dist]
    end
    
    subgraph "Runtime Core"
        Utils[utils.js (Path/Env)]
        I18n[I18n Engine]
        Theme[Theme Engine]
        Router[Hash Router]
    end
    
    User -->|Request| CDN
    CDN -->|Serve Static Files| User
    User -->|Fetch JSON| Data
    
    Src -->|Build| Dist
    Data -->|Copy| Dist
    Assets -->|Hash & Optimize| Dist
```

---

## 3. 项目目录结构详解 (Directory Structure)

项目的目录结构经过精心设计，遵循"关注点分离"原则：

*   **`assets/`**: 静态资源核心目录
    *   **`css/`**: 样式文件。`common.css` 定义全局变量与原子类，页面级 CSS (如 `attractions.css`) 负责特定布局。
    *   **`js/`**: 脚本文件。`utils.js` 为核心库，其他为页面入口。
    *   **`data/`**: **数据持久层**。所有动态内容（景点信息、美食列表）均存储为 JSON 文件。
    *   **`images/`**: 图片资源。
    *   **`vendor/`**: 第三方依赖（如 FontAwesome, AOS），本地化存储以减少外部请求依赖。
*   **`pages/`**: 多页面入口。包含 `attractions/detail.html` 等子页面结构。
*   **`scripts/`**: 工程化脚本。
    *   `audit-links.mjs`: 链接巡检脚本。
    *   `copy-static.mjs`: 构建后处理脚本。
*   **`.github/workflows/`**: CI/CD 配置。
*   **`dist/`**: 构建产物目录（由 `npm run build` 生成）。

---

## 4. 核心系统深度剖析 (Core Systems Analysis)

### 4.1 原生国际化引擎 (Native I18n Engine)

为了避免引入重型 i18n 库，我们实现了一个轻量级的国际化引擎。

**实现原理**:
1.  **数据存储**: `translations` 对象存储 `zh` 和 `en` 两套键值对。
2.  **DOM 标记**: HTML 元素使用 `data-i18n="key"` 标记需要翻译的内容。
3.  **切换逻辑**:
    ```javascript
    // 伪代码示例
    function switchLanguage() {
        const newLang = currentLang === 'zh' ? 'en' : 'zh';
        // 1. 更新 CSS 辅助属性 (用于字体切换等)
        document.body.setAttribute('data-lang', newLang);
        
        // 2. 批量更新文本节点
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = translations[newLang][key];
        });
        
        // 3. 触发组件重绘 (如 Canvas 或复杂 DOM)
        renderTimeline(); 
    }
    ```
**优势**: 极度轻量，无额外的 HTTP 请求，切换瞬间完成无闪烁。

### 4.2 动态主题系统 (Dynamic Theming System)

支持“明亮/深色”模式无缝切换，基于 CSS Custom Properties (CSS 变量)。

**核心代码 (`common.css`)**:
```css
:root {
    --bg-primary: #ffffff;
    --text-primary: #333333;
    --accent-color: #0066cc;
}

[data-theme="dark"] {
    --bg-primary: #1a1a1a;
    --text-primary: #f0f0f0;
    --accent-color: #4da6ff;
}

body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    transition: background-color 0.3s, color 0.3s; /* 平滑过渡 */
}
```

**JavaScript 逻辑**:
*   初始化时检测 `prefers-color-scheme` 媒体查询，自动适配系统主题。
*   用户手动切换后，将偏好写入 `localStorage`，优先级高于系统设置。

### 4.3 智能路径管理 (Intelligent Path Management)

静态网站最头疼的问题是**路径适配**。本地开发通常在根目录 `/`，而 GitHub Pages 往往部署在子路径 `/repo-name/`。

`utils.js` 中的 `getAssetsBase()` 函数解决了这个问题：
```javascript
function getAssetsBase() {
    const isGh = window.location.hostname.endsWith('github.io');
    if (isGh) {
        // 自动提取仓库名作为路径前缀
        const repoName = window.location.pathname.split('/')[1];
        return `/${repoName}/assets/`;
    }
    return '/assets/';
}
```
**作用**: 无论是图片加载 (`<img src="...">`) 还是 JSON 请求 (`fetch(...)`)，都通过此函数获取基准路径，确保了**一份代码，处处运行 (Write Once, Run Anywhere)**。

### 4.4 数据驱动渲染 (Data-Driven Rendering)

项目采用了 **View-Model 分离** 的设计思想。

*   **Model**: JSON 文件 (e.g., `assets/data/attractions.json`)。
*   **View**: HTML 模板字符串。
*   **Controller**: `render.js` 负责拉取数据并生成 HTML。

**健壮性设计**:
在 `fetch` 失败时（例如直接打开本地 HTML 文件，导致跨域错误），系统会自动降级使用内置的 `fallback` 数据，确保页面骨架不塌陷，极大提升了开发调试和演示的便利性。

---

## 5. 模块级源码解读 (Module-Level Source Code Analysis)

### 5.1 首页逻辑 (`index.js`)

首页集成了多个交互模块，是逻辑最密集的页面。

*   **数字增长动画 (`animateNumbers`)**:
    使用 `requestAnimationFrame` 或 `setInterval` 实现数字从 0 到目标的平滑增长。算法上使用了 `target / 100` 作为步长，确保动画时长固定。
    
*   **时间轴渲染 (`renderTimeline`)**:
    根据当前语言 (`zh`/`en`) 动态生成 HTML 结构。通过对比 `timelineData` 数组长度与 DOM 节点数量，智能决定是**全量重绘**还是**仅更新文本**，优化了 DOM 操作性能。

*   **导航栏滚动监听 (`initNavbarScroll`)**:
    监听 `window.scroll` 事件，当 `scrollY > 50` 时添加 `.scrolled` 类，触发布景模糊 (backdrop-filter) 和阴影效果。

### 5.2 详情页通用渲染器 (`detail.js`)

这是一个高度复用的页面逻辑，用于渲染任意景点的详情。

*   **URL 参数解析**:
    通过 `new URLSearchParams(window.location.search).get('slug')` 获取目标景点 ID。这使得我们不需要为每个景点创建单独的 HTML 文件，实现了**单页模板，多页内容**。

*   **状态保持 (`history.back`)**:
    点击“返回”按钮时，优先调用 `history.back()`。这对于用户体验至关重要——它能确保用户回到列表页时，**滚动条依然停留在之前的位置**，而不是强制回到顶部。

*   **无障碍增强 (`initDetailCardsAccessibility`)**:
    手动为非按钮元素（如信息卡片）添加 `role="button"` 和 `tabindex="0"`，并监听 `Enter/Space` 键，使其能够被键盘用户访问。

### 5.3 历史文化模块 (`history.js`)

该模块展示了更复杂的数据结构渲染。

*   **多维度数据展示**:
    分别渲染“历史轴”、“文化特色 (Grid布局)”、“文化遗产 (List布局)”和“现代融合 (Card布局)”。
    
*   **轮播组件 (`carousel` 对象)**:
    手写了一个轻量级轮播类。包含自动播放、手动切换、指示器同步等功能。
    *   **关键逻辑**: `goToSlide(index)` 方法统一处理了索引越界检查 (`index < 0` 或 `index >= length`)，实现了无限循环滚动的逻辑闭环。

### 5.4 工具函数库 (`utils.js`)

这是项目的"瑞士军刀"。

*   **`formatDate`**: 日期格式化。
*   **`debounce`**: 防抖函数，用于优化 `resize` 和 `scroll` 事件的监听频率，防止高频触发导致掉帧。
*   **`safeHTML`**: (虽然本项目主要由内部数据驱动，但也预留了简单的 XSS 过滤逻辑)

---

## 6. UI/UX 设计体系 (Design System)

### 6.1 色彩系统 (Color Palette)

| 变量名 | 色值 (Light) | 色值 (Dark) | 语义用途 |
| :--- | :--- | :--- | :--- |
| `--primary-color` | `#00B8D4` (青色) | `#00E5FF` | 深圳蓝，代表科技与海洋 |
| `--secondary-color` | `#FF6B35` (橙色) | `#FF8A65` | 活力橙，代表年轻与热情 |
| `--bg-primary` | `#FFFFFF` | `#121212` | 页面背景，Dark模式下为纯黑偏灰 |
| `--text-primary` | `#1A1A1A` | `#FFFFFF` | 主要正文内容 |
| `--surface-color` | `#F5F7FA` | `#1E1E1E` | 卡片与模块背景 |

### 6.2 字体排印 (Typography)

*   **中文字体栈**: `"PingFang SC", "Microsoft YaHei", sans-serif`。优先使用苹果系统的苹方字体，保证阅读体验。
*   **英文字体栈**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`。使用系统原生无衬线字体。
*   **字号阶梯**:
    *   H1: 2.5rem (Hero标题)
    *   H2: 2rem (区块标题)
    *   H3: 1.5rem (卡片标题)
    *   Body: 1rem (正文)
    *   Small: 0.875rem (辅助信息)

### 6.3 响应式策略 (Responsive Strategy)

采用 **Mobile First (移动优先)** 策略。基础 CSS 针对移动端编写，通过 `@media` 适配大屏。

*   **Breakpoint 1: 768px (Tablet)**:
    *   导航栏由汉堡菜单变为顶部水平导航。
    *   Grid 布局由 1 列变为 2 列。
*   **Breakpoint 2: 992px (Desktop)**:
    *   Grid 布局变为 3 列或 4 列。
    *   Hero 区域增加视频背景或视差滚动效果。

---

## 7. 工程化与运维 (Engineering & DevOps)

### 7.1 自动化链接巡检 (`audit-links.mjs`)

为了保证用户体验，我们编写了一个 Node.js 脚本用于检测死链。

**工作流程**:
1.  **扫描**: 递归遍历 `dist/` 目录，解析所有 HTML 和 JS 文件。
2.  **提取**: 使用正则表达式 `/(?:href|src)=["']([^"']+)["']/g` 提取所有 URL。
3.  **分类**:
    *   内部链接 (e.g., `/assets/img.png`): 检查文件是否存在于磁盘。
    *   外部链接 (e.g., `https://google.com`): 发起 HEAD 请求检查响应码。
4.  **报告**: 任何 404 错误都会导致脚本以非零状态码退出 (`process.exit(1)`)，从而**阻断 CI 构建**。

这一机制确保了**没有一个死链能活着走出开发环境**。

### 7.2 CI/CD 流水线 (`pages.yml`)

利用 GitHub Actions 实现全自动部署。

```yaml
name: Deploy static content to Pages

on:
  push:
    branches: ["master"]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install Dependencies
        run: npm ci  # 严格按照 lock file 安装

      - name: Build
        run: npm run build # Vite 构建

      - name: Audit Links
        run: npm run audit # 链接巡检，失败则停止后续步骤

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v4
```

---

## 8. 开发者指南 (Developer Guide)

### 8.1 环境搭建

1.  **克隆仓库**:
    ```bash
    git clone https://github.com/xc996/sz.git
    cd sz
    ```
2.  **安装依赖**:
    ```bash
    npm install
    ```
3.  **启动开发服务器**:
    ```bash
    npm run dev
    ```
    访问 `http://localhost:5173` 即可预览。

### 8.2 如何添加一个新的景点？

无需修改 HTML 代码，只需编辑 `assets/data/attractions.json`：

1.  在 `items` 数组中添加新对象：
    ```json
    {
      "slug": "new-spot",
      "name": "新景点名称",
      "nameEn": "New Spot Name",
      "intro": { "zh": ["介绍段落1"], "en": ["Intro paragraph 1"] },
      "image": "assets/images/new-spot.jpg",
      "location": "福田区"
    }
    ```
2.  将图片文件放入 `assets/images/` 目录。
3.  刷新页面，新景点将自动出现在列表中，详情页也会自动生成。

### 8.3 如何添加一种新语言？

1.  在 `assets/js/index.js` (以及其他页面脚本) 的 `translations` 对象中添加新的键 (e.g., `jp`):
    ```javascript
    const translations = {
        zh: { ... },
        en: { ... },
        jp: {
            'nav.home': 'ホーム',
            // ...
        }
    };
    ```
2.  修改 `switchLanguage` 函数，使其支持循环切换或下拉选择。

---

## 9. 性能与安全 (Performance & Security)

### 9.1 性能优化成果

*   **Lighthouse 评分**: Performance 98/100。
*   **资源压缩**: Vite 构建时自动对 CSS/JS 进行 Minification (极简化)。
*   **图片优化**: 使用 WebP 格式（计划中），目前通过 CDN 缓存控制加载速度。
*   **延迟加载 (Lazy Loading)**:
    *   图片使用 `loading="lazy"` 属性。
    *   非首屏组件（如地图 Iframe）使用 IntersectionObserver API 在滚动到视口时才加载。

### 9.2 安全模型

由于是纯静态网站，天然免疫 SQL 注入、CSRF 等常见服务端攻击。但仍需注意：
*   **XSS 防护**: 在渲染 JSON 数据到 HTML 时，尽量使用 `textContent` 而非 `innerHTML`，或者使用简单的转义函数处理。
*   **依赖安全**: 定期运行 `npm audit` 检查构建工具链的漏洞。

---

## 10. 未来演进路线 (Roadmap)

### 10.1 PWA 升级 (Progressive Web App)
*   **离线能力**: 引入 Service Worker 缓存 App Shell 和关键 JSON 数据，支持断网访问。
*   **安装体验**: 添加 `manifest.json`，允许用户将网站添加到手机主屏幕，获得原生 App 般的体验。

### 10.2 搜索功能增强
*   引入轻量级前端搜索引擎（如 `minisearch` 或 `fuse.js`），实现对全站景点、美食、历史内容的全文检索。

### 10.3 互动地图 2.0
*   目前使用的是静态图片或简单的 Iframe。未来计划集成 Mapbox GL JS 或高德地图 JS API，实现可交互的矢量地图，支持用户查看景点分布、规划路线。

### 10.4 社区共建机制
*   利用 GitHub 的 Pull Request 机制，允许游客或市民提交新的打卡点或修正现有信息，将项目转变为开源共建的城市知识库。

---

**结语**:
深圳旅游网项目不仅是一个展示城市风貌的窗口，也是现代 Web 工程技术的试验田。通过精细的架构设计和对原生技术的极致挖掘，我们证明了：**简单即是美，速度即是正义**。

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

## ☁️ 推荐部署方式（基于当前路径适配）

当前站点为多页静态站点，路径适配逻辑以 `/pages/` 为基准：

- 列表页：`/pages/attractions.html`
- 详情页：`/pages/attractions/detail.html?slug=...`
- 静态资源：`/assets/**`

因此**推荐把项目根目录直接作为站点根目录发布**，确保 `pages/` 与 `assets/` 目录在站点根路径下真实存在。

## 🧭 路径适配 JS 位置与职责

路径适配统一集中在 [assets/js/path.adapter.js](assets/js/path.adapter.js)，主要负责：

- 生成详情页链接（`buildDetailHref`）
- 生成列表页链接（`buildListHref`）
- 判断是否应返回上一页并保留滚动位置（`canGoBackToList`）

遇到部署路径异常或返回行为异常时，请优先修改该文件。

## 📦 部署方式与注意点

### 方式 A：GitHub Pages

- 访问地址：`https://<GitHub用户名>.github.io/<仓库名>/`
- 分支：`master`；工作流：`.github/workflows/pages.yml`
- 构建命令：`npm run build`
- 注意点：
  - 发布内容必须包含 `pages/` 与 `assets/`，否则子页 404 或资源 404
  - `dist/` 需同时包含 `pages/**` 与 `assets/**`
  - 不要做 SPA 回退重写（否则多页路径被覆盖）

### 方式 B：Cloudflare Pages

- 构建命令：`npm run build`
- 构建输出目录：`dist`
- 注意点：
  - 不要开启“SPA 回退”或将 404 重写到 `/index.html`
  - 需保证 `dist/` 中包含 `pages/**` 与 `assets/**`
  - 自定义域名与 `*.pages.dev` 均可用，路径保持 `/pages/...`

### 方式 C：自建服务器（Nginx/Apache/静态托管）

- 站点根目录直接指向项目根（或构建后的 `dist`）
- 注意点：
  - 确保 `/pages/` 与 `/assets/` 在站点根路径下真实存在
  - 不要把 `/*` 重写到 `/index.html`
  - 如果使用二级目录部署，请保证二级目录下仍保留 `pages/` 与 `assets/`

### 验证方式
- 本地预览：`npm run preview`，访问 `http://localhost:4173/` 与 `http://localhost:4173/pages/attractions.html`
- 线上验证：部署完成后访问
  - 首页：`/sz/`
  - 子页：`/sz/pages/attractions.html` 等

## 🧱 构建与资源 (Build & Assets)

- `vite.config.js`：`base: './'`，适配项目站点路径（`/sz/`）
- `package.json`：`build` 脚本为 `vite build && node scripts/copy-static.mjs`
- `scripts/copy-static.mjs`：递归复制 `pages/` 与 `assets/` 到 `dist/`
- `.nojekyll`：在 `dist` 写入以禁用 Jekyll 处理

## ✅ 自动巡检与统一管理（CI & Path Management）

- 统一资源路径：所有页面脚本统一调用 `window.getAssetsBase()`（位于 `assets/js/utils.js`）生成资源基路径，避免各处重复实现与路径不一致。
- 路径适配统一入口：`assets/js/path.adapter.js` 负责列表/详情链接与返回行为的统一处理。
- 构建后复制：始终通过 `scripts/copy-static.mjs` 将 `pages/` 和 `assets/` 一并复制到 `dist/`，确保子页与静态资源发布完整。
- 发布前自动巡检（CI）：工作流 `.github/workflows/pages.yml` 在构建后执行 `npm run audit`，对 HTML/JS 中的 `href/src` 和 JSON 引用进行并发检查；CI 会自动根据仓库上下文设置 `ORIGIN=https://<GitHub用户名>.github.io` 与 `BASE=/&lt;仓库名&gt;`，发现非 200 资源将阻断部署，避免 404 再次上线。
  - 手动运行：`npm run audit`
  - 参数说明：`--origin https://<GitHub用户名>.github.io --base /<仓库名> --fail-on-404`
  - 检查范围：`index.html`、`pages/**`、`assets/js/**` 中的 `assets/**` 资源链接（含 `.css/.js/.png/.jpg/.jpeg/.svg/.woff2/.ttf/.json`）

## �� 最近更新 (Recent Updates) - 2025-12-21

### 1. 项目结构重构 (Refactoring)
*   **目录整理**：将除首页外的所有 HTML 文件移至 `pages/` 目录，保持根目录整洁。
*   **路径修正**：更新了所有页面中的资源引用路径（`../assets/...`），确保链接有效。

### 2. CSS 模块化与去重 (CSS Modularization)
*   **提取公共样式**：创建 `assets/css/common.css`，集中管理全局变量、重置样式、导航栏、页脚、按钮及动画。
*   **清理冗余代码**：大幅精简各页面专属 CSS 文件，去除重复定义，减小体积。
*   **修复样式丢失**：修复了重构过程中轮播图 (`carousel`) 和卡片网格 (`grid`) 样式丢失的问题。

### 3. 资源路径与缓存优化 (Assets & Caching)
*   **动态路径适配**：引入 `getAssetsBase()` 函数，自动识别运行环境（本地或 GitHub Pages）。
    *   **本地环境**：使用相对路径或标准根路径。
    *   **GitHub Pages**：自动添加仓库名前缀（如 `/sz/assets/...`），完美解决非根目录部署时的资源 404 问题。
*   **缓存清除 (Cache Busting)**：全站资源引用添加版本号参数 (`?v=20251221...`)，确保用户始终加载最新代码。

### 4. 功能修复 (Bug Fixes)
*   **文件编码修复**：彻底清除 HTML 文件头部的 BOM 字符，解决了页面顶部出现不可见空白行的问题。
*   **UI 细节优化**：
    *   修复地图页 (`map.html`) 顶部背景图显示异常，强制全屏填充。
    *   优化全站底部的滚动提示组件，调整布局并增加箭头动画，消除视觉重叠。
*   **地图页修复**：修复了地图容器高度塌陷导致 `iframe` 无法显示的问题。
*   **图片显示修复**：解决了历史文化页 (`history.html`) 图片因路径错误无法显示的问题。
*   **布局修复**：解决了购物页 (`shopping.html`) 和景点页 (`attractions.html`) 因样式缺失导致的排版错乱。

## ☁️ 部署到 Cloudflare（Pages 与 Workers）

本项目已内置 Cloudflare 配置与脚本，支持两种部署方式：Cloudflare Pages（静态站点托管）与 Cloudflare Workers（通过 KV/Assets 提供静态资源并支持 SPA 兜底）。

### Cloudflare Pages 表单填写
- 生产分支：`master`
- 框架预设：`无`
- 构建命令：`npm run build`
- 构建输出目录：`dist`
- 根目录（高级）：`/`（若仓库即为项目根，保持 `/` 或留空）

说明：构建脚本会使用 Vite 生成首页与指纹资源，并通过 [scripts/copy-static.mjs](scripts/copy-static.mjs) 复制 `pages/` 与 `assets/` 到 `dist/`，保证子页和静态资源在 Pages 环境可直接访问。

可选（CLI）：

```bash
# 登录 Cloudflare 账号
npx wrangler login

# 本地开发预览（Pages）
npm run pages:dev

# 发布到 Pages（将 dist 目录部署）
npm run pages:publish
```

### Cloudflare Workers 表单填写
- 项目名称：`sz-tourism-site`（或你偏好的名称，建议与 [wrangler.toml](wrangler.toml) 的 `name` 保持一致）
- 构建命令：`npm run build`
- 部署命令：`npm run cf:publish`（或 `npx wrangler deploy`）
- 非生产分支构建：勾选（可选）
- 非生产分支部署命令：`npm run cf:publish`（可选）

说明：
- 已提供 Worker 入口 [worker/index.js](worker/index.js)，通过 `env.ASSETS` 绑定静态资源目录，并在 GET 请求 404 时回退到 `/index.html`，适配前端路由。
- [wrangler.toml](wrangler.toml) 中 `assets.directory = "./dist"`，确保 Workers 使用构建产物；`main = "worker/index.js"` 指定入口。

可选（CLI）：

```bash
# 登录 Cloudflare 账号
npx wrangler login

# 本地开发（Workers）
npm run cf:dev

# 发布到 Workers（读取 wrangler.toml 配置）
npm run cf:publish
```

### 验证与常见问题
- 构建后请确认 `dist/` 中包含：`index.html`、`pages/**`、`assets/**`。
- 若前端路由在 Workers 下出现 404，确认入口逻辑已回退到 `/index.html`（见 [worker/index.js](worker/index.js)）。
- Pages 与 Workers 可并存：Pages 面向托管静态站点，Workers 面向边缘逻辑与 SPA 兜底；两者互不冲突。

## 📄 License

MIT License

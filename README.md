# 项目说明

## 动画库本地化

- 动画库：AOS (Animate On Scroll)
- 版本：v2.3.1
- 本地化日期：2025-12-14
- 变更说明：
  - 将原 `unpkg` CDN 引用的 AOS 资源改为本地引用
  - CSS 路径：`assets/vendor/aos.css`
  - JS 路径：`assets/vendor/aos.js`

## 使用方式

在页面中确保按以下顺序引入：

```html
<link rel="stylesheet" href="assets/vendor/aos.css">
<script src="assets/vendor/aos.js"></script>
```

并在自定义脚本中初始化：

```js
// 初始化 AOS 动画（函数示例，需在 DOMContentLoaded 后调用）
function 初始化AOS() {
  AOS.init({ duration: 1000, easing: 'ease-in-out', once: true, mirror: false });
}
```

## 兼容性验证

- 页面：`index.html`、`attractions.html` 已使用 `data-aos` 属性
- 验证点：
  - AOS 类与数据属性生效，动画与 CDN 版本一致
  - 浏览器：Chrome / Firefox / Safari / Edge

## 构建与缓存建议

- 本项目为静态页面，无构建工具配置；若后续接入 webpack/vite：
  - 将 `css/vendor/aos.css` 与 `js/vendor/aos.js` 作为静态资源拷贝到发布目录
  - 为静态资源设置合理缓存（如 `Cache-Control: max-age=31536000, immutable`），并在升级版本时更换文件名或路径以破坏缓存

## 图标库本地化

- 图标库：Font Awesome Free
- 版本：v6.4.0
- 本地化日期：2025-12-14
- 变更说明：
  - 将原 `cdnjs` CDN 引用改为本地引用
  - CSS 路径：`assets/vendor/all.min.css`
  - 字体路径：`assets/webfonts/*.woff2` 与 `assets/webfonts/*.ttf`
  - 更新位置：
    - `index.html:16` 改为 `assets/vendor/all.min.css`
    - `attractions.html:16` 改为 `assets/vendor/all.min.css`

## 本地引用示例

```html
<link rel="stylesheet" href="assets/vendor/all.min.css">
<link rel="stylesheet" href="assets/vendor/aos.css">
<script src="assets/vendor/aos.js"></script>
```

## 兼容性与缓存建议（图标库）

- 确保 `assets/vendor/all.min.css` 能正确找到 `../webfonts/` 下的字体文件
- 建议对 `assets/webfonts/*` 设置长期缓存；若升级版本，替换文件并更新引用以破坏缓存

## 变更摘要（2025-12-16）

- 清理景点详情页底部残留的 `info-card` 区块，统一页面结构。
- 精简 `attractions/css/detail.css`，移除与 `detail-cards`、`info-card` 相关的样式与动画，保留核心布局与返回按钮样式。
- 兼容性：`attractions/js/detail.js` 中 `initDetailCardsAccessibility` 在无卡片时自动跳过，无需修改脚本。
- 影响范围：
  - `attractions/luzuivilla.html`
  - `attractions/shenzhenobservatory.html`
  - `attractions/szbay.html`
  - `attractions/window.html`
  - `attractions/jidiaosha.html`
  - `attractions/css/detail.css`
- 验证：代码库内已无 `class="info-card"` 使用；页面结构与交互正常。
- 提交：`b8b71c0`（分支 `master`，远程 `origin`）。
- 后续建议：如需恢复底部信息展示，建议以独立组件按页面配置是否渲染。

## 新增：独立地图页（map.html）

- 位置：项目根目录 `map.html`
- 用途：提供独立的交互地图页面（高德地图 iframe），便于直接访问或从站内导航进入
- 资源引用：全部指向 `assets/`（与首页一致）

### 访问方式

- 直接打开：`file:///G:/code/sz/map.html` 或在资源管理器双击 `g:\code\sz\map.html`
- 站内导航：在 `attractions.html` 顶部导航点击“地图”跳转至 `map.html`
- 本地服务：项目根目录启动本地服务器后访问 `http://localhost:8000/map.html`
  - Python：`python -m http.server 8000`
  - Node（安装 http-server）：`npx http-server -p 8000`

### 导航说明

- 首页 `index.html` 的“地图”菜单链接到首页内的地图锚点 `index.html#map`
- 景点总览页 `attractions.html` 的“地图”菜单链接到独立页面 `map.html`
- 如需统一到独立页面，可将 `index.html` 导航的“地图”链接也改为 `map.html`

## 目录结构（已整理）

```
assets/
  css/
    index.css
    attractions.css
    detail.css
    food.css
    shopping.css
    traffic.css
  data/
    attractions.json
    food.json
    shopping.json
    traffic.json
  js/
    index.js
    attractions.js
    detail.js
    detail.render.js
    food.js
    shopping.js
    traffic.js
  vendor/
    all.min.css
    aos.css
    aos.js
  webfonts/
    fa-*.woff2 / fa-*.ttf
  images/
    深圳湾公园.jpg
    placeholder.svg
attractions/
  detail.html  （通用详情模板，按 type 和 slug 动态渲染）
index.html
attractions.html
food.html
shopping.html
traffic.html
history.html
map.html
tests/
  detail.render.test.html
  i18n.toggle.test.html
  data-validation.test.html
  compat.routes.test.html
  list.render.test.html
```

说明：所有静态资源统一在 `assets/`；详情页改为通用模板 + 配置驱动，避免重复页面维护。

## 变更摘要（2025-12-17）

### 配置驱动的景点详情页
- 新增配置文件：`assets/data/attractions.json`
- 新增渲染模块：`assets/js/detail.render.js`
- 通用模板：`attractions/detail.html` 通过 `?slug=<id>` 渲染详情
- 删除薄壳详情页：`attractions/` 目录下原各景点 `*.html` 已清理，仅保留 `detail.html`

### 列表页改造
- 列表卡片改为从 `assets/data/attractions.json` 加载并渲染
- 详情链接统一为：`attractions/detail.html?slug=<slug>`

### 图片加载与占位
- 外链图片可能被浏览器 ORB 拦截，已在列表与详情增加失败回退占位图：`assets/images/placeholder.svg`
- 规范化本地图片路径（以 `/assets/` 开头），并在 `img` 上添加 `onerror` 回退逻辑

### 控制台日志（用于确认链接形式）
- 详情页：`[detail.render] mode=<query|file> slug=<...>`，`mode=query` 为单模板形式
- 列表页：`[list] link=attractions/detail.html?slug=<...> mode=query`

### 回归测试页（浏览器直接打开）
- 列表渲染：`/tests/list.render.test.html`
- 详情渲染：`/tests/detail.render.test.html`
- 语言切换：`/tests/i18n.toggle.test.html`
- 配置校验提示：`/tests/data-validation.test.html`
- 链接兼容验证：`/tests/compat.routes.test.html`

### 本地运行方式
- Python：`python3 -m http.server 5500`
- 访问 `http://localhost:5500/`，页面入口：`index.html`、`attractions.html`、`attractions/detail.html?slug=<slug>`

## 变更摘要（2025-12-19）

### 新增独立功能页面
- **美食页面** (`food.html`)：展示深圳特色美食（如潮汕牛肉火锅、椰子鸡等），配备独立轮播图与数据展示。
- **购物页面** (`shopping.html`)：展示主要购物中心与特色街区（如万象城、东门老街）。
- **交通页面** (`traffic.html`)：展示深圳交通网络（地铁、公交、机场等）。

### 数据与逻辑分离
- **数据文件**：新增 `assets/data/food.json`、`assets/data/shopping.json`、`assets/data/traffic.json`，实现内容配置化。
- **样式文件**：新增 `assets/css/food.css`、`assets/css/shopping.css`、`assets/css/traffic.css`，保持风格统一但允许独立定制。
- **脚本文件**：新增 `assets/js/food.js`、`assets/js/shopping.js`、`assets/js/traffic.js`，负责各页面的渲染逻辑。

### 通用详情页升级
- 修改 `assets/js/detail.render.js`，支持通过 URL 参数 `type` 加载不同类型的数据。
- 详情页链接格式更新为：`attractions/detail.html?type=<type>&slug=<slug>`（例如：`?type=food&slug=beefhotpot`）。
- 默认 `type` 为 `attractions`，保持向下兼容。

### 导航更新
- 全站导航栏（首页、景点页、详情页等）已更新，"美食"、"购物"、"交通"链接指向新的独立页面，替代原有的首页锚点跳转。

### 内容完善与体验优化（2025-12-19 下午）

- **数据扩充**：
  - 美食：新增“隆江猪脚饭”、“光明乳鸽”。
  - 购物：新增“万象天地”、“壹方城”。
  - 交通：新增“出租车/网约车”。
- **图片资源优化**：
  - 生成了带有中文标题和英文副标题的 SVG 占位图，替代了原本缺失的图片文件。
  - 即使在离线环境下，也能直观地看到每个条目对应的图片内容，提升了演示体验。
  - 所有新页面的 JSON 数据中的图片引用已更新为 `.svg` 格式。

### 历史详情页优化（2025-12-19 晚间）

- **标题显示修复**：
  - 修复了历史详情页标题被导航栏遮挡的问题。
  - 为 `.heritage-detail-section` 添加了正确的 `padding` 和背景色。
  - 优化了详情页导航栏样式，确保在浅色背景下文字可见，且背景不透明。
- **图片展示优化**：
  - 统一了历史详情页与景点详情页的图片大小。
  - 图片高度固定为 500px（PC端），并设置 `object-fit: cover` 保持比例。
  - 移动端（<768px）图片高度自动调整为 300px。

### 导航栏交互与视觉优化（2025-12-19 深夜）

- **选中态逻辑修复**：
  - 修复了导航栏在各内页（Map/Food/Shopping等）无法正确高亮当前页面的问题。
  - 引入 `?v=2` 版本号解决 CSS/JS 缓存导致的样式不生效问题。
- **视觉一致性优化**：
  - **防跳动处理**：统一了所有页面导航菜单项的 `padding` 和 `border` 属性，确保从普通态切换到选中态时，元素高度和位置保持绝对稳定。
  - **暗黑模式专属样式**：
    - 亮色模式：保持实心胶囊风格（白色文字+主色背景）。
    - 暗黑模式：改为“空心发光”风格（半透明背景+主色边框+外发光），提升夜间视觉体验。
    - 为所有状态预设透明边框，防止切换主题时产生布局偏移。
- **覆盖范围**：
  - 涉及所有 CSS 文件（`index/attractions/food/history/shopping/traffic.css`）及 `map.html`。

### 首屏可读性增强与高度统一（2025-12-19 深夜补充）

- 顶部导航在首屏由透明改为“顶部渐变”以增强深色底图下可读性（`linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.25), rgba(0,0,0,0))`）。
- 为 `.logo` 与 `.nav-menu a` 增加轻微文字阴影提升对比度；在滚动后的浅色毛玻璃背景中移除阴影，避免白色主题下出现模糊（`#navbar.scrolled .logo, #navbar.scrolled .nav-menu a { text-shadow: none; }`）。
- 统一导航栏的垂直内边距：首屏与滚动态均为 `padding: 15px 0`，消除各页面之间的视觉高度差。
- 统一导航链接下划线伪元素位置：`bottom: 5px`（此前首页为 `-5px`，现已修复），确保基线对齐一致。
- 地图页 `map.html` 保持浅色固定背景（等同滚动态），与其他页面在选中态高度与视觉风格保持一致。

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

67→- 确保 `assets/vendor/all.min.css` 能正确找到 `../webfonts/` 下的字体文件
68→- 建议对 `assets/webfonts/*` 设置长期缓存；若升级版本，替换文件并更新引用以破坏缓存
 
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
  js/
    index.js
    attractions.js
    detail.js
    detail.render.js
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
  detail.html  （通用详情模板，按 slug 动态渲染）
index.html
attractions.html
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

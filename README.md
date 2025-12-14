# 项目说明

## 动画库本地化

- 动画库：AOS (Animate On Scroll)
- 版本：v2.3.1
- 本地化日期：2025-12-14
- 变更说明：
  - 将原 `unpkg` CDN 引用的 AOS 资源改为本地引用
  - CSS 路径：`css/vendor/aos.css`
  - JS 路径：`js/vendor/aos.js`

## 使用方式

在页面中确保按以下顺序引入：

```html
<link rel="stylesheet" href="css/vendor/aos.css">
<script src="js/vendor/aos.js"></script>
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
  - CSS 路径：`css/vendor/all.min.css`
  - 字体路径：`css/webfonts/*.woff2` 与 `css/webfonts/*.ttf`
  - 更新位置：
    - `index.html:16` 改为 `css/vendor/all.min.css`
    - `attractions.html:15` 改为 `css/vendor/all.min.css`

## 本地引用示例

```html
<link rel="stylesheet" href="css/vendor/all.min.css">
<link rel="stylesheet" href="css/vendor/aos.css">
<script src="js/vendor/aos.js"></script>
```

## 兼容性与缓存建议（图标库）

- 确保 `css/vendor/all.min.css` 能正确找到 `../webfonts/` 下的字体文件
- 建议对 `css/webfonts/*` 设置长期缓存；若升级版本，替换文件并更新引用以破坏缓存


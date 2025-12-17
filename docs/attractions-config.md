# 景点配置文件说明（assets/data/attractions.json）

## 顶层结构
- `items`: 景点配置数组，每个元素表示一个景点

## 字段说明（单项）
- `slug`：主标识，用于路由与文件名映射（小写英文）
- `aliases`：别名列表（可选），支持旧文件名或其他短链接映射
- `name` / `nameEn`：景点中英文名称
- `district.zh` / `district.en`：行政区位中英文
- `rating`：评分（0–5 浮点数）
- `image`：主展示图片 URL（可跨域或本地）
- `seo.title.zh/en`：页面标题（用于 `<title>`）
- `seo.description.zh/en`：页面描述（用于 `<meta name="description">`）
- `intro.zh/en[]`：介绍段落数组（按语言分别维护）
- `highlights[]`：亮点列表，元素包含：
  - `icon`：图标类名（如 `fas fa-check-circle`）
  - `zh` / `en`：亮点文案

## 约束与校验
- 运行时内置轻量校验，错误会通过页面顶部横幅提示且降级渲染
- Schema 文件：`assets/schemas/attraction.schema.json`（Draft-07），用于离线/工具校验

## 与页面的关系
- 详情页均为薄壳页：`attractions/*.html` 通过 `assets/js/detail.render.js` 按 `slug` 渲染
- 语言切换沿用现有 `attractions.js` 逻辑，渲染模块监听并重绘动态内容
- SEO 字段将直接写入 `<title>` 与 `<meta description>`，无需手工维护

## 新增景点步骤
1. 在 `assets/data/attractions.json` 的 `items` 中添加一条配置
2. 若需兼容旧路径，补充 `aliases`（如 `"window"`、`"szbay"`）
3. 打开任一详情薄壳页（或 `attractions/detail.html?slug=your-slug`）验证渲染与语言切换
4. 通过测试页验证：`tests/detail.render.test.html` 与 `tests/i18n.toggle.test.html`

## 常见问题
- 页面显示“未找到内容”：`slug` 未匹配（检查文件名或 `aliases`）
- 顶部错误横幅提示校验失败：补齐必填字段或修正类型范围
- 语言切换后内容未更新：确认已加载 `detail.render.js` 且按钮事件未被拦截

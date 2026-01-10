# 未使用清理汇总报告

生成时间：2026-01-10T10:26:33.000Z

## 已完成清理

- 已移除未使用依赖：ajv
- 已删除疑似未被引用图片：深圳地图.png、深圳宝安国际机场.jpg、高铁-火车站.jpg

依赖扫描（可复现）：

```bash
npx --yes depcheck --json
```

## 疑似未被引用的文件/资源

详见：[UNUSED_FILES_REPORT.md](./UNUSED_FILES_REPORT.md)

重新生成（可复现）：

```bash
node scripts/audit-unused.mjs
```

## 验证记录

- 构建：npm run build（已通过）
- 本地资源引用校验：node scripts/check-assets-local.mjs（已通过）

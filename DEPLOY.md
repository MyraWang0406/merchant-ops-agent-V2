# Cloudflare Pages 部署指南

## 方案一：GitHub 集成（推荐，自动部署）

### 步骤：

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "Configure for Cloudflare Pages"
   git push origin main
   ```

2. **在 Cloudflare Dashboard 连接 GitHub**
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 进入 **Pages** → **Create a project**
   - 选择 **Connect to Git**
   - 授权 GitHub，选择仓库 `merchant-ops-agent-V1.1`
   - 配置构建设置：
     - **Framework preset**: Next.js (Static HTML Export)
     - **Build command**: `pnpm run export` 或 `pnpm install && pnpm run export`
     - **Build output directory**: `out`
     - **Root directory**: `/` (根目录)
     - **Node version**: 20

3. **自动部署**
   - Cloudflare 会自动检测 push，触发构建和部署
   - 部署完成后会提供预览链接

---

## 方案二：手动上传（拖拽方式）

### 步骤：

1. **本地构建静态文件**
   ```bash
   pnpm install
   pnpm run export
   ```
   构建完成后，会在项目根目录生成 `out/` 文件夹

2. **压缩 out 文件夹**
   - Windows: 右键 `out` 文件夹 → 发送到 → 压缩(zipped)文件夹
   - 或使用命令行：
     ```powershell
     Compress-Archive -Path out -DestinationPath out.zip
     ```

3. **在 Cloudflare Pages 上传**
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 进入 **Pages** → **Create a project**
   - 选择 **Upload assets**
   - **拖拽上传 `out.zip`** 或点击选择文件
   - Cloudflare 会自动解压并部署

4. **后续更新**
   - 每次更新代码后，重新执行步骤 1-3
   - 或切换到方案一（GitHub 集成）实现自动部署

---

## 注意事项

- ✅ `out/` 文件夹已配置在 `.gitignore` 中，不会被提交到 GitHub
- ✅ 静态导出已配置（`output: 'export'`）
- ✅ 图片已配置为不优化（`images.unoptimized: true`）
- ✅ 构建命令：`pnpm run export` 会生成 `out/` 目录

## 推荐方案

**建议使用方案一（GitHub 集成）**，因为：
- 自动部署，每次 push 自动更新
- 无需手动构建和上传
- 支持预览和回滚
- 更符合 CI/CD 最佳实践


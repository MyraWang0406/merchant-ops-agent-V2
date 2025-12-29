# Cloudflare Pages 连接 GitHub 部署步骤

## ✅ 已完成的准备工作

- ✅ 代码已配置静态导出（`output: 'export'`）
- ✅ 已提交到本地 Git
- ✅ `out/` 文件夹已在 `.gitignore` 中（不会上传到 GitHub）

## 📋 Cloudflare Pages 连接步骤

### 第一步：推送代码到 GitHub

```bash
git push origin main
```

如果遇到权限问题，请确保：
- GitHub 账户有仓库访问权限
- 或者使用 SSH 方式连接

---

### 第二步：在 Cloudflare Dashboard 创建项目

1. **登录 Cloudflare Dashboard**
   - 访问：https://dash.cloudflare.com/
   - 登录你的账户

2. **进入 Pages**
   - 左侧菜单找到 **Workers & Pages**
   - 点击 **Pages**
   - 点击 **Create a project**

3. **连接 GitHub**
   - 选择 **Connect to Git**
   - 点击 **Connect GitHub** 或 **Continue with GitHub**
   - 授权 Cloudflare 访问你的 GitHub 账户
   - 选择仓库：`qccce93-bot/merchant-ops-agent-V1.1`

---

### 第三步：配置构建设置

在 **Configure build** 页面，填写：

| 配置项 | 值 |
|--------|-----|
| **Project name** | `merchant-ops-agent` (或自定义) |
| **Production branch** | `main` |
| **Framework preset** | `Next.js (Static HTML Export)` |
| **Build command** | `pnpm install && pnpm run export` |
| **Build output directory** | `out` |
| **Root directory** | `/` (留空或填 `/`) |
| **Environment variables** | 无需添加（本项目无环境变量） |

**重要提示**：
- 如果 Cloudflare 自动检测到 Next.js，可能会自动填充一些值
- 确保 **Build output directory** 是 `out`
- 确保 **Build command** 包含 `pnpm run export`

---

### 第四步：保存并部署

1. 点击 **Save and Deploy**
2. Cloudflare 会自动：
   - 从 GitHub 拉取代码
   - 安装依赖（`pnpm install`）
   - 执行构建命令
   - 将 `out/` 文件夹部署到 Cloudflare CDN

3. **等待构建完成**（通常 2-5 分钟）
   - 可以在 Cloudflare Dashboard 查看构建日志
   - 构建成功后，会显示预览链接

---

### 第五步：访问你的网站

部署完成后，你会得到：
- **预览链接**：`https://merchant-ops-agent-xxxxx.pages.dev`
- **自定义域名**（可选）：可以在项目设置中添加自己的域名

---

## 🔄 自动部署

配置完成后，每次你：
1. 修改代码
2. `git push origin main`

Cloudflare 会自动：
- 检测到新的 push
- 触发新的构建
- 部署最新版本

---

## 🐛 常见问题

### 问题 1：构建失败 - "Command not found: pnpm"

**解决方案**：
- 在 Cloudflare 项目设置中，添加环境变量：
  - **Name**: `NODE_VERSION`
  - **Value**: `20`
- 或者在 Build command 中使用：
  ```
  npm install -g pnpm && pnpm install && pnpm run export
  ```

### 问题 2：找不到 `out` 目录

**检查**：
- 确保 `next.config.js` 中有 `output: 'export'`
- 确保 Build command 包含 `pnpm run export`
- 查看构建日志，确认 `out` 文件夹是否生成

### 问题 3：页面 404 或空白

**检查**：
- 确保 `trailingSlash: true` 在 `next.config.js` 中
- 检查构建日志，确认所有文件都正确生成

---

## 📝 快速检查清单

- [ ] 代码已推送到 GitHub
- [ ] Cloudflare 已连接 GitHub 仓库
- [ ] 构建设置正确（Build command: `pnpm install && pnpm run export`）
- [ ] 输出目录设置为 `out`
- [ ] 首次构建成功
- [ ] 可以访问预览链接

---

## 🎉 完成！

配置完成后，你的网站会自动部署，每次 push 代码都会自动更新！


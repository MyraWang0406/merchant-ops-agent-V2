# 商家经营分析 Copilot

商家运营智能助手 - 基于 Next.js 14 App Router

## 快速开始

### 安装依赖

```bash
pnpm install
# 或
npm install
```

### 启动开发服务器

```bash
pnpm dev
# 或
npm run dev
```

开发服务器将强制运行在 **http://localhost:3000**

### 端口被占用处理

如果 3000 端口被占用，可以使用以下方式：

**方式1：使用清理脚本（Windows）**
```bash
pnpm dev:clean
```

**方式2：手动释放端口（Windows）**
```bash
# 查找占用 3000 端口的进程
netstat -ano | findstr :3000

# 杀掉进程（替换 <PID> 为实际进程ID）
taskkill /F /PID <PID>

# 然后重新启动
pnpm dev
```

**方式3：手动释放端口（Mac/Linux）**
```bash
# 查找占用 3000 端口的进程
lsof -ti:3000

# 杀掉进程
kill -9 $(lsof -ti:3000)

# 然后重新启动
pnpm dev
```

## 技术栈

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (图标)
- XLSX (Excel 解析)

## 功能特性

- 用户分层分析
- 用户旅程漏斗
- 任务管理（Agent 工作台）
- 数据导入（CSV/XLSX）
- 智能召回任务生成


# TianJiGe 部署指南

## Vercel 部署

### 1. 准备 GitHub 仓库

```bash
git init
git add .
git commit -m "Initial commit"
git push to GitHub
```

### 2. Vercel 配置

1. 访问 https://vercel.com
2. 导入 GitHub 仓库
3. 配置环境变量:

```
MINIMAX_API_KEY = your_api_key
MINIMAX_API_HOST = https://api.minimaxi.com
```

4. 点击 Deploy

### 3. GitHub Actions 自动部署

需要配置以下 Secrets:

- `VERCEL_TOKEN`: https://vercel.com/account/tokens
- `VERCEL_ORG_ID`: Vercel 项目设置
- `VERCEL_PROJECT_ID`: Vercel 项目设置

## 本地预览

```bash
npm run dev
```

访问 http://localhost:3000

## 构建

```bash
npm run build
npm run start
```

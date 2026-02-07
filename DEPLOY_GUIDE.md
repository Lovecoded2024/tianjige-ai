# TianJiGe 部署指南

## 📦 GitHub 仓库

**已推送!** https://github.com/Lovecoded2024/tianjige-ai

---

## Vercel 部署

### 1️⃣ 访问 Vercel

访问: https://vercel.com

### 2️⃣ 导入仓库

1. 点击 "Add New..." → "Project"
2. 选择 "Import GitHub Repository"
3. 选择 `tianjige-ai`

### 3️⃣ 配置环境变量

在项目设置中添加以下环境变量:

| 变量名 | 值 |
|--------|-----|
| `MINIMAX_API_KEY` | `sk-dHMfMag2uo0ABRFywU-9as39u_ns_QQRtC-GolSaQED1Z3i8H-tknbEqFWwXKJjYa-iQkaTszbXrycNYN1J_9kU60ZOKk7TygtR8tmjLJ71vgU5nDOnYTIc` |
| `MINIMAX_API_HOST` | `https://api.minimaxi.com` |

### 4️⃣ 部署

点击 "Deploy" 按钮

---

## 🔄 GitHub Actions 自动部署 (可选)

需要配置以下 Secrets (https://github.com/settings/secrets):

### Vercel Secrets

1. **VERCEL_TOKEN**
   - 获取: https://vercel.com/account/tokens
   - 创建 token，复制完整字符串

2. **VERCEL_ORG_ID**
   - 获取: 运行 `vercel inspect` 或在 Vercel 项目设置中查看

3. **VERCEL_PROJECT_ID**
   - 获取: 在 Vercel 项目设置 → General 中查看

### 添加 Secrets

```bash
# 示例
gh secret set VERCAL_TOKEN --body "your_token"
gh secret set VERCEL_ORG_ID --body "your_org_id"
gh secret set VERCEL_PROJECT_ID --body "your_project_id"
```

---

## 📍 部署后访问

- **生产环境**: https://tianjige-ai.vercel.app
- **自定义域名**: 在 Vercel 项目设置中配置

---

## 🛠️ 本地开发

```bash
cd ~/.openclaw/workspace/tianjige

# 启动开发服务器
npm run dev

# 构建
npm run build

# 预览生产版本
npm run start
```

---

## 📊 技术栈

- **框架**: Next.js 16.1.6 (App Router)
- **样式**: Tailwind CSS 4 + Design System
- **国际化**: next-intl (zh/en/ja/ko)
- **AI**: MiniMax API
- **部署**: Vercel + GitHub Actions

---

*最后更新: 2026-02-07*

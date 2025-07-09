基于 Next.js 构建的个人网站，支持中英文双语切换，采用全栈静态化部署。

## 功能特点

- 🏠 首页：个人简介和主要导航
- 👨‍💻 关于我：个人经历和技能介绍
- 🎯 项目：个人项目展示
- 📝 博客：技术文章和想法分享
- 🌏 中/英文双语支持

## 技术栈

- **框架**: [Next.js](https://nextjs.org)
- **样式**: [Tailwind CSS](https://tailwindcss.com)
- **语言**: [TypeScript](https://www.typescriptlang.org)
- **样式处理**: [PostCSS](https://postcss.org)
- **内容解析**: [remark](https://github.com/remarkjs/remark)
- **国际化**: [next-intl](https://next-intl-docs.vercel.app)
- **部署**: [Cloudflare Pages](https://pages.cloudflare.com)

## 主要特性

### 国际化支持

- 基于 next-intl 实现中英文双语切换
- 路由自动适配语言参数

### 内容管理

- 静态内容：JSX 源码开发
- 动态内容：Markdown 格式存储
- 使用 remark 进行运行时解析渲染

### 性能优化

- Next.js SSG 全栈静态化导出
- Cloudflare CDN 全球加速

## 开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 预览
npm run start
```

## 部署

项目托管在 Cloudflare Pages

```bash
# 构建 - 部署
npm run deploy
```

## 开源协议

MIT

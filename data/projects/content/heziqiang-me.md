## 项目背景

茫茫网络大世界中的一个小角落。本项目几经迭代，开始采用我自研的 Everblog 系统生成（基于Evernote笔记的博客系统）。

后来随着Evernote的没落，渐渐不能满足需求。由于我对React非常熟悉，同时对性能、SEO有严格的要求，所以选择 Next.js 技术栈重构了。

## 主要功能
* 首页
* 关于我
* 项目
* 博客
* 中/英文双语切换

## 技术方案
主要技术栈： Next.js / Tailwind CSS / Typescript / PostCSS / remark / next-intl / Cloudflare

支持中/英文双语切换，主要使用 next-intl 实现。

静态内容 直接在源码中使用JSX开发。

动态内容 使用 markdown 作为通用格式存储，Editor 离线编辑，使用 remark 运行时定制解析渲染。

全站采用 Next.js SSG 全栈静态化导出，性能、便利性拉满。

部署 托管在 Cloudflare Pages，搭配 Cloudflare 全球CDN 👍🏻

代码已开源至我的Github [heziqiang-me](https://github.com/heziqiang/heziqiang-me)

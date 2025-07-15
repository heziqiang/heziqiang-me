A personal website built with Next.js, supporting bilingual Chinese/English switching and full-stack static deployment.

## Features

- 🏠 Home: Personal introduction and main navigation
- 👨‍💻 About: Personal experience and skills introduction
- 🎯 Projects: Personal project showcase
- 📝 Blog: Technical articles and idea sharing
- 🌏 Chinese/English bilingual support

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Style Processing**: [PostCSS](https://postcss.org)
- **Content Parsing**: [remark](https://github.com/remarkjs/remark)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com)

## Key Features

### Internationalization Support

- Bilingual Chinese/English switching based on next-intl
- Automatic route adaptation for language parameters

### Content Management

- Static content: JSX source code development
- Dynamic content: Markdown format storage
- Runtime parsing and rendering using remark

### Performance Optimization

- Next.js SSG full-stack static export
- Cloudflare CDN global acceleration

## Development

```bash
# Install dependencies
npm install

# Development mode
npm run dev

# Preview
npm run start
```

## Deployment

Project hosted on Cloudflare Pages

```bash
# Build - Deploy
npm run deploy
```

## Open Source Agreement

MIT

import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config/settings';

// 只在非生产环境使用中间件
const middleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
  // 排除静态资源路由
  pathnames: {
    '/': '/',
    '/about': '/about',
    '/project': '/project'
  }
});

// 在生产环境下，这个中间件不会被调用，因为静态导出不支持中间件
export default process.env.NODE_ENV === 'production'
  ? (req: Request) => new Response(null, { status: 200 })
  : middleware;

// 配置不需要国际化的路由
export const config = {
  // 跳过对静态资源的处理
  matcher: ['/((?!api|_next|.*\..*|.well-known).*)'],
};
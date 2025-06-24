import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/config/settings';

export default createMiddleware({
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

// 配置不需要国际化的路由
export const config = {
  // 跳过对静态资源的处理
  matcher: ['/((?!api|_next|.*\..*|\.well-known).*)'],
};
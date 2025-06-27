import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales } from "./config/settings";

export default getRequestConfig(async ({ requestLocale }) => {
  // 在静态导出模式下，我们需要等待 requestLocale
  // 获取请求的 locale
  let locale = await requestLocale;
  
  // 确保 locale 是有效的，否则使用默认语言
  if (!locale || !locales.includes(locale as any)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});

import enTranslations from "@/i18n/messages/en.json";
import zhTranslations from "@/i18n/messages/zh.json";

type TranslationsType = typeof zhTranslations;

const translations = {
  en: enTranslations,
  zh: zhTranslations,
} as const;

// 获取嵌套对象的值
function getNestedValue(obj: any, path: string) {
  return path.split(".").reduce((prev, curr) => {
    return prev ? prev[curr] : null;
  }, obj);
}

export function getTranslation(locale: "en" | "zh", key: string): string {
  const value = getNestedValue(translations[locale], key);
  if (value === null || value === undefined) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  return value as string;
}
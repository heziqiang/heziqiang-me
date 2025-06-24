"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Locale = "zh" | "en";
type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // 默认使用中文
  const [locale, setLocaleState] = useState<Locale>("zh");

  // 初始化时从 localStorage 读取语言设置
  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale;
    if (savedLocale && (savedLocale === "zh" || savedLocale === "en")) {
      setLocaleState(savedLocale);
    } else {
      // 如果没有保存的语言设置，尝试使用浏览器语言
      const browserLang = navigator.language.startsWith("zh") ? "zh" : "en";
      setLocaleState(browserLang);
    }
  }, []);

  // 设置语言并保存到 localStorage
  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
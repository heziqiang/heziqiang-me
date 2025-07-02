import { ReactNode } from "react";
import { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { Noto_Sans_SC } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner"
import "../globals.css";
import { locales } from "@/i18n/config/settings";

const notoSansSC = Noto_Sans_SC({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  // preload: false,
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

// 为所有支持的语言生成静态路由
export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  // 设置请求语言
  setRequestLocale(locale);

  const t = await getTranslations("metadata");

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={notoSansSC.className}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <div className="min-h-screen relative">
            <Navbar locale={locale} />
            <main>{children}</main>
            <Toaster position="top-center" richColors/>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

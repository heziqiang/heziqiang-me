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
import "../globals.css";

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
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

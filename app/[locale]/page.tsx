import { Button } from "@/components/ui/button";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { locales } from "@/i18n/config/settings";

// 为所有支持的语言生成静态路由
export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // 先设置请求语言
  setRequestLocale(locale);

  // 然后获取翻译
  const t = await getTranslations("home");

  return (
    <>
      {/* 内容 */}
      <div className="min-h-[calc(100vh-56px)] flex flex-col px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center grow flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl mb-16">
            {t("greeting")}
            <span className="ml-2 wave-animation text-5xl">👋</span>
          </h1>
          <p
            className="text-xl text-left mb-30 max-w-3xl mx-auto leading-8"
            dangerouslySetInnerHTML={{ __html: t.raw("description") }}
          />
        </div>
        <div>
          <div className="flex gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="border-dashed text-md text-gray-600 hover:bg-gradient-to-r from-blue-500 to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-600"
            >
              <Link href="/about">{t("aboutButton")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

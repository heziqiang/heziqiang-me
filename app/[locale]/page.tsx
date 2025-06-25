import { getTranslations } from 'next-intl/server';
import { Button } from "@/components/ui/button";
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';

export default async function Home({ params }: { params: { locale: string } }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  
  // 先设置请求语言
  setRequestLocale(locale);
  
  // 然后获取翻译
  const t = await getTranslations('home');
  
  return (
    <>
      {/* 内容 */}
      <div className="h-[calc(100vh-64px)] flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center font-nunito">
          <h1 className="text-4xl font-nunito md:text-5xl font-bold mb-6">
            {t('greeting')}
            <span className="ml-2 wave-animation text-5xl">👋</span>
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('description')}
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="border-dashed hover:bg-gradient-to-r from-blue-500 to-cyan-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg transition-all duration-600"
            >
              <Link href="/about">{t('aboutButton')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
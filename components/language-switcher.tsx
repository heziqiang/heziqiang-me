'use client';

import { Globe } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher({ locale }: { locale: string }) {
  const pathname = usePathname();
  const nextLocale = locale === 'en' ? 'zh' : 'en';
  
  return (
    <Link
      href={pathname}
      locale={nextLocale}
      className="text-gray-400 transition-colors duration-300 hover:text-blue-500 inline-flex items-center gap-0.5"
    >
      <Globe className="h-4 w-4 -mb-0.5" />
      <span>{locale === 'en' ? '中文' : 'English'}</span>
    </Link>
  );
}
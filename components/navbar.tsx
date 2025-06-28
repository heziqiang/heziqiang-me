import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { NavLink } from "./nav-link";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./language-switcher";

export default async function Navbar({ locale }: { locale: string }) {
  // 设置请求语言
  setRequestLocale(locale);
  const t = await getTranslations('navbar');
  
  const menuItems = [
    { title: t("home"), path: "/" },
    { title: t("about"), path: "/about" },
    { title: t("projects"), path: "/project" },
  ];

  return (
    <nav className="flex items-center justify-between py-4 px-4 sm:px-6 lg:px-16 bg-transparent">
      <Link href="/" className="text-gray-400 font-medium">
        {t("brand")}
      </Link>

      {/* PC 端导航菜单 */}
      <div className="hidden md:flex items-center space-x-4">
        {menuItems.map((item) => (
          <NavLink key={item.path} href={item.path}>
            {item.title}
          </NavLink>
        ))}

        {/* 语言切换 */}
        <LanguageSwitcher locale={locale} />
      </div>

      {/* 移动端下拉菜单 */}
      <div className="md:hidden flex items-center">
        {/* 语言切换 - 移动端 */}
        <LanguageSwitcher locale={locale} />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5 text-gray-600" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32 p-4 mx-2 bg-white border border-gray-100 flex flex-col gap-2">
            {menuItems.map((item) => (
              <DropdownMenuItem key={item.path} asChild>
                <NavLink href={item.path}>
                  {item.title}
                </NavLink>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

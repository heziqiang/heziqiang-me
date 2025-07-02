import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/config/settings";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";
import CopyButton from "@/components/copy-button";

// 为所有支持的语言生成静态路由
export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // 设置请求语言
  setRequestLocale(locale);

  // 获取翻译
  const t = await getTranslations("contact");

  return (
    <div className="min-h-[calc(100vh-56px)] flex flex-col px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* 左侧联系信息 */}
          <div className="space-y-8 px-8 py-16">
            <div>
              <h1 className="text-4xl md:text-6xl font-medium mb-12">
                {t("title")}
              </h1>
            </div>

            <div className="space-y-6">
              {/* 地址 */}
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-800">{t("address")}</p>
                </div>
              </div>

              {/* 邮箱 */}
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                <div className="flex items-center space-x-2">
                  <a
                    href={`mailto:${t("email")}`}
                    className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    {t("email")}
                  </a>
                  <CopyButton text={t("email")} />
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start space-x-4">
                <Linkedin className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="https://linkedin.com/in/heziqiang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    {t("linkedin")}
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start space-x-4">
                <Github className="w-6 h-6 text-gray-600 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="https://github.com/heziqiang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-gray-800 hover:text-blue-600 transition-colors"
                  >
                    {t("github")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧表单 */}
          <div className="bg-white rounded-lg shadow-sm border p-8">
            <h2 className="text-2xl font-medium mb-8">{t("leaveMessage")}</h2>

            <form className="space-y-6" action="#" method="POST">
              {/* 姓名 */}
              <div>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Full name"
                  className="w-full h-12"
                />
              </div>

              {/* 邮箱 */}
              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full h-12"
                />
              </div>

              {/* 手机号 */}
              <div>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone number (Optional)"
                  className="w-full h-12"
                />
              </div>

              {/* 留言 */}
              <div>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Message"
                  className="w-full"
                  style={{ minHeight: '120px', height: 'auto'}}
                />
              </div>

              {/* 提交按钮 */}
              <div className="flex justify-start">
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 text-md transition-colors"
                >
                  {t("form.submit")}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

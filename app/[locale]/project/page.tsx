import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getAllProjects } from "@/data/projects";
import { locales } from "@/i18n/config/settings";

// 为所有支持的语言生成静态路由
export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function Project({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  setRequestLocale(locale);
  const t = await getTranslations("projects");
  
  // 使用数据函数获取项目
  const projects = getAllProjects();

  return (
    <div className="min-h-screen py-12">
      <div className="grid grid-cols-12 mx-auto">
        {/* 侧边栅格 */}
        <div className="col-span-1 xl:col-span-2"></div>

        <div className="col-span-10 xl:col-span-8">
          {/* 标题描述 */}
          <div className="mb-12">
            <h2 className="text-2xl text-gray-800 font-bold mb-6">
              {t("title")}
            </h2>
            <p className="max-w-3xl">{t("description")}</p>
          </div>

          {/* 项目网格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {projects.map((project) => (
              <div key={project.id} className="group relative">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group-hover:-translate-y-1">
                  <Link href={`/project/${project.id}`}>
                    <div className="aspect-[4/3] relative bg-gray-100 overflow-hidden">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-600"
                      />
                    </div>
                    <h3 className={`text-xl font-medium mt-4 flex items-center`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mt-2">
                      {project.abstract}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`px-3 py-1 bg-gray-100 text-blue-600 rounded-lg text-xs border border-gray-200 hover:bg-gray-200 transition-colors duration-300`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 返回首页按钮 */}
          <div className="mt-12 text-center">
            <div className="flex justify-center mt-8">
              <Link href="/">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-32 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-600"
                >
                  {t("backToHome")}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* 侧边栅格 */}
        <div className="col-span-1 xl:col-span-2"></div>
      </div>
    </div>
  );
}

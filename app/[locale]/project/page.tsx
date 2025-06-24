import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function Project({
  params,
}: {
  params: { locale: string };
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // 设置请求语言
  setRequestLocale(locale);

  // 使用 getTranslations 获取翻译
  const t = await getTranslations("projects");

  // 项目数据 - 保持不变
  const projects = [
    {
      id: 1,
      title: "用户体验设计系统",
      description:
        "为大型企业设计的完整用户体验系统，包括组件库、设计规范和交互模式。",
      category: "",
      image: "/tmall_1111.png", // 替换为实际项目图片
      tags: ["管理后台", "PC端", "移动端"],
    },
    {
      id: 2,
      title: "品牌识别系统",
      description:
        "为初创公司创建的品牌识别系统，包括logo、色彩系统、字体和应用指南。",
      category: "",
      image: "/everblog.png", // 替换为实际项目图片
      tags: ["管理后台", "PC端", "移动端"],
    },
    {
      id: 3,
      title: "电商平台重设计",
      description:
        "对现有电商平台进行用户体验优化和视觉重设计，提升转化率和用户满意度。",
      category: "",
      image: "/everblog.png", // 替换为实际项目图片
      tags: ["管理后台", "PC端", "移动端"],
    },
    {
      id: 4,
      title: "Teambition项目管理",
      description:
        "钉钉旗下的项目管理平台",
      category: "",
      image: "/teambition_project.png",
      tags: ["管理后台", "PC端", "移动端"],
    },
    {
      id: 5,
      title: "响应式网站设计",
      description:
        "为教育机构设计的响应式网站，确保在各种设备上提供一致的用户体验。",
      category: "",
      image: "/window.svg", // 替换为实际项目图片
      tags: ["管理后台", "PC端", "移动端"],
    },
  ];

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
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transform group-hover:scale-110 transition-transform duration-600"
                      />
                    </div>
                    <h3 className={`text-xl font-medium mt-4 flex items-center`}>
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mt-2">
                      {project.description}
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

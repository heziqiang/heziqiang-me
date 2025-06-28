import { Button } from "@/components/ui/button";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getProjectBySlug, getAllProjects } from "@/data/projects";
import { Link } from "@/i18n/navigation";
import { locales } from "@/i18n/config/settings";

// 为所有支持的语言和所有项目slug生成静态路由
export async function generateStaticParams() {
  const projects = getAllProjects();
  
  // 为每种语言和每个项目slug组合生成路由参数
  const params = [];
  
  for (const locale of locales) {
    for (const project of projects) {
      params.push({
        locale,
        slug: project.slug,
      });
    }
  }
  
  return params;
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const { locale, slug } = resolvedParams;
  
  setRequestLocale(locale);
  const t = await getTranslations("projects");
  
  // 使用数据函数获取项目
  const project = await getProjectBySlug(slug);
  
  if (!project) {
    return (
      <div className="min-h-screen py-12">
        <div className="grid grid-cols-12 mx-auto">
          <div className="col-span-1 xl:col-span-2"></div>
          <div className="col-span-10 xl:col-span-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-800 mb-4">项目未找到</h1>
              <Link href="/project">
                <Button variant="outline">返回项目列表</Button>
              </Link>
            </div>
          </div>
          <div className="col-span-1 xl:col-span-2"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-12">
      <div className="grid grid-cols-12 mx-auto">
        {/* 侧边栅格 */}
        <div className="col-span-1 xl:col-span-2"></div>
        
        <div className="col-span-10 xl:col-span-8">
          {/* 返回按钮 */}
          <div className="mb-8">
            <Link href="/project">
              <Button 
                variant="outline" 
                className="hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                ← 返回项目列表
              </Button>
            </Link>
          </div>
          
          {/* 项目标题和标签 */}
          <div className="mb-8">
            <h1 className="text-3xl font-medium text-gray-800 mb-4">
              {project.title}
            </h1>
            
            {/* 标签 */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-600 rounded-lg text-sm border border-blue-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* 项目内容 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div 
              className="prose prose-md max-w-none p-8 prose-headings:text-gray-800 prose-p:text-gray-600  prose-a:text-blue-600 prose-strong:text-gray-800 prose-code:text-gray-700 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-50 prose-pre:border prose-pre:text-gray-800 prose-img:rounded-lg prose-img:shadow-sm"
              dangerouslySetInnerHTML={{ __html: project.contentHtml }}
            />
          </div>
          
          {/* 返回按钮 */}
          <div className="mt-12 text-center">
            <Link href="/project">
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
        
        {/* 侧边栅格 */}
        <div className="col-span-1 xl:col-span-2"></div>
      </div>
    </div>
  );
}
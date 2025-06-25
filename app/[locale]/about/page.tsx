import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getTranslations, setRequestLocale } from "next-intl/server";

// 定义技能组和技能的类型
type Skill = string;

type SkillGroup = {
  id: string;
  titleKey: string;
  icon: React.ReactNode;
  progress: number;
  skills: Skill[];
};

// 定义工作经历的类型
type WorkExperience = {
  id: string;
  titleKey: string;
  positionKey: string;
  descriptionKey: string;
  logo: string;
};

// 定义教育经历的类型
type Education = {
  id: string;
  titleKey: string;
  majorKey: string;
  descriptionKey: string;
  logo: string;
};

export default async function About({
  params,
}: {
  params: { locale: string };
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  // 设置请求语言
  setRequestLocale(locale);

  // 使用 getTranslations 替代 useTranslations
  const t = await getTranslations("about");

  // 定义技能组数据
  const skillGroups: SkillGroup[] = [
    {
      id: "frontend",
      titleKey: "frontendDev",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      ),
      progress: 100,
      skills: ["React", "Next.js", "Vite", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "backend",
      titleKey: "backendDev",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"
          />
        </svg>
      ),
      progress: 90,
      skills: ["Node.js", "Express", "SQL", "Redis", "RESTful"],
    },
    {
      id: "devops",
      titleKey: "devOps",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      progress: 80,
      skills: ["Docker", "AWS", "CI/CD", "Linux"],
    },
    {
      id: "ai",
      titleKey: "aiModels",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
        </svg>
      ),
      progress: 70,
      skills: ["Cursor", "Trae", "OpenAI API"],
    },
  ];

  // 定义工作经历数据
  const workExperiences: WorkExperience[] = [
    {
      id: "urbanic",
      titleKey: "urbanicTitle",
      positionKey: "urbanicPosition",
      descriptionKey: "urbanicDescription",
      logo: "/urbanic.png",
    },
    {
      id: "xiaohongshu",
      titleKey: "xiaohongshuTitle",
      positionKey: "xiaohongshuPosition",
      descriptionKey: "xiaohongshuDescription",
      logo: "/xiaohongshu.jpg",
    },
    {
      id: "alibaba",
      titleKey: "alibabaTitle",
      positionKey: "alibabaPosition",
      descriptionKey: "alibabaDescription",
      logo: "/alibaba.png",
    },
    {
      id: "dingding",
      titleKey: "dingdingTitle",
      positionKey: "dingdingPosition",
      descriptionKey: "dingdingDescription",
      logo: "/teambition.jpg",
    },
  ];

  // 定义教育经历数据
  const educations: Education[] = [
    {
      id: "huadongligong",
      titleKey: "universityName",
      majorKey: "universityMajor",
      descriptionKey: "universityDescription",
      logo: "/huadongligong.webp",
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="grid grid-cols-12 mx-auto">
        <div className="col-span-1 xl:col-span-2"></div>

        <div className="col-span-10 xl:col-span-8">
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            {/* 左侧：个人照片 */}
            <div className="w-full md:w-1/3 flex items-center justify-center">
              <Avatar className="w-56 h-56 ring-4 ring-blue-500/20 shadow-xl transition-all duration-300 hover:scale-105">
                <AvatarImage src="/daddypig.png" alt="Roman" />
                <AvatarFallback className="text-5xl font-bold">
                  R
                </AvatarFallback>
              </Avatar>
            </div>

            {/* 右侧：个人介绍 */}
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-medium mb-6">{t("title")}</h2>
              <p className="mb-2">{t("intro1")}</p>
              <p className="mb-2">{t("intro2")}</p>
              <p className="mb-2">{t("intro3")}</p>
              <p className="mb-2">{t("intro4")}</p>
            </div>
          </div>

          {/* 技能部分 - 数据驱动渲染 */}
          <div className="mb-16">
            <h2 className="text-2xl text-gray-800 font-semibold mb-6">
              {t("skills")}
            </h2>
            {/* 调整技能卡片在不同屏幕尺寸下的布局 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {skillGroups.map((group) => (
                <div key={group.id} className="group relative">
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group-hover:-translate-y-1">
                    <h3 className={`text-lg mb-4 flex items-center`}>
                      {group.icon}
                      {t(group.titleKey)}
                    </h3>
                    <div className="w-full bg-gray-100 rounded-full h-1 mb-4 overflow-hidden">
                      <div
                        className={`bg-gray-300 h-1 rounded-full transition-all duration-500`}
                        style={{ width: `${group.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, index) => (
                        <span
                          key={`${group.id}-skill-${index}`}
                          className={`px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border border-gray-200 hover:bg-gray-200 transition-colors duration-300`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 工作经历部分 - 数据驱动渲染 */}
          <div className="mb-16">
            <h2 className="text-2xl text-gray-800 font-semibold mb-8">
              {t("workExperience")}
            </h2>
            <div className="space-y-6">
              {workExperiences.map((experience) => (
                <div
                  key={experience.id}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={experience.logo}
                      alt={t(experience.titleKey)}
                      className="w-8 h-8 object-cover rounded-full border border-gray-200"
                    />
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">
                        {t(experience.titleKey)}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {t(experience.positionKey)}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(experience.descriptionKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 教育背景 */}
          <div className="mb-16">
            <h2 className="text-2xl text-gray-800 font-semibold mb-6">
              {t("education")}
            </h2>
            <div className="space-y-6">
              {educations.map((education) => (
                <div
                  key={education.id}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <img
                      src={education.logo}
                      alt={t(education.titleKey)}
                      className="w-8 h-8 object-cover rounded-full border border-gray-200"
                    />
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 mb-2">
                        {t(education.titleKey)}
                      </h3>
                      <p className="text-gray-600 font-medium mb-4">
                        {t(education.majorKey)}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t(education.descriptionKey)}
                  </p>
                </div>
              ))}
            </div>
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

        <div className="col-span-1 xl:col-span-2"></div>
      </div>
    </div>
  );
}

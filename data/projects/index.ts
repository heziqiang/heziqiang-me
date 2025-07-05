import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import type { Project } from "./types";

// 项目静态数据
const projectsData: Project[] = [
  {
    slug: "heziqiang-me",
    title: "我的个人网站",
    abstract:
      "我的个人网站，记录了我的技术成长和经历。使用 Next.js SSG + Serverless，托管在 Cloudflare。",
    category: "",
    coverImage: "/heziqiang_me_cover.png",
    tags: ["个人网站", "博客"],
    contentFile: "heziqiang-me.md",
    contentHtml: "",
  },
  {
    slug: "xiaohongshu-organization",
    title: "小红书组织管理系统2.0",
    abstract:
      "小红书企业组织架构，含10000+部门/人员节点，超大规模列表页面优化重构，基于OT算法的实时协同编辑。",
    category: "",
    coverImage: "/xiaohongshu_cover.jpg",
    tags: ["效能工具", "性能优化", "OT算法"],
    contentFile: "xiaohongshu-organization.md",
    contentHtml: "",
  },
  {
    slug: "everblog",
    title: "印象博客 Everblog",
    abstract:
      "Everblog是一个博客应用，无缝对接Evernote印象笔记，自动转换并发布到个人博客中，无需繁琐的内容管理。",
    category: "",
    coverImage: "/everblog_cover.png",
    tags: ["网站", "博客系统", "个人作品"],
    contentFile: "everblog.md",
    contentHtml: "",
  },
  {
    slug: "alibaba-page-building",
    title: "阿里巴巴双十一营销页面搭建系统",
    abstract: "阿里双十一活动千亿GMV背后是百万活动页面，模块化、可视化的页面搭建平台，运营同学也能用。",
    category: "",
    coverImage: "/ali_pbs_cover.png",
    tags: ["双十一", "模块化", "页面搭建"],
    contentFile: "alibaba-page-building.md",
    contentHtml: "",
  },
  {
    slug: "teambition-project",
    title: "Teambition项目管理平台",
    abstract: "业界领先的企业级项目管理平台，包含项目管理、任务看板、日程安排、实时协同编辑、企业级权限管控体系等。",
    category: "",
    coverImage: "/teambition_cover.png",
    tags: ["管理后台", "PC端", "移动端"],
    contentFile: "teambition-project.md",
    contentHtml: "",
  },
  
];

// 获取所有项目
export function getAllProjects(): Project[] {
  return projectsData;
}

// 根据slug获取项目
export async function getProjectBySlug(
  slug: string
): Promise<Project | undefined> {
  const post = projectsData.find((project) => project.slug === slug);
  if (!post) {
    console.error("Post not found: ", slug);
    return undefined;
  }
  post.contentHtml = await getProjectContent(post.contentFile);
  return post;
}

// 根据分类获取项目
export function getProjectsByCategory(category: string): Project[] {
  return projectsData.filter((project) => project.category === category);
}

// 获取项目内容（markdown）
export async function getProjectContent(contentFile: string): Promise<string> {
  try {
    const fullPath = path.join(
      process.cwd(),
      "data",
      "projects",
      "content",
      contentFile
    );
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const processedContent = await remark().use(html).process(fileContents);

    return processedContent.toString();
  } catch (error) {
    console.error("Error reading markdown file:", error);
    return "<p>内容加载失败</p>";
  }
}

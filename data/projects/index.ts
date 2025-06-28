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
      "就是你现在看到的个人网站，记录了我的技术成长和经历。使用 Next.js 构建，内容托管在 Cloudflare。",
    category: "",
    coverImage: "/heziqiang_me.png",
    tags: ["个人网站", "博客"],
    contentFile: "heziqiang-me.md",
    contentHtml: "",
  },
  {
    slug: "xiaohongshu-organization",
    title: "小红书组织管理系统2.0",
    abstract:
      "为小红书设计的组织架构管理系统，实现超大规模列表优化（前端架构重构）,实时协同编辑（分布式系统设计）。",
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
      "Everblog 是一个智能化的个人网站/博客应用，通过无缝对接 Evernote，让用户能够轻松地将笔记内容自动转换并发布到个人博客中。无需繁琐的内容管理流程，完美融合 Evernote 的笔记管理功能与博客发布系统，打造简洁流畅的博客体验。",
    category: "",
    coverImage: "/everblog.png",
    tags: ["网站", "博客系统", "个人作品"],
    contentFile: "everblog.md",
    contentHtml: "",
  },
  {
    slug: "taobao-page-building",
    title: "淘宝页面可视化搭建平台",
    abstract: "淘宝天猫的双十一购物节，千亿GMV背后是百万活动页面，模块化可视化的页面搭建平台，运营同学也能用。",
    category: "",
    coverImage: "/taobao_page_building.png",
    tags: ["双十一", "模块化", "页面搭建"],
    contentFile: "taobao-page-building.md",
    contentHtml: "",
  },
  {
    slug: "teambition-project",
    title: "Teambition项目管理",
    abstract: "钉钉旗下企业级项目管理系统，包含项目管理、任务看板、日程安排、实时文档协同编辑、企业级权限体系等。",
    category: "",
    coverImage: "/teambition_project.png",
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

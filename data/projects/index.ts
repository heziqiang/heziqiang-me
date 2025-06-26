import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';
import type { Project } from './types';

// 项目静态数据
const projectsData: Project[] = [
  {
    id: 1,
    title: "用户体验设计系统",
    abstract: "为大型企业设计的完整用户体验系统，包括组件库、设计规范和交互模式。",
    category: "",
    coverImage: "/tmall_1111.png",
    tags: ["管理后台", "PC端", "移动端"],
    content: "1.md"
  },
  {
    id: 2,
    title: "品牌识别系统",
    abstract: "为初创公司创建的品牌识别系统，包括logo、色彩系统、字体和应用指南。",
    category: "",
    coverImage: "/everblog.png",
    tags: ["管理后台", "PC端", "移动端"],
    content: "2.md"
  },
  {
    id: 3,
    title: "电商平台重设计",
    abstract: "对现有电商平台进行用户体验优化和视觉重设计，提升转化率和用户满意度。",
    category: "",
    coverImage: "/everblog.png",
    tags: ["管理后台", "PC端", "移动端"],
    content: "3.md"
  },
  {
    id: 4,
    title: "Teambition项目管理",
    abstract: "钉钉旗下的项目管理平台",
    category: "",
    coverImage: "/teambition_project.png",
    tags: ["管理后台", "PC端", "移动端"],
    content: "4.md"
  },
  {
    id: 5,
    title: "响应式网站设计",
    abstract: "为教育机构设计的响应式网站，确保在各种设备上提供一致的用户体验。",
    category: "",
    coverImage: "/window.svg",
    tags: ["管理后台", "PC端", "移动端"],
    content: "5.md"
  },
];

// 获取所有项目
export function getAllProjects(): Project[] {
  return projectsData;
}

// 根据ID获取项目
export function getProjectById(id: number): Project | undefined {
  return projectsData.find(project => project.id === id);
}

// 根据分类获取项目
export function getProjectsByCategory(category: string): Project[] {
  return projectsData.filter(project => project.category === category);
}

// 获取项目内容（markdown）
export async function getProjectContent(contentFile: string): Promise<string> {
  try {
    const fullPath = path.join(process.cwd(), 'data', 'projects', 'content', contentFile);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    const processedContent = await remark()
      .use(html)
      .process(fileContents);
    
    return processedContent.toString();
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return '<p>内容加载失败</p>';
  }
}

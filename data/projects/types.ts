export interface Project {
  slug: string;
  title: string;
  abstract: string;
  category: string;
  coverImage: string;
  tags: string[];
  contentFile: string;
  contentHtml: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProjectMeta {
  slug: string;
  featured: boolean;
}
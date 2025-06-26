export interface Project {
  id: number;
  title: string;
  abstract: string;
  category: string;
  coverImage: string;
  tags: string[];
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProjectMeta {
  id: number;
  slug: string;
  featured: boolean;
}
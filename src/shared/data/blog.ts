export interface BlogPost {
  slug: string;
  date: string;
  readingTime: number;
  tags: string[];
  title_es: string;
  title_en: string;
  excerpt_es: string;
  excerpt_en: string;
  body_es: string;
  body_en: string;
}

export const blogPosts: BlogPost[] = [];

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);

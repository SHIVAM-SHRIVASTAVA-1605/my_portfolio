export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  demo?: string; // Optional demo link
  featured: boolean;
}

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5 for skill level
  category: 'frontend' | 'backend' | 'design' | 'tools';
}

export interface NavLink {
  path: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
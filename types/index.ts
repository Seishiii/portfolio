export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  href: string;
  featured?: boolean;
}

export interface SiteConfig {
  name: string;
  initials: string;
  title: string;
  introduction: string;
  about: string[];
  email: string;
  resume: string;
  socialLinks: {
    github: string;
    linkedin: string;
  };
}

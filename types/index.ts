export interface Project {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  category: string;

  imageFolder: string;
  // Automatically discovered image paths
  images: string[];

  featured: boolean;

  links?: {
    github?: string;
    live?: string;
  };

  features?: string[];

  details?: {
    role?: string;
    developmentPeriod?: string;
    teamSize?: string;
    responsibilities?: string[];
  };
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

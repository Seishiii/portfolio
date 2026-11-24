import type { Project, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Kent Clark Ogawa",
  initials: "KO",
  title: "Full-Stack Developer",

  introduction:
    "I build web applications and digital solutions, turning ideas into functional and meaningful experiences.",

  about: [
    "I'm an Information Technology graduate specializing in Web and Mobile Application Development, with a passion for building practical and user-focused software solutions.",

    "I enjoy working across the stack, exploring new technologies, and continuously improving my skills through personal projects and real-world development experience.",
  ],

  email: "kcmogawa@gmail.com",

  resume: "/resume/resume.pdf",

  socialLinks: {
    github: "https://github.com/Seishiii",
    linkedin: "https://www.linkedin.com/in/kent-clark-ogawa-4483ba390/",
  },
};

export const technologies = [
  "JavaScript",
  "TypeScript",
  "PHP",
  "Java",
  "C++",
  "C#",
  "React",
  "Next.js",
  "Vue.js",
  "Laravel",
  "Node.js",
  "Tailwind CSS",
  "MySQL",
  "Git",
];

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Pal-Puter",
    description:
      "A gamified programming learning application designed to make learning programming more engaging.",
    technologies: ["Next.js", "React", "TypeScript"],
    image: "/images/projects/pal-puter.png",
    href: "/projects",
  },
  {
    id: 2,
    title: "Pal-Puter",
    description:
      "A gamified programming learning application designed to make learning programming more engaging.",
    technologies: ["Next.js", "React", "TypeScript"],
    image: "/images/projects/pal-puter.png",
    href: "/projects",
  },
  {
    id: 3,
    title: "Pal-Puter",
    description:
      "A gamified programming learning application designed to make learning programming more engaging.",
    technologies: ["Next.js", "React", "TypeScript"],
    image: "/images/projects/pal-puter.png",
    href: "/projects",
  },
  {
    id: 4,
    title: "Pal-Puter",
    description:
      "A gamified programming learning application designed to make learning programming more engaging.",
    technologies: ["Next.js", "React", "TypeScript"],
    image: "/images/projects/pal-puter.png",
    href: "/projects",
  },
  {
    id: 5,
    title: "Pal-Puter",
    description:
      "A gamified programming learning application designed to make learning programming more engaging.",
    technologies: ["Next.js", "React", "TypeScript"],
    image: "/images/projects/pal-puter.png",
    href: "/projects",
  },
];

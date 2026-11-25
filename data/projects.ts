import "server-only";

import fs from "node:fs";
import path from "node:path";

import type { Project } from "@/types";

// Only the image folder needs to be specified.
const projectEntries: Omit<Project, "images">[] = [
  {
    id: 1,
    slug: "pal-puter",
    title: "Pal-Puter",

    shortDescription:
      "A gamified programming learning application designed to make learning programming more engaging.",

    description:
      "Pal-Puter is a gamified programming learning application that aims to make programming education more interactive and engaging. It supports learning through programming lessons, quizzes, experience points, badges, and levels.",

    category: "Web Application",

    technologies: ["Next.js", "React", "TypeScript", "Java", "C++", "Python"],

    imageFolder: "images/projects/pal-puter",

    featured: true,

    links: {
      github: "https://github.com/yourusername/pal-puter",
    },

    features: [
      "Gamified programming lessons",
      "Programming quizzes",
      "Experience points and leveling system",
      "Achievement badges",
      "Certificate generation and SHA-256 verification",
    ],

    details: {
      role: "Full Stack Developer",
      developmentPeriod: "May 2025 - July 2025",
      teamSize: "4 members",
      responsibilities: [
        "Developed the frontend using Next.js and React",
        "Implemented the backend with Node.js and Express",
        "Designed and implemented the database schema",
        "Integrated third-party APIs for authentication and payment processing",
      ],
    },
  },
];

// Discover images inside a project's public folder.
function getProjectImages(folder: string): string[] {
  const absolutePath = path.join(process.cwd(), "public", folder);

  if (!fs.existsSync(absolutePath)) {
    console.warn(`Project image folder not found: ${folder}`);
    return [];
  }

  const supportedExtensions = [".png", ".jpg", ".jpeg", ".webp", ".avif"];

  const files = fs.readdirSync(absolutePath, {
    withFileTypes: true,
  });

  return files
    .filter(
      (file) =>
        file.isFile() &&
        supportedExtensions.includes(path.extname(file.name).toLowerCase()),
    )
    .map((file) => file.name)
    .sort((a, b) =>
      a.localeCompare(b, undefined, {
        numeric: true,
        sensitivity: "base",
      }),
    )
    .map((filename) => `/${folder}/${filename}`);
}

// Attach discovered images to each project.
export const projects: Project[] = projectEntries.map((project) => ({
  ...project,
  images: getProjectImages(project.imageFolder),
}));

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getFeaturedProjects = () =>
  projects.filter((project) => project.featured);

export const getAllTechnologies = () =>
  Array.from(
    new Set(projects.flatMap((project) => project.technologies)),
  ).sort();

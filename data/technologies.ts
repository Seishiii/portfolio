import type { IconType } from "react-icons";

import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiLaravel,
  SiNodedotjs,
  SiTailwindcss,
  SiMysql,
  SiGit,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

interface Technology {
  name: string;
  icon: IconType;
}

export const technologies: Technology[] = [
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "PHP",
    icon: SiPhp,
  },
  {
    name: "Java",
    icon: FaJava,
  },
  {
    name: "C++",
    icon: SiCplusplus,
  },
  {
    name: "C#",
    icon: TbBrandCSharp,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
  },
  {
    name: "Vue.js",
    icon: SiVuedotjs,
  },
  {
    name: "Laravel",
    icon: SiLaravel,
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "Git",
    icon: SiGit,
  },
];

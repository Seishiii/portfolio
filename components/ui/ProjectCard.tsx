import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent">
      <div className="relative aspect-video overflow-hidden bg-surface-hover">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="mb-2 text-xl font-bold">{project.title}</h3>

        <p className="mb-5 text-sm leading-relaxed text-muted sm:text-base">
          {project.description}
        </p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-surface-hover px-3 py-1 text-xs text-accent sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={project.href}
          className="font-semibold text-accent hover:opacity-80"
        >
          Explore Project →
        </Link>
      </div>
    </article>
  );
}

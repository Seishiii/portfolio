import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const previewImage = project.images[0];

  return (
    <article className="group overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent">
      {/* Project Image */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative block aspect-video overflow-hidden bg-surface-hover"
      >
        {previewImage ? (
          <Image
            src={previewImage}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted">
            No preview available
          </div>
        )}
      </Link>

      {/* Project Information */}
      <div className="p-5 sm:p-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
          {project.category}
        </p>

        <h3 className="mb-2 text-xl font-bold">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mb-5 text-sm leading-relaxed text-muted sm:text-base">
          {project.shortDescription}
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
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 font-semibold text-accent transition-all hover:gap-3"
        >
          View Details →
        </Link>
      </div>
    </article>
  );
}

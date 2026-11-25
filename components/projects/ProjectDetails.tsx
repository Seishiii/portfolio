import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectInformation from "@/components/projects/ProjectInformation";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <article className="site-container py-12 sm:py-16 md:py-20">
      {/* Breadcrumb */}
      <Link
        href="/projects"
        className="mb-10 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
      >
        <span aria-hidden="true">←</span>
        Back to Projects
      </Link>

      {/* Project Header */}
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-bold tracking-[2px] text-accent">
          {project.category}
        </p>

        <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {project.title}
          <span className="text-accent">.</span>
        </h1>

        <p className="text-base leading-relaxed text-muted sm:text-lg">
          {project.shortDescription}
        </p>
      </div>

      {/* Project Gallery */}
      <div className="mb-12">
        <ProjectGallery images={project.images} projectName={project.title} />
      </div>

      {/* Project Content */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_300px]">
        {/* Description and Features */}
        <div className="space-y-10">
          <section>
            <h2 className="mb-4 text-2xl font-bold">Overview</h2>

            <p className="leading-relaxed text-muted">{project.description}</p>
          </section>

          {/* Project Key Features */}
          {project.features && project.features.length > 0 && (
            <section>
              <h2 className="mb-4 text-2xl font-bold">Key Features</h2>

              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-muted"
                  >
                    <span className="mt-1 text-accent">✓</span>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Project Information */}
          {project.details && <ProjectInformation details={project.details} />}
        </div>

        {/* Project Technologies */}
        <aside className="space-y-8">
          <section>
            <h2 className="mb-4 text-lg font-bold">Technologies</h2>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md bg-surface px-3 py-2 text-sm text-accent"
                >
                  {technology}
                </span>
              ))}
            </div>
          </section>

          {/* Project Links */}
          {project.links && (project.links.github || project.links.live) && (
            <section>
              <h2 className="mb-4 text-lg font-bold">Project Links</h2>

              <div className="flex flex-col gap-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-secondary w-full"
                  >
                    GitHub Repository ↗
                  </a>
                )}

                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-primary w-full"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </section>
          )}
        </aside>
      </div>
    </article>
  );
}

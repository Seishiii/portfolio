import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section className="site-container py-12 sm:py-16 md:py-20">
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold tracking-[2px] text-accent">
          MY WORK
        </p>

        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Featured Projects
        </h2>

        <p className="max-w-[650px] text-muted">
          A selection of projects I've worked on.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/projects" className="button button-secondary">
          View All Projects
        </Link>
      </div>
    </section>
  );
}

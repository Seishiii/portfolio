import type { Metadata } from "next";
import ProjectsExplorer from "@/components/projects/ProjectsExplorer";
import { projects, getAllTechnologies } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my software development projects, applications, and technical work.",
};

export default function ProjectsPage() {
  const technologies = getAllTechnologies();

  return (
    <section className="site-container py-16 sm:py-20 md:py-24">
      {/* Page Header */}
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-bold tracking-[2px] text-accent">
          MY PORTFOLIO
        </p>

        <h1 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          My Projects<span className="text-accent">.</span>
        </h1>

        <p className="text-base leading-relaxed text-muted sm:text-lg">
          A collection of applications and projects I've developed, exploring
          different technologies and solving various problems through code.
        </p>
      </div>

      {/* Project Explorer */}
      <ProjectsExplorer projects={projects} technologies={technologies} />
    </section>
  );
}

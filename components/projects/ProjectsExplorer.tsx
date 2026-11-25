"use client";

import { useState } from "react";
import type { Project } from "@/types";
import ProjectCard from "@/components/ui/ProjectCard";

interface ProjectsExplorerProps {
  projects: Project[];
  technologies: string[];
}

export default function ProjectsExplorer({
  projects,
  technologies,
}: ProjectsExplorerProps) {
  const [selectedTechnology, setSelectedTechnology] = useState("All");

  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesTechnology =
      selectedTechnology === "All" ||
      project.technologies.includes(selectedTechnology);

    const query = searchQuery.toLowerCase().trim();

    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.shortDescription.toLowerCase().includes(query) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(query));

    return matchesTechnology && matchesSearch;
  });

  return (
    <div>
      {/* Search and Filter */}
      <div className="mb-8 space-y-5">
        {/* Search Input */}
        <div className="relative max-w-md">
          <input
            type="text"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search projects..."
            aria-label="Search projects"
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 pr-11 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent"
          />
          {searchQuery.length > 0 && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 flex size-6 -translate-y-1/2 cursor-pointer items-center justify-center rounded text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
            >
              ×
            </button>
          )}
        </div>

        {/* Technology Filters */}
        <div>
          <p className="mb-3 text-sm font-semibold text-muted">
            Filter by technology
          </p>

          <div className="flex flex-wrap gap-2">
            {["All", ...technologies].map((technology) => {
              const isActive = selectedTechnology === technology;

              return (
                <button
                  key={technology}
                  type="button"
                  onClick={() => setSelectedTechnology(technology)}
                  aria-pressed={isActive}
                  className={`
                    cursor-pointer rounded-full border px-4 py-2
                    text-xs font-semibold transition-colors
                    sm:text-sm
                    ${
                      isActive
                        ? "border-accent bg-accent text-background"
                        : "border-border bg-surface text-muted hover:border-accent hover:text-accent"
                    }
                  `}
                >
                  {technology}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-muted" aria-live="polite">
          Showing {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
        </p>

        {(selectedTechnology !== "All" || searchQuery !== "") && (
          <button
            type="button"
            onClick={() => {
              setSelectedTechnology("All");
              setSearchQuery("");
            }}
            className="cursor-pointer text-sm font-semibold text-accent hover:opacity-80"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-border bg-surface px-5 py-16 text-center">
          <h3 className="mb-2 text-lg font-bold">No projects found</h3>

          <p className="text-sm text-muted">
            Try searching for something else or changing your selected
            technology.
          </p>
        </div>
      )}
    </div>
  );
}

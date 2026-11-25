import { technologies } from "@/data/technologies";

export default function TechStack() {
  return (
    <section className="site-container py-12 sm:py-16 md:py-20">
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold tracking-[2px] text-accent">
          MY TOOLKIT
        </p>

        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Technologies & Tools
        </h2>

        <p className="max-w-[650px] text-muted">
          Technologies and tools I use to develop applications and bring ideas
          to life.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 sm:gap-4">
        {technologies.map((technology) => {
          const Icon = technology.icon;

          return (
            <div
              key={technology.name}
              className="group flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-4 transition-all hover:-translate-y-1 hover:border-accent sm:px-5 sm:py-5"
            >
              <Icon
                className="size-6 shrink-0 text-muted transition-colors group-hover:text-accent sm:size-7"
                aria-hidden="true"
              />

              <span className="text-sm font-semibold sm:text-base">
                {technology.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

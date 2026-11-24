import { technologies } from "@/data/site";

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
        {technologies.map((technology) => (
          <div
            key={technology}
            className="rounded-lg border border-border bg-surface px-3 py-4 text-center text-sm font-semibold transition-all hover:-translate-y-1 hover:border-accent sm:px-5 sm:py-5 sm:text-base"
          >
            {technology}
          </div>
        ))}
      </div>
    </section>
  );
}

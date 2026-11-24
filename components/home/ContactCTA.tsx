import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="site-container py-12 sm:py-16 md:py-20">
      <div className="rounded-2xl border border-border bg-surface px-5 py-10 text-center sm:px-8 sm:py-14 md:px-12 md:py-16">
        <p className="mb-3 text-xs font-bold tracking-[2px] text-accent">
          HAVE AN OPPORTUNITY?
        </p>

        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Let's Build Something Together.
        </h2>

        <p className="mx-auto mb-8 max-w-[600px] text-sm leading-relaxed text-muted sm:text-base">
          I'm always open to discussing new opportunities, interesting projects,
          and potential collaborations.
        </p>

        <Link
          href="/contact"
          className="button button-primary w-full sm:w-auto"
        >
          Let's Talk
        </Link>
      </div>
    </section>
  );
}

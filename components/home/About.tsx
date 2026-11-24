import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function About() {
  return (
    <section className="site-container py-12 sm:py-16 md:py-20">
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold tracking-[2px] text-accent">
          GET TO KNOW ME
        </p>

        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          About Me
        </h2>
      </div>

      <div className="max-w-[800px]">
        {siteConfig.about.map((paragraph, index) => (
          <p key={index} className="mb-4 text-base leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}

        <Link
          href="/credentials"
          className="mt-5 inline-block font-semibold text-accent hover:opacity-80"
        >
          View My Credentials →
        </Link>
      </div>
    </section>
  );
}

import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="site-container flex min-h-[540px] items-center py-20 sm:min-h-[620px] sm:py-24">
      <div className="max-w-[760px]">
        <p className="mb-4 text-sm font-semibold text-accent sm:text-base">
          Hello, I'm {siteConfig.name}.
        </p>

        <h1 className="mb-6 text-4xl leading-tight font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.title}
          <br />
          <span className="text-accent">Building ideas into reality.</span>
        </h1>

        <p className="mb-8 max-w-[620px] text-base leading-relaxed text-muted sm:text-lg">
          {siteConfig.introduction}
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/projects"
            className="button button-primary w-full sm:w-auto"
          >
            View My Projects
          </Link>

          <Link
            href="/contact"
            className="button button-secondary w-full sm:w-auto"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

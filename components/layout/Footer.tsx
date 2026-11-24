import Link from "next/link";
import CurrentYear from "@/components/layout/CurrentYear";

export default function Footer() {
  return (
    <footer className="border-t border-border py-6">
      <div className="site-container flex flex-col items-center justify-between gap-4 text-center text-sm text-muted sm:flex-row sm:text-left">
        <p>
          © <CurrentYear /> Kent Clark Ogawa. All rights reserved.
        </p>

        <Link href="/contact" className="transition-colors hover:text-accent">
          Get in touch
        </Link>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Credentials", href: "/credentials" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <nav className="site-container relative flex min-h-16 items-center justify-between sm:min-h-19">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-tight sm:text-2xl"
          onClick={() => setIsOpen(false)}
        >
          Kent Clark Ogawa<span className="text-accent">.</span>
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-2xl text-foreground md:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <div
          id="primary-navigation"
          className={`absolute left-0 right-0 top-full flex-col border-b border-border bg-background px-4 pb-4 md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 ${isOpen ? "flex" : "hidden md:flex"}`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setIsOpen(false)}
                className={`border-b border-border py-3 text-sm transition-colors md:border-0 md:py-0
                  ${isActive ? "text-accent" : "text-muted hover:text-accent"}
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}

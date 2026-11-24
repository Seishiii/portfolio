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
    <header className="site-header">
      <nav className="navbar container">
        <Link href="/" className="logo" onClick={() => setIsOpen(false)}>
          Kent Clark Ogawa<span>.</span>
        </Link>

        <button
          className="menu-toggle"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <div
          id="primary-navigation"
          className={`nav-links ${isOpen ? "active" : ""}`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href ? "nav-link active-link" : "nav-link"
              }
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

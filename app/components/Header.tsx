"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 mx-auto flex h-16 w-full max-w-7xl items-center justify-between border-b border-outline-variant/40 bg-surface/90 px-gutter-mobile backdrop-blur-md">
      <Link href="/" className="flex items-center gap-2.5">
        <Image
          src="/logo.jpeg"
          alt="Climax Group Limited logo"
          width={36}
          height={36}
          priority
          className="rounded-lg"
        />
        <span className="text-lg font-bold tracking-tight text-primary">
          Climax Group
        </span>
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm font-semibold text-on-surface-variant transition-colors hover:text-secondary"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Link
          href="/contact"
          className="hidden rounded-lg bg-secondary-container px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-secondary md:block"
        >
          Partner
        </Link>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-outline-variant/20 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6 text-on-surface" /> : <Menu className="h-6 w-6 text-on-surface" />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-surface/95 backdrop-blur-md border-b border-outline-variant/40 md:hidden px-gutter-mobile py-4">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-semibold text-on-surface-variant transition-colors hover:text-secondary"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg bg-secondary-container px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-secondary text-center"
            >
              Partner
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}


import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
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

      <Link
        href="/contact"
        className="rounded-lg bg-secondary-container px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-secondary"
      >
        Partner
      </Link>
    </header>
  );
}


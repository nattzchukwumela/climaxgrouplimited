import Link from "next/link";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/climaxgrouplimited",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/climaxgrouplimited",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@climaxgrouplimited",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
      </svg>
    ),
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant/60 bg-surface-container-low">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-gutter-mobile py-space-xl md:grid-cols-3">
        {/* Brand */}
        <div className="md:col-span-1">
          <h4 className="text-xl font-bold text-primary">Climax Group Limited</h4>
          <p className="mt-1 text-sm text-on-surface-variant">
            An extension of Climax Property Limited
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-on-surface-variant">
            Building lasting real estate partnerships you can trust — from
            land acquisition to full development, right across Nigeria.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-surface-container px-3 py-1 text-sm font-medium text-primary">
            <span className="material-symbols-outlined text-base text-secondary">shield</span>
            <span>CAC Registered — RC Number: [RC Number — to be updated]</span>
          </div>
          <div className="mt-5 flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-on-surface-variant transition-colors hover:text-secondary"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="md:pl-8">
          <h5 className="text-xs font-bold uppercase tracking-wider text-primary">
            Navigation
          </h5>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-on-surface-variant transition-colors hover:text-secondary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 className="text-xs font-bold uppercase tracking-wider text-primary">
            Contact
          </h5>
          <div className="mt-4 space-y-3 text-sm text-on-surface-variant">
            <div>
              <div className="mb-0.5 text-xs font-bold uppercase text-primary">Phone</div>
              <a href="tel:+2349160005562" className="hover:text-secondary">09160005562</a>
              {" / "}
              <a href="tel:+2348054452870" className="hover:text-secondary">08054452870</a>
            </div>
            <div>
              <div className="mb-0.5 text-xs font-bold uppercase text-primary">Address</div>
              <p>DDS Shopping Mall, KM 25 Airport Road, Rukpokwu, Port Harcourt, Rivers State</p>
            </div>
            <div>
              <div className="mb-0.5 text-xs font-bold uppercase text-primary">Website &amp; Email</div>
              <p>
                <a
                  href="https://www.climaxgrouplimited.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary"
                >
                  www.climaxgrouplimited.com
                </a>
              </p>
              <p>
                <a href="mailto:info@climaxgrouplimited.com" className="hover:text-secondary">
                  info@climaxgrouplimited.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 border-t border-outline-variant/40 px-gutter-mobile py-space-md text-center text-sm text-on-surface-variant sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} Climax Group Limited. CAC &amp; SCUML
          Verified Institutional Real Estate Partner. All rights reserved.
        </p>
        <p className="text-xs font-semibold uppercase tracking-wider text-secondary">
          Let&apos;s Build the Future Together.
        </p>
      </div>
    </footer>
  );
}

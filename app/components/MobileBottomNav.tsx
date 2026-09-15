import Link from "next/link";
import { Briefcase, Handshake, Home as HomeIcon, ShieldCheck } from "lucide-react";

const tabs = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/#services", label: "Services", icon: Briefcase },
  { href: "/#protection", label: "Protection", icon: ShieldCheck },
  { href: "/contact", label: "Partner", icon: Handshake },
];

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-outline-variant/50 bg-surface/95 px-gutter-mobile py-2.5 backdrop-blur-md md:hidden">
      {tabs.map((tab) => (
        <Link
          key={tab.label}
          href={tab.href}
          className="flex flex-col items-center justify-center gap-0.5 text-on-surface-variant transition-colors active:scale-95"
        >
          <tab.icon className="h-6 w-6" />
          <span className="text-[11px] font-semibold tracking-wide">{tab.label}</span>
        </Link>
      ))}
    </nav>
  );
}

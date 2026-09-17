"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, Handshake, Home as HomeIcon, ShieldCheck } from "lucide-react";

const defaultTabs = [
  { href: "/", label: "Home", icon: HomeIcon },
  { href: "/#services", label: "Services", icon: Briefcase },
  { href: "/#protection", label: "Protection", icon: ShieldCheck },
  { href: "/contact", label: "Partner", icon: Handshake },
];

const aboutTabs = [
  { href: "/about", label: "Overview", icon: "apartment" },
  { href: "/about#strategic-pillars", label: "Services", icon: "corporate_fare" },
  { href: "/about#institutional-advantages", label: "Protection", icon: "verified_user" },
  { href: "/about#partner-form", label: "Partner", icon: "handshake" },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  const isAboutPage = pathname.startsWith("/about");
  const tabs = isAboutPage ? aboutTabs : defaultTabs;
  
  return (
    <nav className="md:hidden bg-surface/95 dark:bg-primary-container/95 backdrop-blur-md fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-gutter-mobile py-2.5 max-w-7xl mx-auto shadow-[0_-4px_20px_-2px_rgba(11,37,69,0.08)] dark:shadow-none border-t border-outline-variant/60 dark:border-outline/30">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href || (isAboutPage && tab.href === "/about");
        return (
          <Link
            key={tab.label}
            href={tab.href}
            className={`flex flex-col items-center justify-center font-normal hover:text-secondary dark:hover:text-secondary-fixed transition-colors duration-200 active:scale-95 transition-transform duration-150 ${
              isActive 
                ? "text-secondary dark:text-secondary-fixed font-bold" 
                : "text-on-surface-variant dark:text-outline-variant"
            }`}
          >
            {typeof tab.icon === "string" ? (
              <span 
                className="material-symbols-outlined text-2xl" 
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {tab.icon}
              </span>
            ) : (
              <tab.icon className="h-6 w-6" />
            )}
            <span className="text-label-caps font-label-caps mt-1">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

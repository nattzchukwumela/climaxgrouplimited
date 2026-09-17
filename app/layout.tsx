import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileBottomNav from "./components/MobileBottomNav";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Climax Group Limited",
  description:
    "Climax Group Limited is a real estate partnership building trusted, long-term property ventures.",
  icons: {
    icon: [
      { url: "/favicon_io/favicon.ico" },
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon_io/apple-touch-icon.png" },
    ],
    other: [
      { rel: "manifest", url: "/favicon_io/site.webmanifest" },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" />
      </head>
      <body className="flex min-h-full flex-col bg-background text-on-surface pb-16 md:pb-0">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}


import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-zinc-50 dark:border-white/10 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Climax Group Limited
          </p>
          <p className="mt-2 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
            Building lasting real estate partnerships you can trust.
          </p>
        </div>
        <div className="flex gap-6">
          <Link
            href="/"
            className="text-sm text-zinc-600 hover:text-[#1487be] dark:text-zinc-400 dark:hover:text-[#4db3e6]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm text-zinc-600 hover:text-[#1487be] dark:text-zinc-400 dark:hover:text-[#4db3e6]"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm text-zinc-600 hover:text-[#1487be] dark:text-zinc-400 dark:hover:text-[#4db3e6]"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-black/5 py-4 text-center text-xs text-zinc-500 dark:border-white/10 dark:text-zinc-500">
        © {new Date().getFullYear()} Climax Group Limited. All rights reserved.
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

const pillars = [
  {
    title: "Property Partnerships",
    description:
      "We team up with landowners, investors, and developers to structure real estate ventures built on shared trust and shared success.",
  },
  {
    title: "Real Estate Advisory",
    description:
      "Guidance on property investment, development planning, and market opportunities tailored to each partner's goals.",
  },
  {
    title: "Asset Management",
    description:
      "Hands-on oversight of properties and portfolios to protect and grow the value of every partnership we enter.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="bg-[#1487be] text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 py-20 text-center sm:py-28">
          <Image
            src="/logo.jpeg"
            alt="Climax Group Limited logo"
            width={120}
            height={120}
            priority
            className="rounded-2xl shadow-lg"
          />
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Building Trusted Real Estate Partnerships
          </h1>
          <p className="max-w-xl text-lg text-white/90">
            Climax Group Limited partners with investors, landowners, and
            developers to create real estate ventures built to last.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1487be] transition-colors hover:bg-zinc-100"
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            What We Do
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            We are currently building out our project portfolio. Here&apos;s
            where our partnership focus begins.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900"
            >
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black/5 bg-zinc-50 dark:border-white/10 dark:bg-zinc-950">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Interested in Partnering With Us?
          </h2>
          <p className="max-w-xl text-zinc-600 dark:text-zinc-400">
            Reach out to learn more about current and upcoming opportunities
            with Climax Group Limited.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-[#1487be] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#106a99]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

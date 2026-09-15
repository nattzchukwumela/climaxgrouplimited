import Link from "next/link";
import HeroSlideshow from "./components/HeroSlideshow";

const heroImages = [
  "/background-img/1_B528C359.jpeg",
  "/background-img/2_98BFAD4A.jpeg",
  "/background-img/3_393AAD63.jpeg",
  "/background-img/4_F8AA7A4B.jpeg",
  "/background-img/5_C276EF44.jpeg",
  "/background-img/6_A51E40CE.jpeg",
  "/background-img/7_F2EC4DB9.jpeg",
  "/background-img/8_4CFEA32B.jpeg",
  "/background-img/9_1FC374C6.jpeg",
];

const stats = [
  {
    value: "100%",
    label: "CAC & SCUML Verified",
    sub: "Fully Compliant & Regulatory Backed",
  },
  {
    value: "500+",
    label: "Properties Listed / Sold",
    sub: "Verified Residential & Commercial Plots",
  },
  {
    value: "1,000+",
    label: "Happy Clients",
    sub: "Investors & Homeowners Served",
  },
  {
    value: "100%",
    label: "Free Site Inspections",
    sub: "Guided Weekly Tours (Wed & Sat)",
  },
  {
    value: "400+",
    label: "Expert Agents / Realtors",
    sub: "Dedicated Regional Advisory Network",
  },
];

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
      <HeroSlideshow
        images={heroImages}
        eyebrow="Nigeria's Premier Real Estate Partner"
        heading="Building Trusted Real Estate Partnerships"
        subheading="Climax Group Limited partners with investors, landowners, and developers to create real estate ventures built to last."
      >
        <Link
          href="/contact"
          className="rounded-full bg-[#1487be] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#106a99]"
        >
          Start a Partnership →
        </Link>
        <Link
          href="/about"
          className="rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          Explore Our Work
        </Link>
      </HeroSlideshow>

      {/* Stats Banner */}
      <section className="bg-[#0d3a52] text-white">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px px-0 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 px-6 py-8 text-center"
            >
              <span className="text-4xl font-bold tracking-tight text-[#5bc8f5] sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-1 text-sm font-semibold uppercase tracking-wide text-white">
                {stat.label}
              </span>
              <span className="mt-1 text-xs text-white/60">{stat.sub}</span>
            </div>
          ))}
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

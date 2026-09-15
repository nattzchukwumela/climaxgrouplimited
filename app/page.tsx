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

const services = [
  {
    title: "Sale and Acquisition",
    description:
      "We are committed to sharing our comprehensive expertise in the sales and acquisition of real estate properties.",
    image: "/background-img/1_B528C359.jpeg",
  },
  {
    title: "Consultancy",
    description:
      "Our team provides expert advice and strategic planning on property investments, market analysis and development projects, ensuring strategic choices and optimal returns.",
    image: "/background-img/court_1_EF26173A.jpeg",
  },
  {
    title: "Real Estate Investment",
    description:
      "With a proven track record of success, our team has the expertise and experience to help you achieve your real estate investment goal.",
    image: "/background-img/court_2_28FB5B01.jpeg",
  },
  {
    title: "Property Development",
    description:
      "We are a full-service real estate development firm, providing services ranging from site acquisition to construction management.",
    image: "/background-img/court_3_3CC1FE4D.jpeg",
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

      {/* What We Do — Special Services */}
      <section className="bg-zinc-950 text-white">
        {/* Header row */}
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 pt-16 pb-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="sm:max-w-xs">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5bc8f5]">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold uppercase leading-tight tracking-wide text-white sm:text-4xl">
              Our Special Services
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-white/70 sm:pt-10">
            Our real estate services are required nationwide and are known to
            be the best for their quality, authenticity, and accessibility. We
            take pride in what we do.
          </p>
        </div>

        {/* 2×2 service cards */}
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-px px-6 pb-16 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden"
              style={{ minHeight: "280px" }}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/50" />
              {/* Text */}
              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <div className="mb-3 h-px w-8 bg-[#5bc8f5]" />
                <h3 className="text-base font-semibold uppercase tracking-wider text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {service.description}
                </p>
              </div>
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

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
    value: "30+",
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

const projectFeatures = [
  "Residential plots",
  "Residential buildings",
  "Commercial opportunities",
  "Recreational facilities",
  "Supporting infrastructure",
  "Community amenities",
  "Investment opportunities",
];

const locationAdvantages = [
  "Population growth",
  "Urban expansion",
  "Proximity to major roads",
  "Proximity to commercial centers",
  "Proximity to employment hubs",
  "Increasing housing demand",
  "Future infrastructure development",
];

const economicActivities = [
  "Commercial activities",
  "Transportation",
  "Education",
  "Hospitality",
  "Retail",
  "Agriculture",
  "Industrial activities",
  "Government and private-sector investments",
];

const legalDocs = [
  "Certificate of Deposit",
  "Deed of Assignment",
  "Survey Plan",
  "Registered Survey",
  "Governor's Consent, where applicable",
];

const investorProtectionItems = [
  "Ownership interests",
  "Capital contributions",
  "Responsibilities of each party",
  "Profit-sharing formula",
  "Decision-making authority",
  "Development obligations",
  "Exit rights",
  "Dispute-resolution mechanism",
  "Default provisions",
  "Reporting requirements",
];

const contributions = [
  "Land acquisition payments",
  "Due diligence",
  "Survey and documentation",
  "Legal expenses",
  "Negotiations with the landowner",
  "Project planning",
  "Marketing",
  "Sales infrastructure",
  "Customer/off-taker relationships",
  "Administrative and professional costs",
  "Development preparation",
];

const risks = [
  {
    risk: "Title Risk",
    mitigation: "Comprehensive legal and title due diligence.",
  },
  {
    risk: "Market Risk",
    mitigation: "Off-taker network, phased sales and market-driven pricing.",
  },
  {
    risk: "Construction Risk",
    mitigation:
      "Phased development, contractor controls and milestone-based payments.",
  },
  {
    risk: "Cost Escalation",
    mitigation:
      "Detailed budget, contingency provision and procurement controls.",
  },
  {
    risk: "Cash-Flow Risk",
    mitigation: "Phased capital deployment and structured sales collections.",
  },
  {
    risk: "Regulatory Risk",
    mitigation: "Professional legal and regulatory compliance.",
  },
  {
    risk: "Sales Risk",
    mitigation:
      "Multiple sales channels and existing customer relationships.",
  },
  {
    risk: "Governance Risk",
    mitigation:
      "Clearly defined JV agreement, reporting and approval procedures.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* ── Hero ── */}
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

      {/* ── Stats Banner ── */}
      <section className="bg-[#0d3a52] text-white">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-5">
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

      {/* ── Our Special Services ── */}
      <section className="bg-zinc-950 text-white">
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
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-px px-6 pb-16 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden"
              style={{ minHeight: "280px" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              <div className="absolute inset-0 bg-black/60 transition-opacity duration-300 group-hover:bg-black/50" />
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

      {/* ── The Project ── */}
      <section className="bg-white dark:bg-zinc-900">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-0 lg:grid-cols-2">
          {/* Left — image */}
          <div
            className="min-h-[380px] bg-cover bg-center"
            style={{
              backgroundImage: `url('/background-img/3_393AAD63.jpeg')`,
            }}
          />
          {/* Right — content */}
          <div className="flex flex-col justify-center px-8 py-14 lg:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1487be]">
              The Project
            </p>
            <h2 className="mt-3 text-3xl font-bold uppercase leading-tight tracking-wide text-zinc-900 dark:text-white sm:text-4xl">
              What Are We Developing?
            </h2>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
              The project is designed as a planned real estate development
              incorporating:
            </p>
            <ul className="mt-4 space-y-2">
              {projectFeatures.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="h-px w-6 flex-shrink-0 bg-[#1487be]" />
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1487be]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
              The development will be executed in phases to ensure effective
              capital deployment, controlled costs and progressive revenue
              generation.
            </p>
            <div className="mt-6 border-l-4 border-[#1487be] pl-4">
              <p className="text-xs font-bold uppercase tracking-wider text-[#1487be]">
                Project Vision
              </p>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                To create a commercially successful and sustainable real estate
                community that preserves and increases investors&apos; capital
                while delivering long-term value to end users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Site Location & Economic Activities ── */}
      <section
        className="relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('/background-img/5_C276EF44.jpeg')` }}
      >
        <div className="absolute inset-0 bg-[#0d2a3e]/80" />
        <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 py-16 sm:grid-cols-2">
          {/* Site Location */}
          <div className="rounded-2xl bg-white/95 p-8 shadow-xl dark:bg-zinc-900/95">
            <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-wide text-[#0d2a6e] dark:text-white sm:text-3xl">
              Site Location &amp; Location Advantage
            </h2>
            <p className="mt-1 text-xs font-bold uppercase tracking-wider text-zinc-500">
              Location is the first form of value
            </p>
            <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
              <span className="font-semibold text-[#0d2a6e] dark:text-[#5bc8f5]">
                Project Location:
              </span>{" "}
              Port Harcourt, Rivers State
              <br />
              The site&apos;s investment potential is supported by:
            </p>
            <ul className="mt-4 space-y-2">
              {locationAdvantages.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="h-px w-5 flex-shrink-0 bg-[#1487be]" />
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1487be]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Economic Activities */}
          <div className="rounded-2xl bg-white/95 p-8 shadow-xl dark:bg-zinc-900/95">
            <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-wide text-[#0d2a6e] dark:text-white sm:text-3xl">
              Economic Activities Around the Project
            </h2>
            <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
              The surrounding area benefits from:
            </p>
            <ul className="mt-4 space-y-2">
              {economicActivities.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <span className="h-px w-5 flex-shrink-0 bg-[#1487be]" />
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#1487be]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-zinc-600 dark:text-zinc-400">
              The objective is not simply to acquire land — it is to acquire
              land positioned for economic growth.
            </p>
          </div>
        </div>
      </section>

      {/* ── Title & Legal Security + Investor Protection ── */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-0 lg:grid-cols-2">
          {/* Title & Legal Security */}
          <div className="bg-[#0d2a6e] px-8 py-14 lg:px-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
              Investment must begin with secure title
            </p>
            <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-4xl">
              Title &amp; Legal Security
            </h2>
            <p className="mt-5 text-sm text-white/70">
              Land documentation, including:
            </p>
            <ul className="mt-4 space-y-2">
              {legalDocs.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/85">
                  <span className="h-px w-5 flex-shrink-0 bg-yellow-400" />
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-xl bg-red-600 p-6">
              <h3 className="text-xl font-extrabold uppercase tracking-wide text-white">
                Legal Due Diligence
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                Before final investment commitment, the project documentation
                will be subjected to appropriate legal and title verification.
              </p>
            </div>
          </div>

          {/* Investor Protection */}
          <div className="flex flex-col justify-center bg-white px-8 py-14 dark:bg-zinc-900 lg:px-12">
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-wide text-[#0d2a6e] dark:text-white sm:text-4xl">
              Investor Protection
            </h2>
            <p className="mt-5 text-sm text-zinc-600 dark:text-zinc-400">
              The JV structure will clearly define:
            </p>
            <ul className="mt-4 space-y-2">
              {investorProtectionItems.map((item) => (
                <li key={item} className="flex items-center justify-between gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <span>{item}</span>
                  <span className="h-px w-5 flex-shrink-0 bg-red-500" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Our Contribution So Far ── */}
      <section className="bg-white dark:bg-zinc-900">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-0 lg:grid-cols-2">
          {/* Left — dark content panel */}
          <div className="bg-[#0d2a6e] px-8 py-14 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-yellow-400">
              We are not asking an investor to start from zero.
            </p>
            <h2 className="mt-3 text-3xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-4xl">
              Our Contribution So Far
            </h2>
            <p className="mt-5 text-sm text-white/70">
              Climax Group Limited has already committed resources toward the
              project.
            </p>
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-yellow-400">
              Our Contribution
            </p>
            <ul className="mt-3 space-y-2">
              {contributions.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/85">
                  <span className="h-px w-5 flex-shrink-0 bg-yellow-400" />
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-yellow-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm italic text-white/60">
              This demonstrates our skin in the game and alignment with the
              investor.
            </p>
          </div>

          {/* Right — image stack */}
          <div className="grid grid-rows-3">
            {[
              "/background-img/7_F2EC4DB9.jpeg",
              "/background-img/8_4CFEA32B.jpeg",
              "/background-img/9_1FC374C6.jpeg",
            ].map((src, i) => (
              <div
                key={i}
                className="min-h-[180px] bg-cover bg-center"
                style={{ backgroundImage: `url('${src}')` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Risk Management ── */}
      <section className="bg-zinc-950 text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          {/* Header */}
          <div className="mb-10 border-l-4 border-[#1487be] pl-5">
            <h2 className="text-4xl font-extrabold uppercase tracking-wide text-white sm:text-5xl">
              Risk Management
            </h2>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-[#5bc8f5]">
              We do not ignore risk. We manage it.
            </p>
          </div>
          {/* Risk grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {risks.map((r) => (
              <div
                key={r.risk}
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-5"
              >
                <p className="text-sm font-bold uppercase tracking-wide text-white">
                  {r.risk}
                </p>
                <p className="mt-1 text-sm text-white/65">
                  <span className="font-semibold text-[#5bc8f5]">
                    Mitigation:{" "}
                  </span>
                  {r.mitigation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Invitation ── */}
      <section className="bg-[#0d2a6e] text-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Let&apos;s Build Value Together
          </p>
          <h2 className="mt-3 text-4xl font-extrabold uppercase tracking-wide text-white sm:text-5xl">
            The Invitation
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/80">
            Climax Group Limited is seeking a strategic Joint Venture Partner
            that understands the long-term value of real estate and is prepared
            to participate in a professionally structured development
            opportunity.
          </p>
        </div>

        {/* Commitment + Vision cards */}
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-px sm:grid-cols-2">
          <div className="bg-white px-10 py-12 dark:bg-zinc-900">
            <h3 className="text-xl font-extrabold uppercase tracking-wide text-[#0d2a6e] dark:text-white">
              Our Commitment
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              {[
                "Transparency.",
                "Accountability.",
                "Professional execution.",
                "Protection of capital.",
                "Shared value creation.",
              ].map((item) => (
                <li key={item} className="font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white px-10 py-12 dark:bg-zinc-900">
            <h3 className="text-xl font-extrabold uppercase tracking-wide text-[#0d2a6e] dark:text-white">
              Our Vision
            </h3>
            <ul className="mt-5 space-y-2 text-right text-sm text-zinc-700 dark:text-zinc-300">
              {[
                "Acquire strategically.",
                "Develop intelligently.",
                "Sell efficiently.",
                "Create lasting value.",
              ].map((item) => (
                <li key={item} className="font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5 px-6 py-14 text-center">
          <p className="text-lg font-bold uppercase tracking-widest text-yellow-400">
            Let&apos;s Build the Future Together.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-[#1487be] px-8 py-4 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#106a99]"
          >
            Contact Us Today →
          </Link>
        </div>
      </section>
    </div>
  );
}

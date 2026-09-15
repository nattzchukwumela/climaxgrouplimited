import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  Bus,
  CheckCircle2,
  ClipboardList,
  Compass,
  Eye,
  Factory,
  FileText,
  Gavel,
  GraduationCap,
  Handshake,
  Hotel,
  Landmark,
  Map,
  MapPin,
  Ruler,
  ShieldAlert,
  ShieldCheck,
  Store,
  ShoppingCart,
  TrendingUp,
  Users,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import HeroSlideshow from "./components/HeroSlideshow";

const heroImages = [
  "/background-img/1.jpeg",
  "/background-img/2.jpeg",
  "/background-img/3.jpeg",
  "/background-img/4.jpeg",
  "/background-img/5.jpeg",
  "/background-img/6.jpeg",
  "/background-img/7.jpeg",
  "/background-img/8.jpeg",
  "/background-img/9.jpeg",
];

const stats: { icon: LucideIcon; value: string; label: string; sub: string }[] = [
  {
    icon: BadgeCheck,
    value: "100%",
    label: "CAC & SCUML Verified",
    sub: "Fully Compliant & Regulatory Backed",
  },
  {
    icon: Building2,
    value: "500+",
    label: "Properties Sold",
    sub: "Verified Residential & Commercial Plots",
  },
  {
    icon: Users,
    value: "1,000+",
    label: "Happy Clients",
    sub: "Investors & Homeowners Served",
  },
  {
    icon: Compass,
    value: "100%",
    label: "Free Site Visits",
    sub: "Guided Weekly Tours (Wed & Sat)",
  },
  {
    icon: Award,
    value: "30+",
    label: "Expert Agents",
    sub: "Dedicated Regional Advisory Network",
  },
];

const services: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Building2,
    title: "Sale and Acquisition",
    description:
      "We are committed to sharing our comprehensive expertise in the sales and acquisition of real estate properties.",
  },
  {
    icon: TrendingUp,
    title: "Consultancy",
    description:
      "Our team provides expert advice and strategic planning on property investments, market analysis and development projects, ensuring strategic choices and optimal returns.",
  },
  {
    icon: Landmark,
    title: "Real Estate Investment",
    description:
      "With a proven track record of success, our team has the expertise and experience to help you achieve your real estate investment goal.",
  },
  {
    icon: Ruler,
    title: "Property Development",
    description:
      "We are a full-service real estate development firm, providing services ranging from site acquisition to construction management.",
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

const economicActivities: { icon: LucideIcon; label: string }[] = [
  { icon: Store, label: "Commercial activities" },
  { icon: Bus, label: "Transportation" },
  { icon: GraduationCap, label: "Education" },
  { icon: Hotel, label: "Hospitality" },
  { icon: ShoppingCart, label: "Retail" },
  { icon: Wheat, label: "Agriculture" },
  { icon: Factory, label: "Industrial activities" },
  { icon: Landmark, label: "Govt & private investments" },
];

const legalDocs: { icon: LucideIcon; label: string }[] = [
  { icon: FileText, label: "Certificate of Deposit" },
  { icon: ClipboardList, label: "Deed of Assignment" },
  { icon: Map, label: "Survey Plan" },
  { icon: ShieldCheck, label: "Registered Survey" },
  { icon: Gavel, label: "Governor's Consent, where applicable" },
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
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary-container px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-secondary/30 transition-all active:scale-95 hover:bg-secondary sm:w-auto"
        >
          <span>Start a Partnership</span>
          <ArrowRight className="h-[1.125rem] w-[1.125rem]" />
        </Link>
        <Link
          href="/about"
          className="flex w-full items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all active:scale-95 hover:bg-white/20 sm:w-auto"
        >
          Explore Our Work
        </Link>
      </HeroSlideshow>

      {/* ── Key Metrics Trust Bar ── */}
      <section className="relative z-20 -mt-6 mx-auto w-full max-w-7xl px-gutter-mobile">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="col-span-2 flex flex-col justify-between rounded-xl border border-outline-variant/50 bg-surface-container-lowest p-5 shadow-sm first:col-span-2 last:col-span-2 md:col-span-1 md:first:col-span-1 md:last:col-span-1"
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-surface-container text-secondary">
                <stat.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-2xl font-extrabold tracking-tight text-primary sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide text-secondary">
                  {stat.label}
                </div>
                <p className="mt-1 text-sm text-on-surface-variant">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── What We Do / Our Special Services ── */}
      <section className="mx-auto w-full max-w-7xl px-gutter-mobile py-space-2xl" id="services">
        <div className="mb-10 text-left">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-surface-container px-3 py-1 text-xs font-bold uppercase tracking-widest text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            What We Do
          </div>
          <h2 className="mb-4 text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl">
            Our Special Services
          </h2>
          <p className="max-w-2xl text-base text-on-surface-variant">
            Our real estate services are required nationwide and are known to
            be the best for their quality, authenticity, and accessibility. We
            take pride in what we do.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-xl border border-outline-variant/50 bg-surface-container-lowest p-6 shadow-sm transition-colors duration-200 hover:border-secondary/40"
            >
              <div className="absolute left-0 top-6 h-8 w-1.5 rounded-full bg-secondary" />
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-container-low text-secondary">
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold uppercase tracking-wide text-primary">
                    {service.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── The Project ── */}
      <section className="border-y border-outline-variant/40 bg-surface-container-low py-space-2xl" id="project">
        <div className="mx-auto w-full max-w-7xl px-gutter-mobile">
          <div className="mb-8">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-secondary shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              The Project
            </div>
            <h2 className="mb-3 text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl">
              What Are We Developing?
            </h2>
            <p className="text-base text-on-surface-variant">
              The project is designed as a planned real estate development
              incorporating:
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
            {projectFeatures.map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-3 rounded-xl border border-outline-variant/50 bg-surface-container-lowest p-4 ${
                  i === projectFeatures.length - 1 ? "lg:col-span-3" : ""
                }`}
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
                <span className="text-base font-semibold text-primary">{item}</span>
              </div>
            ))}
          </div>

          <div className="mb-6 rounded-xl border border-outline-variant/50 bg-surface-container-high/60 p-4 text-sm text-on-surface-variant">
            The development will be executed in phases to ensure effective
            capital deployment, controlled costs and progressive revenue
            generation.
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-primary-container p-6 text-white shadow-md">
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-secondary/15 blur-2xl" />
            <div className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary-fixed">
              Project Vision
            </div>
            <p className="text-lg font-medium leading-relaxed text-surface-container-lowest">
              To create a commercially successful and sustainable real estate
              community that preserves and increases investors&apos; capital
              while delivering long-term value to end users.
            </p>
          </div>
        </div>
      </section>

      {/* ── Site Location & Economic Activities ── */}
      <section className="mx-auto w-full max-w-7xl px-gutter-mobile py-space-2xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Card 1: Site Location */}
          <div className="flex flex-col justify-between rounded-2xl border border-outline-variant/50 bg-surface-container-lowest p-6 shadow-sm md:p-8">
            <div>
              <div className="mb-1 text-xs font-bold uppercase tracking-wider text-secondary">
                Location is the first form of value
              </div>
              <h3 className="mb-3 text-xl font-extrabold uppercase tracking-wide text-primary sm:text-2xl">
                Site Location &amp; Location Advantage
              </h3>
              <div className="mb-5 inline-flex items-center gap-2 rounded-lg bg-surface-container px-3 py-1.5 text-sm font-semibold text-primary">
                <MapPin className="h-4 w-4 text-secondary" />
                <span>Project Location: Port Harcourt, Rivers State</span>
              </div>
              <p className="mb-4 text-sm text-on-surface-variant">
                The site&apos;s investment potential is supported by:
              </p>
              <ul className="mb-6 space-y-3">
                {locationAdvantages.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-on-surface">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-outline-variant/40 pt-4 text-sm text-on-surface-variant">
              Strategic gateway positioning along high-velocity urban development axes.
            </div>
          </div>

          {/* Card 2: Economic Activities */}
          <div className="flex flex-col justify-between rounded-2xl border border-outline-variant/50 bg-surface-container-lowest p-6 shadow-sm md:p-8">
            <div>
              <div className="mb-1 text-xs font-bold uppercase tracking-wider text-secondary">
                Regional multiplier effect
              </div>
              <h3 className="mb-3 text-xl font-extrabold uppercase tracking-wide text-primary sm:text-2xl">
                Economic Activities Around the Project
              </h3>
              <p className="mb-5 text-sm text-on-surface-variant">
                The surrounding area benefits from:
              </p>
              <div className="mb-6 grid grid-cols-2 gap-3">
                {economicActivities.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 rounded-lg border border-outline-variant/40 bg-surface-container-low p-3"
                  >
                    <item.icon className="h-[1.125rem] w-[1.125rem] text-secondary" />
                    <span className="text-sm text-on-surface">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-secondary/20 bg-surface-container p-4 text-sm font-semibold text-primary">
              The objective is not simply to acquire land — it is to acquire
              land positioned for economic growth.
            </div>
          </div>
        </div>
      </section>

      {/* ── Title & Legal Security + Investor Protection + Our Contribution ── */}
      <section className="border-y border-outline-variant/40 bg-surface-container-low py-space-2xl" id="protection">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-gutter-mobile">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Card 1: Title & Legal Security */}
            <div className="flex flex-col justify-between rounded-2xl border border-outline-variant/50 bg-surface-container-lowest p-6 shadow-sm md:p-8">
              <div>
                <div className="mb-1 text-xs font-bold uppercase tracking-wider text-secondary">
                  Investment must begin with secure title
                </div>
                <h3 className="mb-4 text-xl font-extrabold uppercase tracking-wide text-primary sm:text-2xl">
                  Title &amp; Legal Security
                </h3>
                <p className="mb-4 text-sm text-on-surface-variant">Land documentation, including:</p>
                <ul className="mb-6 space-y-3">
                  {legalDocs.map((item) => (
                    <li key={item.label} className="flex items-center gap-3 text-sm font-medium text-on-surface">
                      <item.icon className="h-[1.125rem] w-[1.125rem] text-secondary" />
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-error/20 bg-error-container/40 p-4">
                <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-error">
                  <ShieldAlert className="h-4 w-4" />
                  <span>Legal Due Diligence</span>
                </div>
                <p className="text-sm text-on-surface-variant">
                  Before final investment commitment, the project documentation
                  will be subjected to appropriate legal and title verification.
                </p>
              </div>
            </div>

            {/* Card 2: Investor Protection */}
            <div className="flex flex-col justify-between rounded-2xl border border-outline-variant/50 bg-surface-container-lowest p-6 shadow-sm md:p-8">
              <div>
                <div className="mb-1 text-xs font-bold uppercase tracking-wider text-secondary">
                  Governance protocols
                </div>
                <h3 className="mb-3 text-xl font-extrabold uppercase tracking-wide text-primary sm:text-2xl">
                  Investor Protection
                </h3>
                <p className="mb-4 text-sm text-on-surface-variant">The JV structure will clearly define:</p>
                <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {investorProtectionItems.map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-lg border border-outline-variant/30 bg-surface-container-low p-2.5 text-sm"
                    >
                      <span>{item}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-surface-container p-4">
                <ShieldCheck className="h-6 w-6 text-secondary" />
                <span className="text-sm font-medium text-primary">
                  Standardized institutional joint-venture legal frameworks.
                </span>
              </div>
            </div>
          </div>

          {/* Card 3: Our Contribution So Far */}
          <div className="rounded-2xl bg-primary-container p-6 text-white shadow-md md:p-8">
            <div className="mb-6 max-w-3xl">
              <div className="mb-1 text-xs font-bold uppercase tracking-wider text-secondary-fixed">
                We are not asking an investor to start from zero.
              </div>
              <h3 className="mb-2 text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
                Our Contribution So Far
              </h3>
              <p className="text-sm text-surface-container-high">
                Climax Group Limited has already committed resources toward the project.
              </p>
            </div>
            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {contributions.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 p-3">
                  <CheckCircle2 className="h-[1.125rem] w-[1.125rem] text-secondary-fixed" />
                  <span className="text-sm text-white">{item}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/15 pt-4 text-sm italic text-secondary-fixed">
              This demonstrates our skin in the game and alignment with the investor.
            </div>
          </div>
        </div>
      </section>

      {/* ── Risk Management ── */}
      <section className="mx-auto w-full max-w-7xl px-gutter-mobile py-space-2xl">
        <div className="mb-8 text-left">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-surface-container px-3 py-1 text-xs font-bold uppercase tracking-widest text-secondary">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Institutional Prudence
          </div>
          <h2 className="mb-2 text-3xl font-extrabold uppercase tracking-tight text-primary sm:text-4xl">
            Risk Management
          </h2>
          <p className="text-lg font-semibold text-on-surface-variant">
            We do not ignore risk. We manage it.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {risks.map((r) => (
            <div
              key={r.risk}
              className="rounded-xl border border-outline-variant/50 bg-surface-container-lowest p-5 shadow-sm transition-colors duration-200 hover:border-secondary/40"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="text-base font-bold text-primary">{r.risk}</span>
                <span className="rounded-full bg-surface-container px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-secondary">
                  Mitigation
                </span>
              </div>
              <p className="text-sm text-on-surface-variant">{r.mitigation}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── The Invitation & Commitment ── */}
      <section className="relative overflow-hidden bg-primary py-space-2xl text-white" id="invitation">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary-container via-primary to-primary opacity-80" />
        <div className="relative z-10 mx-auto max-w-4xl px-gutter-mobile text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5">
            <span className="h-2 w-2 rounded-full bg-secondary-fixed" />
            <span className="text-xs font-bold uppercase tracking-widest text-secondary-fixed">
              Let&apos;s Build Value Together
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-extrabold uppercase tracking-tight text-white sm:text-5xl">
            The Invitation
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-surface-container-high">
            Climax Group Limited is seeking a strategic Joint Venture Partner
            that understands the long-term value of real estate and is prepared
            to participate in a professionally structured development
            opportunity.
          </p>

          <div className="mb-12 grid grid-cols-1 gap-6 text-left md:grid-cols-2">
            {/* Panel 1: Commitment */}
            <div className="rounded-2xl bg-surface-container-lowest p-6 text-primary shadow-xl md:p-8">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold uppercase tracking-wide text-primary">
                <Handshake className="h-6 w-6 text-secondary" />
                <span>Our Commitment</span>
              </h3>
              <ul className="space-y-3">
                {[
                  "Transparency.",
                  "Accountability.",
                  "Professional execution.",
                  "Protection of capital.",
                  "Shared value creation.",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-on-surface">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Panel 2: Vision */}
            <div className="flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-6 text-primary shadow-xl md:p-8">
              <div>
                <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold uppercase tracking-wide text-primary">
                  <Eye className="h-6 w-6 text-secondary" />
                  <span>Our Vision</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    "Acquire strategically.",
                    "Develop intelligently.",
                    "Sell efficiently.",
                    "Create lasting value.",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-on-surface">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 border-t border-outline-variant/30 pt-4 text-sm font-semibold text-secondary">
                Institutional integrity at every lifecycle stage.
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <span className="text-sm font-bold uppercase tracking-widest text-secondary-fixed">
              Let&apos;s Build the Future Together.
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-secondary-container px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-secondary/40 transition-all active:scale-95 hover:bg-secondary"
            >
              <span>Contact Us Today</span>
              <ArrowRight className="h-[1.125rem] w-[1.125rem]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

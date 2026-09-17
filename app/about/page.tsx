import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Climax Group Limited",
  description:
    "Climax Group Limited partners with institutional investors, landowners, and developers across Nigeria to create lasting, high-yield real estate ventures built to endure.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Executive Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-container via-[#0d2f59] to-primary text-on-primary px-gutter-mobile py-space-xl overflow-hidden">
        {/* Background Ambient Glow Accents */}
        <div className="absolute -top-16 -right-16 w-72 h-72 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* Sub-header Kicker Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-lowest/10 backdrop-blur-md border border-white/20 mb-space-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
            <span className="text-label-caps font-label-caps text-secondary-fixed tracking-wider">ABOUT CLIMAX GROUP</span>
          </div>
          
          <h1 className="text-headline-xl-mobile md:text-display-hero font-headline-xl-mobile md:font-display-hero text-white mb-space-md leading-tight">
            Redefining the Luxury Real Estate Experience
          </h1>
          
          <p className="text-body-md font-body-md text-surface-container-highest/90 mb-space-lg max-w-xl">
            Climax Group Limited partners with institutional investors, landowners, and developers across Nigeria to create lasting, high-yield real estate ventures built to endure.
          </p>
          
          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary-container text-on-secondary text-body-md font-semibold shadow-lg shadow-secondary-container/25 hover:bg-secondary transition-all duration-200 active:scale-95" href="#strategic-pillars">
              <span>Explore Our Foundations</span>
              <span className="material-symbols-outlined text-sm">north_east</span>
            </a>
            <a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 backdrop-blur-sm border border-white/20 text-white text-body-md font-medium transition-all duration-200 active:scale-95" href="#institutional-advantages">
              <span>Corporate Protection</span>
              <span className="material-symbols-outlined text-sm">verified_user</span>
            </a>
          </div>
          
          {/* Verification Accreditation Strip */}
          <div className="mt-space-xl pt-space-md border-t border-white/10 w-full flex flex-wrap items-center justify-center gap-4 text-surface-container-highest text-body-sm font-body-sm">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary-fixed-dim text-base">verified</span>
              <span>CAC Accredited Joint-Ventures</span>
            </div>
            <span className="text-white/30 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary-fixed-dim text-base">shield_with_house</span>
              <span>SCUML Anti-Money Laundering Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Key Impact Metrics (Executive Stat Ledger) */}
      <section className="mt-6 max-w-7xl mx-auto px-gutter-mobile -mt-6 relative z-20">
        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-[0_4px_20px_-2px_rgba(11,37,69,0.08)] border border-outline-variant/50 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Stat Item 1 */}
          <div className="p-space-sm rounded-lg bg-surface-container-low/60 border border-outline-variant/30 flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <span className="material-symbols-outlined text-secondary text-xl">apartment</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            </div>
            <div className="text-label-stat-value-mobile md:text-label-stat-value font-label-stat-value-mobile md:font-label-stat-value text-primary-container">
              500+
            </div>
            <div className="text-label-caps font-label-caps text-on-surface-variant uppercase mt-0.5">
              Properties Listed & Sold
            </div>
          </div>
          
          {/* Stat Item 2 */}
          <div className="p-space-sm rounded-lg bg-surface-container-low/60 border border-outline-variant/30 flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <span className="material-symbols-outlined text-secondary text-xl">handshake</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            </div>
            <div className="text-label-stat-value-mobile md:text-label-stat-value font-label-stat-value-mobile md:font-label-stat-value text-primary-container">
              1,000+
            </div>
            <div className="text-label-caps font-label-caps text-on-surface-variant uppercase mt-0.5">
              Protected Homeowners
            </div>
          </div>
          
          {/* Stat Item 3 */}
          <div className="p-space-sm rounded-lg bg-surface-container-low/60 border border-outline-variant/30 flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <span className="material-symbols-outlined text-secondary text-xl">groups</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            </div>
            <div className="text-label-stat-value-mobile md:text-label-stat-value font-label-stat-value-mobile md:font-label-stat-value text-primary-container">
              30+
            </div>
            <div className="text-label-caps font-label-caps text-on-surface-variant uppercase mt-0.5">
              Senior Real Estate Advisors
            </div>
          </div>
          
          {/* Stat Item 4 */}
          <div className="p-space-sm rounded-lg bg-surface-container-low/60 border border-outline-variant/30 flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <span className="material-symbols-outlined text-secondary text-xl">security</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            </div>
            <div className="text-label-stat-value-mobile md:text-label-stat-value font-label-stat-value-mobile md:font-label-stat-value text-primary-container">
              100%
            </div>
            <div className="text-label-caps font-label-caps text-on-surface-variant uppercase mt-0.5">
              Statutory Verification
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Overview / Story */}
      <section className="max-w-7xl mx-auto px-gutter-mobile py-space-xl">
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 shadow-sm p-space-lg md:p-space-xl">
          <div className="flex flex-col md:flex-row gap-space-lg items-center">
            <div className="w-full md:w-1/2 flex flex-col">
              <div className="inline-flex items-center gap-1.5 text-secondary text-label-caps font-label-caps mb-2">
                <span className="material-symbols-outlined text-base">domain</span>
                <span>INSTITUTIONAL EVOLUTION</span>
              </div>
              <h2 className="text-headline-lg font-headline-lg text-primary mb-space-sm">
                Keeping Real Estate Redefined
              </h2>
              <p className="text-body-md font-body-md text-on-surface-variant mb-space-sm">
                Founded on the bedrock principles of innovation, legal transparency, and engineering excellence, <strong className="text-primary font-semibold">Climax Group Limited</strong> has emerged as a vanguard in the regional institutional real estate market. We specialize in identifying high-growth opportunities that offer substantial wealth preservation and capital appreciation.
              </p>
              <p className="text-body-md font-body-md text-on-surface-variant mb-space-md">
                Headquartered in Port Harcourt with expanding corridors across Nigeria, our advisory desk connects private family offices, diaspora investors, and commercial consortiums with titled developments, gated communities, and prime infrastructure.
              </p>
              
              {/* Accolade Pill */}
              <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-secondary-fixed self-start">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">workspace_premium</span>
                </div>
                <div>
                  <div className="text-headline-sm font-headline-sm text-primary">Voted #1 Regional Luxury Agency 2025</div>
                  <div className="text-body-sm font-body-sm text-on-surface-variant">Recognized for fiduciary governance & investor protection</div>
                </div>
              </div>
            </div>
            
            {/* Architectural Concept Image */}
            <div className="w-full md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-outline-variant/40 bg-surface-container aspect-video">
                <img 
                  alt="Climax Corporate Architecture" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXiLgVRxYlIL1vVv8Lm3y2maisu6ikrF2HqT9vnx7fFLOmNk2UAqbnYib36jbmu5I2s2Yi4nYyXYeXiC2cbPyOSlkvcO43YEBNcr6ba3yB6L6CcyPaOuEUtguwxddhxs7QMfJhJ4cs61RSUza-0bsF_bRdporrpj8dtBWCWO48f3x-Lcsn8HpExXg-BPrWF5NQ8GxTqembMVbd_UFKKFH7BW8Mw5KRUlbwPBQ1XKsFsvlhJpatAEno"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-label-caps font-label-caps text-secondary-fixed">EXECUTIVE HEADQUARTERS</div>
                  <div className="text-headline-sm font-headline-sm">Port Harcourt, Rivers State • Nigeria</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars / Vision & Mission Cards */}
      <section className="max-w-7xl mx-auto px-gutter-mobile py-space-lg" id="strategic-pillars">
        <div className="text-center max-w-2xl mx-auto mb-space-lg">
          <span className="text-secondary text-label-caps font-label-caps">GUIDING PRINCIPLES</span>
          <h2 className="text-headline-lg font-headline-lg text-primary mt-1">Our Strategic Foundations</h2>
          <p className="text-body-md font-body-md text-on-surface-variant">Built upon institutional discipline, unwavering governance, and structured long-term value generation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {/* Vision Card */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant/40 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="w-full h-1 bg-secondary absolute top-0 left-0"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 text-secondary flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-2xl">visibility</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-primary mb-2">Our Vision</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                To be the most reliable and innovative real estate partner in the region, setting global standards for luxury, sustainability, and unparalleled client satisfaction in every development we represent.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm border-t border-surface-container-high flex items-center text-label-caps font-label-caps text-secondary">
              <span>BENCHMARK OF EXCELLENCE</span>
            </div>
          </div>
          
          {/* Mission Card */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant/40 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="w-full h-1 bg-secondary-container absolute top-0 left-0"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 text-secondary-container flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-2xl">rocket_launch</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-primary mb-2">Our Mission</h3>
              <p className="text-body-md font-body-md text-on-surface-variant">
                To provide utmost transparency and uncompromising integrity in every transaction, creating seamless real estate experiences through personalised fiduciary service and actionable data-driven insights.
              </p>
            </div>
            <div className="mt-space-md pt-space-sm border-t border-surface-container-high flex items-center text-label-caps font-label-caps text-secondary">
              <span>DATA-BACKED EXECUTION</span>
            </div>
          </div>
          
          {/* Core Values Card */}
          <div className="bg-surface-container-lowest rounded-xl p-space-lg border border-outline-variant/40 shadow-sm relative overflow-hidden flex flex-col justify-between">
            <div className="w-full h-1 bg-primary-container absolute top-0 left-0"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-secondary-fixed/50 text-primary-container flex items-center justify-center mb-space-md">
                <span className="material-symbols-outlined text-2xl">verified</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-primary mb-2">Our Core Values</h3>
              <ul className="space-y-2 text-body-sm font-body-sm text-on-surface-variant">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  <span><strong>Transparency:</strong> Clear statutory deeds and titles.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  <span><strong>Accountability:</strong> Institutional reporting cycles.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  <span><strong>Capital Protection:</strong> Rigid escrow & legal review.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  <span><strong>Shared Prosperity:</strong> High-yield joint venture returns.</span>
                </li>
              </ul>
            </div>
            <div className="mt-space-md pt-space-sm border-t border-surface-container-high flex items-center text-label-caps font-label-caps text-secondary">
              <span>UNCOMPROMISING GOVERNANCE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Advantage / Why Choose Climax Group */}
      <section className="max-w-7xl mx-auto px-gutter-mobile py-space-xl" id="institutional-advantages">
        <div className="bg-surface-container-low rounded-2xl p-space-lg md:p-space-xl border border-outline-variant/40">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-space-lg">
            <div>
              <span className="text-secondary text-label-caps font-label-caps">WHY INSTITUTIONS CHOOSE US</span>
              <h2 className="text-headline-lg font-headline-lg text-primary mt-1">The Institutional Advantage</h2>
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant max-w-md mt-2 md:mt-0">
              How Climax Group eliminates traditional real estate friction and legal ambiguity in Nigerian property acquisition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
            {/* Pillar 1 */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/30 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center mb-3">
                <span className="material-symbols-outlined">policy</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-primary mb-1">Title & Legal Security</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Every parcel in our portfolio undergoes exhaustive Ministry of Lands charting, Gazette verification, and Governor's Consent validation before investor onboarding.
              </p>
            </div>
            
            {/* Pillar 2 */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/30 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center mb-3">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-primary mb-1">Institutional Due Diligence</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Data-backed yield projections and geo-spatial feasibility audits ensure our estates—such as Climax Court and Eastlake Gardens—maintain premium valuation trajectories.
              </p>
            </div>
            
            {/* Pillar 3 */}
            <div className="bg-surface-container-lowest rounded-xl p-space-md border border-outline-variant/30 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-surface-container-high text-secondary flex items-center justify-center mb-3">
                <span className="material-symbols-outlined">location_city</span>
              </div>
              <h3 className="text-headline-sm font-headline-sm text-primary mb-1">Regional Dominance</h3>
              <p className="text-body-sm font-body-sm text-on-surface-variant">
                Strategic landbanking across Port Harcourt's high-velocity corridors (Rukpokwu, Airport Road, Greater Port Harcourt City) with targeted nationwide expansion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Action / Partner Contact Card */}
      <section className="max-w-7xl mx-auto px-gutter-mobile py-space-lg mb-space-lg" id="partner-form">
        <div className="bg-gradient-to-r from-primary-container to-[#103b6e] rounded-2xl p-space-lg md:p-space-xl text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-white/10 text-secondary-fixed text-label-caps font-label-caps inline-block mb-space-sm border border-white/10">
              STRATEGIC COLLABORATION
            </span>
            <h2 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl-mobile md:font-headline-xl text-white mb-2">
              Let's Build the Future Together
            </h2>
            <p className="text-body-md font-body-md text-surface-container-high/90 mb-space-lg">
              Whether you are acquiring luxury residential assets, developing commercial land, or exploring joint ventures, our institutional advisory team is prepared to assist you.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-secondary-container text-white font-semibold text-body-md hover:bg-secondary transition-all duration-200 active:scale-95 shadow-md" href="tel:+2348054452870">
                <span className="material-symbols-outlined text-lg">call</span>
                <span>+234 805 445 2870</span>
              </a>
              <a className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-body-md transition-all duration-200 active:scale-95" href="mailto:info@climaxgrouplimited.com">
                <span className="material-symbols-outlined text-lg">mail</span>
                <span>Send Executive Inquiry</span>
              </a>
            </div>
          </div>
          
          {/* Subdued Background Architectural Badge */}
          <div className="absolute right-4 -bottom-10 opacity-10 pointer-events-none select-none hidden md:block">
            <span className="material-symbols-outlined text-[240px]">apartment</span>
          </div>
        </div>
      </section>
    </div>
  );
}

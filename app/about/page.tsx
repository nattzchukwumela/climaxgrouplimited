import type { Metadata } from "next";
import HeroSlideshow from "../components/HeroSlideshow";

export const metadata: Metadata = {
  title: "About | Climax Group Limited",
  description:
    "Learn about Climax Group Limited, a real estate partnership dedicated to building trusted property ventures.",
};

const heroImages = [
  "/background-img/3.jpeg",
  "/background-img/6.jpeg",
  "/background-img/7.jpeg",
  "/background-img/4.jpeg",
  "/background-img/5.jpeg",
];

const values = [
  {
    title: "Integrity",
    description:
      "Every partnership we enter is built on transparency and honest dealing.",
  },
  {
    title: "Collaboration",
    description:
      "We work closely with our partners at every stage, from planning to delivery.",
  },
  {
    title: "Long-Term Value",
    description:
      "We focus on ventures that create lasting value, not short-term gains.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <HeroSlideshow
        images={heroImages}
        eyebrow="Our Story"
        heading="About Climax Group Limited"
        subheading="A real estate partnership built on trust, collaboration, and shared success."
      />

      <section className="mx-auto w-full max-w-4xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Who We Are
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Climax Group Limited brings together investors, landowners, and
          developers to form real estate partnerships that stand the test of
          time. We are in the early stages of building out our project
          portfolio, and this page will grow alongside our work.
        </p>

        <h2 className="mt-12 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Our Approach
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400">
          Rather than going it alone, we believe the best real estate outcomes
          come from strong partnerships. We combine local market knowledge
          with sound investment principles to structure ventures that work
          for everyone involved.
        </p>
      </section>

      <section className="border-t border-black/5 bg-zinc-50 dark:border-white/10 dark:bg-zinc-950">
        <div className="mx-auto w-full max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Our Values
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroSlideshowProps {
  images: string[];
  eyebrow?: string;
  heading: string;
  subheading?: string;
  children?: React.ReactNode;
  interval?: number; // ms between slides, default 6000
}

export default function HeroSlideshow({
  images,
  eyebrow,
  heading,
  subheading,
  children,
  interval = 6000,
}: HeroSlideshowProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-end justify-center overflow-hidden pb-space-2xl pt-24"
    >
      {/* Background stack — all images always mounted, active one fades in */}
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.4s ease-in-out",
            zIndex: i === current ? 1 : 0,
          }}
        >
          <Image
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Navy readability gradients */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary via-primary/80 to-primary/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex w-full max-w-xl flex-col items-center gap-5 px-gutter-mobile text-center">
        {eyebrow && (
          <div className="mb-1 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-secondary-fixed-dim" />
            <span className="text-xs font-bold uppercase tracking-widest text-white">
              {eyebrow}
            </span>
          </div>
        )}

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl">
          {heading}
        </h1>

        {subheading && (
          <p className="max-w-md text-lg font-normal leading-relaxed text-surface-container-high">
            {subheading}
          </p>
        )}

        {children && (
          <div className="mt-3 flex w-full flex-col items-center justify-center gap-3.5 sm:w-auto sm:flex-row">
            {children}
          </div>
        )}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-2 rounded-full transition-all duration-500"
            style={{
              width: i === current ? "1.5rem" : "0.5rem",
              backgroundColor:
                i === current ? "#0266ff" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>
    </section>
  );
}

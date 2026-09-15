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
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
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

      {/* Dark overlay */}
      <div className="absolute inset-0 z-10 bg-black/55" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center gap-6 px-6 py-28 text-center text-white">
        {eyebrow && (
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#5bc8f5]">
            <span className="h-px w-8 bg-[#5bc8f5]" />
            {eyebrow}
            <span className="h-px w-8 bg-[#5bc8f5]" />
          </p>
        )}

        <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight drop-shadow-lg sm:text-6xl lg:text-7xl">
          {heading}
        </h1>

        {subheading && (
          <p className="max-w-xl text-lg font-light text-white/85 sm:text-xl">
            {subheading}
          </p>
        )}

        {children && (
          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
            {children}
          </div>
        )}
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="h-1.5 rounded-full transition-all duration-500"
            style={{
              width: i === current ? "2rem" : "0.5rem",
              backgroundColor:
                i === current ? "white" : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>
    </section>
  );
}

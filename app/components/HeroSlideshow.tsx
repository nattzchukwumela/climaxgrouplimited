"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface HeroSlideshowProps {
  images: string[];
  eyebrow?: string;
  heading: string;
  subheading?: string;
  children?: React.ReactNode;
  interval?: number; // ms between slides, default 5000
}

export default function HeroSlideshow({
  images,
  eyebrow,
  heading,
  subheading,
  children,
  interval = 5000,
}: HeroSlideshowProps) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setFading(true);
      const next = (current + 1) % images.length;
      setCurrent(next);
      // After the crossfade duration, clear the prev layer
      const clear = setTimeout(() => {
        setPrev(null);
        setFading(false);
      }, 1000);
      return () => clearTimeout(clear);
    }, interval);

    return () => clearInterval(timer);
  }, [current, images.length, interval]);

  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
      {/* Background layers */}
      {images.map((src, i) => {
        const isActive = i === current;
        const isPrev = i === prev && fading;
        if (!isActive && !isPrev) return null;
        return (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: isActive ? 1 : 0, zIndex: isActive ? 1 : 0 }}
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
        );
      })}

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
            onClick={() => {
              setPrev(current);
              setFading(true);
              setCurrent(i);
              setTimeout(() => {
                setPrev(null);
                setFading(false);
              }, 1000);
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

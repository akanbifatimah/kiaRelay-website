"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroIllustration } from "@/components/home/hero-illustration";
import { heroSlides } from "@/lib/content";
import { cn } from "@/lib/utils";

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || paused) return;

    const id = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(id);
  }, [paused]);

  const slide = heroSlides[index];
  const goTo = (next: number) => setIndex((next + heroSlides.length) % heroSlides.length);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      className="lg:min-h-[26rem]"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div key={slide.id} className="animate-[fade-slide_0.4s_ease]">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {slide.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">
            {slide.headline}{" "}
            <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-primary">
              {slide.highlight}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">{slide.description}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={slide.primaryCta.href} variant="primary" size="lg" className="w-full sm:w-auto">
              {slide.primaryCta.label}
            </Button>
            <Button
              href={slide.secondaryCta.href}
              variant="outline"
              size="lg"
              className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto"
            >
              {slide.secondaryCta.label}
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex items-center gap-2" role="tablist" aria-label="Hero slides">
              {heroSlides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show ${s.eyebrow} slide`}
                  onClick={() => goTo(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === index ? "w-8 bg-primary" : "w-2 bg-white/25 hover:bg-white/40"
                  )}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(index - 1)}
                aria-label="Previous slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => goTo(index + 1)}
                aria-label="Next slide"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div key={`${slide.id}-art`} className="animate-[fade-slide_0.4s_ease]">
          <HeroIllustration
            trackingLabel={slide.trackingLabel}
            progress={slide.progress}
            fromIcon={slide.fromIcon}
            toIcon={slide.toIcon}
            badgeIcons={slide.badgeIcons}
          />
        </div>
      </div>
    </div>
  );
}

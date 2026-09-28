"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { HeroIllustration } from "@/components/home/hero-illustration";
import { StoreButtons } from "@/components/store-buttons";
import { heroSlides } from "@/lib/content";
import { cn } from "@/lib/utils";

/** How long each slide stays up before advancing on its own. */
const SLIDE_DURATION_MS = 20_000;

// Auto-advances every 20s (client request, 2026-09-25) on top of the manual
// dots/arrows. Previously it never advanced for visitors with "reduce motion"
// set (Windows' "animation effects: off" is common), and stayed paused after
// any click because focus paused it — both made it look static.
// Now:
// - A timeout keyed on the current slide means any manual navigation restarts
//   the full 20s for the slide the visitor chose.
// - It pauses only while the pointer is over the hero. (A pause/play button
//   was removed at the client's request, 2026-09-25.)
// - Reduced-motion visitors still get the rotation, just without the fade.
export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (hovering) return;
    const id = setTimeout(() => setIndex((current) => (current + 1) % heroSlides.length), SLIDE_DURATION_MS);
    return () => clearTimeout(id);
  }, [index, hovering]);

  const slide = heroSlides[index];
  const goTo = (next: number) => setIndex((next + heroSlides.length) % heroSlides.length);

  return (
    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className="lg:min-h-[26rem]">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div key={slide.id} className="animate-[fade-slide_0.4s_ease] motion-reduce:animate-none">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">{slide.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">
            {slide.headline}{" "}
            <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-primary">{slide.highlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">{slide.description}</p>

          {/* Each slide offers the store downloads for its own download path
              (business, individual or driver — TC-01, 2026-09-28) plus a
              quiet link to read more. */}
          <p className="mt-8 text-sm font-medium text-white/80">{slide.appHint}</p>
          <StoreButtons path={slide.download} className="mt-3 sm:justify-start" />
          <Link
            href={slide.learnMore.href}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            {slide.learnMore.label}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>

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

        <div key={`${slide.id}-art`} className="animate-[fade-slide_0.4s_ease] motion-reduce:animate-none">
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

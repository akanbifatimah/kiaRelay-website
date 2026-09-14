import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface PageHeroCta {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: PageHeroCta;
  secondaryCta?: PageHeroCta;
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-sidebar text-white">
      <div aria-hidden className="bg-grid-texture pointer-events-none absolute inset-0 opacity-10" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sidebar/40 via-sidebar to-sidebar"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl animate-[fade-slide_0.5s_ease]">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
          ) : null}
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">{description}</p>
          ) : null}

          {primaryCta || secondaryCta ? (
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              {primaryCta ? (
                <Button href={primaryCta.href} variant="primary" size="lg" className="w-full sm:w-auto">
                  {primaryCta.label}
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button
                  href={secondaryCta.href}
                  variant="outline"
                  size="lg"
                  className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto"
                >
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}

          {children}
        </div>
      </div>
    </section>
  );
}

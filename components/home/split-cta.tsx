import { splitCtaCards } from "@/lib/content";
import { Button } from "@/components/ui/button";

export function SplitCta() {
  return (
    <section className="relative overflow-hidden bg-sidebar py-20 text-white sm:py-24">
      <div aria-hidden className="bg-grid-texture pointer-events-none absolute inset-0 opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Work with KiaRelay
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {splitCtaCards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-xl bg-white/5 p-8 ring-1 ring-white/10"
            >
              <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                {card.eyebrow}
              </span>
              <h3 className="mt-3 text-2xl font-bold">{card.title}</h3>
              <p className="mt-3 flex-1 text-slate-300">{card.description}</p>
              <Button href={card.href} variant="primary" size="md" className="mt-6 self-start">
                {card.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IndustryCard } from "@/components/industry-card";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Industries we serve
            </h2>
            <p className="mt-3 text-text-muted">
              Specialized handling built around what you actually ship.
            </p>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            View all industries <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <IndustryCard key={industry.slug} {...industry} />
          ))}
        </div>
      </div>
    </section>
  );
}

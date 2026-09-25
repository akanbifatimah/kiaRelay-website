import type { ReactNode } from "react";
import { PageHero } from "@/components/page-hero";

// Shared shell for /privacy and /terms. Copy was drafted 2026-09-25 from the
// PRD and the admin web app's actual behavior.
// TODO: have KiaRelay's counsel review both documents before public launch.
export function LegalPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} description={`Effective ${updated}`} />

      <section className="bg-bg py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose-legal space-y-8 text-text-muted">{children}</div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-text">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}

export function LegalList({ items }: { items: readonly ReactNode[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

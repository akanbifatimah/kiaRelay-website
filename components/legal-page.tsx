import type { ReactNode } from "react";
import { AlertTriangle } from "lucide-react";
import { PageHero } from "@/components/page-hero";

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
      <PageHero eyebrow={eyebrow} title={title} />

      <section className="bg-bg py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 rounded-lg border border-warning/30 bg-warning/10 p-4 text-sm text-text">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning" aria-hidden />
            <p>
              This is a placeholder template pending review by KiaRelay&apos;s legal counsel —
              it is not final legal copy. Last updated {updated}.
            </p>
          </div>

          <div className="prose-legal mt-10 space-y-8 text-text-muted">{children}</div>
        </div>
      </section>
    </>
  );
}

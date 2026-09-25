"use client"; // Error boundaries must be Client Components.

import { useEffect } from "react";
import { RotateCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE, contactChannels } from "@/lib/site-config";

// Branded fallback for unexpected render errors in any page (2026-09-25).
// It renders inside the root layout, so the header and footer stay usable.
// A crash in the root layout itself would need app/global-error.tsx, which
// isn't worth it for a static site with no data fetching in the layout.
export default function Error({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    // TODO: send to an error-reporting service if one is added (e.g. Sentry).
    console.error(error);
  }, [error]);

  return (
    <section className="relative overflow-hidden bg-sidebar text-white">
      <div aria-hidden className="bg-grid-texture pointer-events-none absolute inset-0 opacity-10" />

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Something went wrong</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          We hit a bump in the road.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">
          This page didn&apos;t load properly. Please try again. If it keeps happening, let us know at{" "}
          <a href={`mailto:${contactChannels.support.email}`} className="font-semibold text-primary hover:underline">
            {contactChannels.support.email}
          </a>{" "}
          or{" "}
          <a href={`tel:${PHONE.tel}`} className="font-semibold text-primary hover:underline">
            {PHONE.display}
          </a>
          .
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button type="button" onClick={() => retry()} variant="primary" size="lg" className="w-full sm:w-auto">
            <RotateCw className="h-4 w-4" aria-hidden />
            Try Again
          </Button>
          <Button
            href="/"
            variant="outline"
            size="lg"
            className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto"
          >
            Back to Home
          </Button>
        </div>

        {error.digest ? <p className="mt-8 font-mono text-xs text-slate-500">Reference: {error.digest}</p> : null}
      </div>
    </section>
  );
}

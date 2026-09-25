import Link from "next/link";
import { ArrowRight, Building2, Smartphone, Truck, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { label: "For Business", href: "/business", icon: Building2 },
  { label: "For Individuals", href: "/personal", icon: UserRound },
  { label: "Drive with KiaRelay", href: "/drive", icon: Truck },
  { label: "Get the App", href: "/download", icon: Smartphone },
] as const;

// Branded 404 (2026-09-25). As the root not-found file it handles every
// unmatched URL on the site, plus notFound() calls such as an unknown
// /industries/[slug], and renders inside the normal header and footer.
export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-sidebar text-white">
      <div aria-hidden className="bg-grid-texture pointer-events-none absolute inset-0 opacity-10" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sidebar/40 via-sidebar to-sidebar" />

      <div className="relative mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Error 404</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          This delivery took a wrong turn.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-slate-300">
          We couldn&apos;t find the page you were looking for. It may have moved, or the link may be
          mistyped. Here are some good places to pick up the route.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/" variant="primary" size="lg" className="w-full sm:w-auto">
            Back to Home
          </Button>
          <Button
            href="/contact"
            variant="outline"
            size="lg"
            className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto"
          >
            Contact Us
          </Button>
        </div>

        <nav aria-label="Popular pages" className="mt-12 grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between rounded-lg bg-white/5 px-5 py-4 ring-1 ring-white/10 transition-colors hover:bg-white/10 hover:ring-white/20"
            >
              <span className="flex items-center gap-3 text-sm font-semibold">
                <link.icon className="h-5 w-5 text-primary" aria-hidden />
                {link.label}
              </span>
              <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}

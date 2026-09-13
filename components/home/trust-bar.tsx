import { ShieldCheck, Truck, FileCheck, UserCheck, Radar, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { trustSignals } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  ShieldCheck,
  Truck,
  FileCheck,
  UserCheck,
  Radar,
};

export function TrustBar() {
  return (
    <section className="border-b border-border bg-surface" aria-label="Trust signals">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-5">
          {trustSignals.map((signal, i) => {
            const Icon = icons[signal.icon];
            return (
              <Reveal key={signal.label} delay={i * 60}>
                <li className="flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-text">
                  <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  {signal.label}
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

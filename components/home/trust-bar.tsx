import { ShieldCheck, Truck, FileCheck, UserCheck, Radar, type LucideIcon } from "lucide-react";
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
          {trustSignals.map((signal) => {
            const Icon = icons[signal.icon];
            return (
              <li
                key={signal.label}
                className="flex items-center gap-2 text-sm font-medium text-text-muted"
              >
                <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                {signal.label}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

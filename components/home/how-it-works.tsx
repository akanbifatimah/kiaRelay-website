import { ClipboardList, UsersRound, MapPinned, PackageCheck, type LucideIcon } from "lucide-react";
import { howItWorks } from "@/lib/content";

const icons: Record<string, LucideIcon> = {
  ClipboardList,
  UsersRound,
  MapPinned,
  PackageCheck,
};

export function HowItWorks() {
  return (
    <section className="bg-bg py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            How it works
          </h2>
          <p className="mt-3 text-text-muted">
            One process from request to delivery confirmation — for business
            shipments and personal parcels alike.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li
                key={item.step}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <span className="text-sm font-semibold text-primary">{item.step}</span>
                <Icon className="mt-3 h-8 w-8 text-primary" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{item.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

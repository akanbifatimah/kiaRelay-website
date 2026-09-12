import { Check } from "lucide-react";
import { deliveryTypes } from "@/lib/content";
import { cn } from "@/lib/utils";

export function DeliveryTypes() {
  return (
    <section className="bg-bg py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Delivery types
          </h2>
          <p className="mt-3 text-text-muted">
            Pick the speed that matches the shipment.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {deliveryTypes.map((type) => (
            <div
              key={type.name}
              className={cn(
                "rounded-xl border p-6",
                type.featured ? "border-primary bg-surface shadow-md" : "border-border bg-surface"
              )}
            >
              {type.featured ? (
                <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Priority
                </span>
              ) : null}
              <h3 className="mt-3 text-xl font-bold text-text">{type.name}</h3>
              <p className="mt-2 text-sm text-text-muted">{type.description}</p>
              <ul className="mt-4 space-y-2">
                {type.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-text">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

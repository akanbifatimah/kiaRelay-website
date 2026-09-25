import { Reveal } from "@/components/reveal";
import { serviceAreaStates } from "@/lib/site-config";

export function ServiceArea() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Where we run
            </h2>
            <p className="mt-3 text-text-muted">
              Texas and Louisiana today, with phased expansion across the
              Gulf South as the network grows.
            </p>
          </div>
        </Reveal>

        <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-bg p-6">
            <dt className="text-sm font-semibold uppercase tracking-wide text-primary">
              Primary service area
            </dt>
            <dd className="mt-2 text-lg font-medium text-text">
              {serviceAreaStates.primary.join(" · ")}
            </dd>
          </div>
          <div className="rounded-xl border border-border bg-bg p-6">
            <dt className="text-sm font-semibold uppercase tracking-wide text-text-muted">
              Expanding soon
            </dt>
            <dd className="mt-2 text-lg font-medium text-text-muted">
              {serviceAreaStates.expanding.join(" · ")}
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

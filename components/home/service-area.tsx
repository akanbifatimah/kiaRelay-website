import { PlaceholderPhoto } from "@/components/placeholder-photo";
import { Reveal } from "@/components/reveal";
import { serviceAreaStates } from "@/lib/site-config";

// TODO: swap PlaceholderPhoto for a real service-area map graphic once available.
export function ServiceArea() {
  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Where we run
              </h2>
              <p className="mt-3 max-w-md text-text-muted">
                Texas and Louisiana today, with phased expansion across the
                Gulf South as the network grows.
              </p>
              <dl className="mt-8 space-y-6">
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Primary service area
                  </dt>
                  <dd className="mt-2 text-lg font-medium text-text">
                    {serviceAreaStates.primary.join(" · ")}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold uppercase tracking-wide text-text-muted">
                    Expanding soon
                  </dt>
                  <dd className="mt-2 text-lg font-medium text-text-muted">
                    {serviceAreaStates.expanding.join(" · ")}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal direction="right" delay={100}>
            <PlaceholderPhoto
              seed="kiarelay-service-area"
              alt="Map-style representation of KiaRelay's Texas and Louisiana service area"
              className="aspect-4/3 w-full"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

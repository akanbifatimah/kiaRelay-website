import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { PlaceholderPhoto } from "@/components/placeholder-photo";
import { missionPillars, whyKiaRelay } from "@/lib/content";
import { serviceAreaStates } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "KiaRelay's mission is the safe, fast, and accurate movement of materials and goods across Texas, Louisiana, and neighboring states.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About KiaRelay"
        title="Delivered safely. Delivered fast. On purpose."
        description="KiaRelay exists to move materials and goods with the safety of the contents, the integrity of the packaging, and the accuracy of the delivery treated as non-negotiable — not as trade-offs against speed."
      />

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Our mission
            </h2>
          </div>
          <FeatureGrid items={missionPillars} columns={4} className="mt-12" />
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <PlaceholderPhoto
              seed="kiarelay-about"
              alt="Representative photography of KiaRelay operations"
              className="aspect-4/3 w-full"
            />
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Where we operate
              </h2>
              <p className="mt-4 max-w-md text-text-muted">
                KiaRelay runs across Texas and Louisiana today, with a phased expansion
                planned across the Gulf South as the driver network and infrastructure grow.
              </p>
              <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-bg p-6">
                  <dt className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Primary
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
          </div>
        </div>
      </section>

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Why KiaRelay
            </h2>
          </div>
          <FeatureGrid items={whyKiaRelay} columns={3} className="mt-12" />
        </div>
      </section>
    </>
  );
}

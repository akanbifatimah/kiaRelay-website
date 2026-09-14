import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { missionPillars, whyKiaRelay } from "@/lib/content";
import { serviceAreaStates } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "KiaRelay's mission is the safe, fast, and accurate movement of materials and goods across Texas, Louisiana, and neighboring states.",
  alternates: { canonical: "/about" },
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
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Where we operate
            </h2>
            <p className="mt-4 text-text-muted">
              KiaRelay runs across Texas and Louisiana today, with a phased expansion
              planned across the Gulf South as the driver network and infrastructure grow.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
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
      </section>

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              How we work
            </h2>
          </div>
          <div className="mt-8 space-y-6 text-text-muted">
            <p>
              Every delivery starts with a request — business or personal, one-time or
              scheduled. That request is matched to a driver who has already been
              background-checked, and who carries the TWIC or HazMat endorsements a
              regulated shipment needs before it&apos;s ever offered to them.
            </p>
            <p>
              From pickup, the shipment is trackable in real time over a shareable link, so
              there&apos;s no guessing where it is or when it&apos;ll arrive. Delivery is confirmed with
              a photo and signature — proof that closes the loop on every single run.
            </p>
            <p>
              Dispatch is technology-driven rather than ad hoc: drivers are matched based on
              location, vehicle type, and any compliance requirements the shipment carries, so
              the right driver shows up for the right job.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
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

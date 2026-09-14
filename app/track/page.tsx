import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { TrackingLookup } from "@/components/track/tracking-lookup";
import { Faq } from "@/components/faq";
import { trackFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Track a Shipment",
  description: "Enter a tracking number to follow your shipment from pickup to delivery.",
};

export default function TrackPage() {
  return (
    <>
      <PageHero
        eyebrow="Track a Shipment"
        title="Follow it from pickup to drop-off."
        description="Enter a tracking number below to see live status — from order placed to delivered."
      />

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <TrackingLookup />
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              FAQ
            </h2>
          </div>
          <div className="mt-10">
            <Faq items={trackFaqs} className="bg-bg" />
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { PlaceholderPhoto } from "@/components/placeholder-photo";
import { ContactChannelCard } from "@/components/contact-channel-card";
import { personalFeatures } from "@/lib/content";
import { contactChannels } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "For Individuals",
  description:
    "Book a delivery, get a transparent price, and track it in real time with a shareable link — photo and signature confirmation on every drop-off.",
};

export default function PersonalPage() {
  return (
    <>
      <PageHero
        eyebrow="For Individuals"
        title="Send a package without the runaround."
        description="Book a delivery in minutes, see the price up front, and track it in real time — from your door to theirs."
        primaryCta={{ label: "Get Early Access", href: "#waitlist" }}
        secondaryCta={{ label: "Track a Package", href: "/track" }}
      />

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              How it works
            </h2>
            <p className="mt-3 text-text-muted">
              No account required to get a price. No surprises at drop-off.
            </p>
          </div>
          <FeatureGrid items={personalFeatures} columns={4} className="mt-12" />
        </div>
      </section>

      <section className="bg-surface py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PlaceholderPhoto
            seed="kiarelay-personal"
            alt="Representative photography of a KiaRelay personal delivery"
            className="aspect-21/9 w-full"
          />
        </div>
      </section>

      <section id="waitlist" className="scroll-mt-16 bg-surface pb-20 sm:pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Web booking is on the way
            </h2>
            <p className="mt-3 text-text-muted">
              Individual booking isn&apos;t live yet. Email us and we&apos;ll let you know the
              moment you can book a delivery in your area.
            </p>
          </div>
          <div className="mt-10">
            <ContactChannelCard {...contactChannels.individual} />
          </div>
        </div>
      </section>
    </>
  );
}

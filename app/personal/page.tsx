import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { ContactChannelCard } from "@/components/contact-channel-card";
import { StoreButtons } from "@/components/store-buttons";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { personalFeatures, personalFaqs } from "@/lib/content";
import { contactChannels } from "@/lib/site-config";
import { pageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "For Individuals",
  description:
    "Book a delivery in the KiaRelay app — the full price before you book, live tracking, and photo proof at drop-off.",
  path: "/personal",
});

export default function PersonalPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(personalFaqs)} />
      <PageHero
        eyebrow="For Individuals"
        title="Send a package without the runaround."
        description="Book a delivery in the KiaRelay app, see the full price up front, and track it live — from your door to theirs."
        primaryCta={{ label: "Get the App", href: "#get-started" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">How it works</h2>
            <p className="mt-3 text-text-muted">
              No hidden fees — the price you see before booking is the price you pay.
            </p>
          </div>
          <FeatureGrid items={personalFeatures} columns={4} className="mt-12" />
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">FAQ</h2>
          <div className="mt-10">
            <Faq items={personalFaqs} className="bg-bg" />
          </div>
        </div>
      </section>

      <section id="get-started" className="scroll-mt-16 bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">Get started</h2>
          <p className="mt-3 text-text-muted">
            Download the KiaRelay app and choose a <strong className="text-text">Personal</strong> account when you
            sign up. Then book your first delivery.
          </p>
          <StoreButtons app="customer" tone="light" className="mt-8 sm:justify-start" />
          <div className="mt-10">
            <ContactChannelCard {...contactChannels.individual} />
          </div>
        </div>
      </section>
    </>
  );
}

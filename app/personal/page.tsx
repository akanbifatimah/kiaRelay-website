import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { personalFeatures, personalFaqs } from "@/lib/content";
import { contactChannels } from "@/lib/site-config";
import { pageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "For Individuals",
  description:
    "Book a delivery, get a transparent price, and track it in real time with a shareable link — photo and signature confirmation on every drop-off.",
  path: "/personal",
});

export default function PersonalPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(personalFaqs)} />
      <PageHero
        eyebrow="For Individuals"
        title="Send a package without the runaround."
        description="Book a delivery in minutes, see the price up front, and track it in real time — from your door to theirs."
        primaryCta={{ label: "Get Early Access", href: `mailto:${contactChannels.individual.email}` }}
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

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              FAQ
            </h2>
          </div>
          <div className="mt-10">
            <Faq items={personalFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}

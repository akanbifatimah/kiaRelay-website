import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { PlaceholderPhoto } from "@/components/placeholder-photo";
import { ContactChannelCard } from "@/components/contact-channel-card";
import { businessFeatures, industries, businessVolumeOptions } from "@/lib/content";
import { contactChannels } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "For Business",
  description:
    "Company accounts with invoiced billing, multi-branch access, spend reporting, and industry-specific handling — built for procurement and operations teams.",
  alternates: { canonical: "/business" },
};

export default function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="For Business"
        title="Delivery logistics built for how procurement actually works."
        description="Company accounts with invoiced billing, multi-branch access, spend reporting, and industry-specific handling — for refineries, construction, healthcare, and commercial shippers across Texas and Louisiana."
        primaryCta={{ label: "Request a Quote", href: "#quote" }}
        secondaryCta={{ label: "See Industries We Serve", href: "/industries" }}
      />

      <section className="bg-bg py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PlaceholderPhoto
            seed="kiarelay-business"
            alt="Representative photography of KiaRelay business shipments"
            className="aspect-21/9 w-full"
          />
        </div>
      </section>

      <section className="bg-bg pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              What a company account gets you
            </h2>
            <p className="mt-3 text-text-muted">
              Everything a procurement or operations reader needs to evaluate KiaRelay as a
              shipping partner.
            </p>
          </div>
          <FeatureGrid items={businessFeatures} columns={3} className="mt-12" />
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                Handling matched to your industry
              </h2>
              <p className="mt-3 text-text-muted">
                Hazmat awareness, cold-chain handling, and dimensional freight pricing — not a
                one-size-fits-all rate.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex items-center justify-between rounded-lg border border-border bg-bg px-5 py-4 transition-colors hover:border-primary"
              >
                <span className="text-sm font-semibold text-text">{industry.name}</span>
                <ArrowRight
                  className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="scroll-mt-16 bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Request a Quote
            </h2>
            <p className="mt-3 text-text-muted">
              Email or call our sales team with your company name, industry, and estimated
              monthly volume — a specialist will follow up with a custom rate. Exact rates and
              surcharges are set per account.
            </p>
            <p className="mt-4 text-sm font-medium text-text">
              Estimated monthly volume ranges we quote against:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-text-muted">
              {businessVolumeOptions.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <ContactChannelCard {...contactChannels.business} />
          </div>
        </div>
      </section>
    </>
  );
}

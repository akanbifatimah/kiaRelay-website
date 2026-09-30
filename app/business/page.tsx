import Link from "next/link";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { ContactChannelCard } from "@/components/contact-channel-card";
import { StoreButtons } from "@/components/store-buttons";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { businessFeatures, industries, businessFaqs, specializedServices, companyVerificationItems } from "@/lib/content";
import { BUSINESS_BRAND, contactChannels, webAppLogin } from "@/lib/site-config";
import { pageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: BUSINESS_BRAND,
  description:
    "Company accounts with invoiced Net 30 billing, multi-branch access, spend reporting, and industry-specific handling — built for procurement and operations teams.",
  path: "/business",
});

export default function BusinessPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(businessFaqs)} />
      <PageHero
        eyebrow={BUSINESS_BRAND}
        title="Delivery logistics built for how procurement actually works."
        description="Company accounts with invoiced billing, multi-branch access, spend reporting, and industry-specific handling — for refineries, construction, healthcare, and commercial shippers across Texas and Louisiana."
        primaryCta={{ label: "Talk to Sales", href: "#contact-sales" }}
        secondaryCta={{ label: "See Industries We Serve", href: "/industries" }}
      />

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              What a company account gets you
            </h2>
            <p className="mt-3 text-text-muted">
              Billing, access, and reporting designed around procurement and operations teams.
            </p>
          </div>
          <FeatureGrid items={businessFeatures} columns={3} className="mt-12" />
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Specialized services
            </h2>
            <p className="mt-3 text-text-muted">
              Add what your load needs when you book — every charge is shown before you confirm.
            </p>
          </div>
          <FeatureGrid items={specializedServices} columns={3} className="mt-12" />
        </div>
      </section>

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Handling matched to your industry
            </h2>
            <p className="mt-3 text-text-muted">
              Hazmat awareness, chain-of-custody handling, and dimensional freight pricing — not a
              one-size-fits-all rate.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group flex items-center justify-between rounded-lg border border-border bg-surface px-5 py-4 transition-colors hover:border-primary"
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

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">FAQ</h2>
          <div className="mt-10">
            <Faq items={businessFaqs} className="bg-bg" />
          </div>
        </div>
      </section>

      <section id="contact-sales" className="scroll-mt-16 bg-bg py-20 sm:py-24">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Open a company account
            </h2>
            <p className="mt-3 text-text-muted">
              Download the KiaRelay app and choose <strong className="text-text">{BUSINESS_BRAND}</strong> when
              you sign up, or register on the web. Company accounts are verified before activation, so have
              these ready. Our sales team can also set up your account and walk your team through booking.
            </p>
            <ul className="mt-6 space-y-3">
              {companyVerificationItems.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text">
                  <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <StoreButtons path="business" className="mt-8 sm:justify-start" />
            <a href={webAppLogin.href} className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
              Register or sign in to {BUSINESS_BRAND} on the web
            </a>
          </div>
          <div className="self-start">
            <ContactChannelCard {...contactChannels.business} />
          </div>
        </div>
      </section>
    </>
  );
}

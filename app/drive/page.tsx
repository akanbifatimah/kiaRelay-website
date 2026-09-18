import { Wallet } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactChannelCard } from "@/components/contact-channel-card";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { driverEarnings, driverRequirements, driverApplicationSteps, driverFaqs } from "@/lib/content";
import { contactChannels } from "@/lib/site-config";
import { pageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Drive with KiaRelay",
  description:
    "Earn on your schedule with a wallet credited immediately after every delivery. Apply to drive across Texas and Louisiana.",
  path: "/drive",
});

export default function DrivePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(driverFaqs)} />
      <PageHero
        eyebrow="Drive with KiaRelay"
        title="Deliver on your schedule. Get paid on yours."
        description="Your wallet is credited immediately after every delivery — cash out end of day, weekly, bi-weekly, or on demand."
        primaryCta={{ label: "Apply to Drive", href: "#apply" }}
        secondaryCta={{ label: "See Requirements", href: "#requirements" }}
      />

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Get paid your way
            </h2>
            <p className="mt-3 text-text-muted">
              Every delivery credits your wallet immediately. Choose how you want to cash out.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {driverEarnings.map((option) => (
              <div key={option.label} className="rounded-xl border border-border bg-surface p-6">
                <Wallet className="h-8 w-8 text-primary" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold text-text">{option.label}</h3>
                <p className="mt-2 text-sm text-text-muted">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="requirements" className="scroll-mt-16 bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              What you need to drive
            </h2>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {driverRequirements.map((requirement) => (
              <li
                key={requirement.label}
                className="flex items-center gap-3 rounded-lg border border-border bg-bg px-5 py-4"
              >
                <requirement.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span className="text-sm font-medium text-text">{requirement.label}</span>
              </li>
            ))}
          </ul>
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
            <Faq items={driverFaqs} />
          </div>
        </div>
      </section>

      <section id="apply" className="scroll-mt-16 bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Apply to Drive
            </h2>
            <p className="mt-3 text-text-muted">
              Email our driver recruiting team with the details below — we&apos;ll follow up on
              next steps, including background check consent.
            </p>
          </div>

          <ol className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {driverApplicationSteps.map((step) => (
              <li key={step.step} className="rounded-lg border border-border bg-surface p-4">
                <span className="text-xs font-semibold text-primary">{step.step}</span>
                <p className="mt-1 text-sm font-semibold text-text">{step.title}</p>
                <p className="mt-1 text-xs text-text-muted">{step.description}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <ContactChannelCard {...contactChannels.drivers} />
          </div>
        </div>
      </section>
    </>
  );
}

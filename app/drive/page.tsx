import { CircleCheckBig, Truck, Wallet } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { ContactChannelCard } from "@/components/contact-channel-card";
import { StoreButtons } from "@/components/store-buttons";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import {
  driverEarnings,
  driverPayoutNotes,
  driverRequirements,
  driverVehicleTypes,
  driverApplicationSteps,
  driverFaqs,
} from "@/lib/content";
import { contactChannels } from "@/lib/site-config";
import { pageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Drive with KiaRelay",
  description:
    "Earn on your schedule with a wallet credited immediately after every delivery. Drive a cargo van, Sprinter, or box truck across Texas and Louisiana.",
  path: "/drive",
});

// Driver sign-up happens entirely in the KiaRelay driver app (no web
// application form — client decision, 2026-09-25). Payout options and
// requirements mirror the admin web app's payout settings and the driver
// compliance documents it reviews.
export default function DrivePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(driverFaqs)} />
      <PageHero
        eyebrow="Drive with KiaRelay"
        title="Deliver on your schedule. Get paid on yours."
        description="Your wallet is credited the moment each delivery is completed — then get paid End of Day, First of Week, Bi-weekly, or cash out instantly."
        primaryCta={{ label: "Get the Driver App", href: "#get-started" }}
        secondaryCta={{ label: "See Requirements", href: "#requirements" }}
      />

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">Get paid your way</h2>
            <p className="mt-3 text-text-muted">Choose the payout cycle that suits you in the driver app.</p>
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
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {driverPayoutNotes.map((note) => (
              <li key={note} className="flex items-start gap-2 text-sm text-text-muted">
                <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="requirements" className="scroll-mt-16 bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">What you need to drive</h2>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {driverRequirements.map((requirement) => (
              <li key={requirement.label} className="flex items-center gap-3 rounded-lg border border-border bg-bg px-5 py-4">
                <requirement.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                <span className="text-sm font-medium text-text">{requirement.label}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-text-muted">
            <Truck className="h-5 w-5 text-primary" aria-hidden />
            <span className="font-medium text-text">Eligible vehicles:</span>
            {driverVehicleTypes.map((vehicle) => (
              <span key={vehicle} className="rounded-full border border-border bg-bg px-3 py-1">
                {vehicle}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">FAQ</h2>
          <div className="mt-10">
            <Faq items={driverFaqs} />
          </div>
        </div>
      </section>

      <section id="get-started" className="scroll-mt-16 bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">Sign up in the KiaRelay Driver app</h2>
          <p className="mt-3 text-text-muted">
            Drivers use their own app — download KiaRelay Driver (not the customer app) and
            complete these four steps. Most of it takes a few minutes.
          </p>

          <ol className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {driverApplicationSteps.map((step) => (
              <li key={step.step} className="rounded-lg border border-border bg-bg p-4">
                <span className="text-xs font-semibold text-primary">{step.step}</span>
                <p className="mt-1 text-sm font-semibold text-text">{step.title}</p>
                <p className="mt-1 text-xs text-text-muted">{step.description}</p>
              </li>
            ))}
          </ol>

          <StoreButtons app="driver" tone="light" className="mt-10 sm:justify-start" />

          <div className="mt-10">
            <ContactChannelCard {...contactChannels.drivers} />
          </div>
        </div>
      </section>
    </>
  );
}

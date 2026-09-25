import { Building2, CircleCheckBig, Truck, UserRound, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { StoreButtons } from "@/components/store-buttons";
import { APPS, type AppKey } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Get the App",
  description:
    "Download the KiaRelay app to book and track deliveries for yourself or your business, or the KiaRelay Driver app to drive and get paid.",
  path: "/download",
});

interface AppCard {
  id: AppKey;
  eyebrow: string;
  title: string;
  description: string;
  accountTypes?: { icon: LucideIcon; label: string; detail: string }[];
  features: string[];
}

// Two apps (2026-09-25): the customer app serves individuals and companies
// through two interfaces chosen at sign-up; drivers have their own app.
const appCards: AppCard[] = [
  {
    id: "customer",
    eyebrow: "For customers",
    title: `The ${APPS.customer.name} app`,
    description: "One app for sending deliveries. When you sign up, choose the account that fits you:",
    accountTypes: [
      { icon: UserRound, label: "Personal", detail: "For individuals sending parcels and personal items." },
      { icon: Building2, label: "Business", detail: "For companies, with multiple users, branches, and invoiced billing." },
    ],
    features: ["See the full price before you book", "Track every delivery live", "Photo proof at drop-off"],
  },
  {
    id: "driver",
    eyebrow: "For drivers",
    title: `The ${APPS.driver.name} app`,
    description: "Sign up to drive, accept delivery jobs, and manage your earnings.",
    features: ["Complete onboarding and upload documents", "Accept jobs and navigate to each stop", "Wallet credited after every delivery"],
  },
];

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Get the App"
        title="Two apps. Pick the one that's for you."
        description="Sending a delivery for yourself or your business? Get the KiaRelay app. Driving with us? Get the KiaRelay Driver app."
        primaryCta={{ label: "I'm Sending a Delivery", href: "#customer" }}
        secondaryCta={{ label: "I'm a Driver", href: "#driver" }}
      />

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {appCards.map((card) => {
            const Icon = card.id === "driver" ? Truck : UserRound;
            return (
              <article id={card.id} key={card.id} className="flex scroll-mt-24 flex-col rounded-2xl border border-border bg-surface p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary">{card.eyebrow}</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-text">{card.title}</h2>
                <p className="mt-3 text-text-muted">{card.description}</p>

                {card.accountTypes && (
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {card.accountTypes.map((type) => (
                      <div key={type.label} className="rounded-lg border border-border bg-bg p-4">
                        <p className="flex items-center gap-2 text-sm font-semibold text-text">
                          <type.icon className="h-4 w-4 text-primary" aria-hidden />
                          {type.label} account
                        </p>
                        <p className="mt-1 text-xs text-text-muted">{type.detail}</p>
                      </div>
                    ))}
                  </div>
                )}

                <ul className="mt-6 flex-1 space-y-2">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-text">
                      <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>

                <StoreButtons app={card.id} tone="light" className="mt-8 sm:justify-start" />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

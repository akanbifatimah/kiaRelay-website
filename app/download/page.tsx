import { Building2, CircleCheckBig, Truck, UserRound, type LucideIcon } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { StoreButtons } from "@/components/store-buttons";
import { BUSINESS_BRAND, DOWNLOAD_PATHS, loginMenu, type DownloadPathKey } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Get the App",
  description: `Download KiaRelay for your business (${BUSINESS_BRAND}), for yourself, or the KiaRelay Driver app to drive and get paid.`,
  path: "/download",
});

interface DownloadCard {
  id: DownloadPathKey;
  icon: LucideIcon;
  eyebrow: string;
  description: string;
  features: string[];
  /** Optional extra link under the badges, e.g. the business web sign-in. */
  extraLink?: { label: string; href: string };
}

// Separate, clearly labelled download paths (TC-01, 2026-09-28). Business
// and Individual use the same KiaRelay app listing, so each card says which
// account to choose at sign-up; drivers have their own app.
const cards: DownloadCard[] = [
  {
    id: "business",
    icon: Building2,
    eyebrow: "For companies",
    description: "Company accounts with multiple users, branches, invoiced billing, and spend reporting.",
    features: ["Invoiced billing on approved terms", "Team members and branches under one account", "Track every company delivery live"],
    extraLink: { label: `Prefer the web? Sign in or register for ${BUSINESS_BRAND}`, href: loginMenu.items[0].href },
  },
  {
    id: "individual",
    icon: UserRound,
    eyebrow: "For individuals",
    description: "Send parcels and personal items door to door.",
    features: ["See the full price before you book", "Track your delivery live", "Photo proof at drop-off"],
  },
  {
    id: "driver",
    icon: Truck,
    eyebrow: "For drivers",
    description: "Sign up to drive, accept delivery jobs, and manage your earnings.",
    features: ["Complete onboarding and upload documents", "Accept jobs and navigate to each stop", "Wallet credited after every delivery"],
  },
];

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Get the App"
        title="Pick the download that's for you."
        description={`Shipping for a company? Get ${BUSINESS_BRAND}. Sending for yourself? Get KiaRelay for Individuals. Driving with us? Get the KiaRelay Driver app.`}
        primaryCta={{ label: `${BUSINESS_BRAND}`, href: "#business" }}
        secondaryCta={{ label: "For Individuals", href: "#individual" }}
      />

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {cards.map((card) => {
            const path = DOWNLOAD_PATHS[card.id];
            return (
              <article id={card.id} key={card.id} className="flex scroll-mt-24 flex-col rounded-2xl border border-border bg-surface p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <card.icon className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary">{card.eyebrow}</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-text">{path.label}</h2>
                <p className="mt-3 text-text-muted">{card.description}</p>

                {path.signUpChoice && (
                  <p className="mt-4 rounded-lg border border-border bg-bg p-3 text-sm text-text">
                    Download the KiaRelay app and choose <strong>{path.signUpChoice}</strong> when you sign up.
                  </p>
                )}

                <ul className="mt-6 flex-1 space-y-2">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-text">
                      <CircleCheckBig className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>

                <StoreButtons path={card.id} className="mt-8 justify-start" />
                {card.extraLink && (
                  <a href={card.extraLink.href} className="mt-4 text-sm font-medium text-primary hover:underline">
                    {card.extraLink.label}
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}

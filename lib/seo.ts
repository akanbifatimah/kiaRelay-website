import type { Metadata } from "next";
import { SITE_URL, contactChannels, serviceAreaStates } from "./site-config";

const SITE_NAME = "KiaRelay";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
}

// Next's `title.template` (set in the root layout) only rewrites the <title>
// tag — openGraph.title/twitter.title need the full string explicitly, or
// every page's social preview falls back to the layout's homepage copy.
export function pageMetadata({ title, description, path }: PageMetadataInput): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: fullTitle, description, url: path },
    twitter: { title: fullTitle, description },
  };
}

interface FaqItem {
  question: string;
  answer: string;
}

export function faqJsonLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbJsonLd(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

// TODO: contact details below (email/phone) are the placeholders in
// contactChannels — update once real business info is confirmed.
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/android-chrome-512x512.png`,
    description:
      "KiaRelay is a specialized delivery logistics platform moving materials and goods safely and fast across Texas, Louisiana, and neighboring states — for refineries, construction, healthcare, and general commercial shippers.",
    areaServed: [...serviceAreaStates.primary, ...serviceAreaStates.expanding].map((state) => ({
      "@type": "State",
      name: state,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: contactChannels.business.email,
        telephone: contactChannels.business.phone,
        areaServed: "US",
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: contactChannels.support.email,
        telephone: contactChannels.support.phone,
        areaServed: "US",
      },
    ],
  };
}

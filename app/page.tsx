import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { HowItWorks } from "@/components/home/how-it-works";
import { Industries } from "@/components/home/industries";
import { DeliveryTypes } from "@/components/home/delivery-types";
import { ServiceArea } from "@/components/home/service-area";
import { FaqSection } from "@/components/home/faq-section";
import { SplitCta } from "@/components/home/split-cta";
import { JsonLd } from "@/components/json-ld";
import { homeFaqs } from "@/lib/content";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Industries />
      <DeliveryTypes />
      <ServiceArea />
      <FaqSection />
      <SplitCta />
    </>
  );
}

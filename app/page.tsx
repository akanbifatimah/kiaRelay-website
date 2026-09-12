import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { HowItWorks } from "@/components/home/how-it-works";
import { Industries } from "@/components/home/industries";
import { DeliveryTypes } from "@/components/home/delivery-types";
import { ServiceArea } from "@/components/home/service-area";
import { SplitCta } from "@/components/home/split-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Industries />
      <DeliveryTypes />
      <ServiceArea />
      <SplitCta />
    </>
  );
}

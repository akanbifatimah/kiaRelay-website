import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { IndustryCard } from "@/components/industry-card";
import { industries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Specialized handling for refineries and oil/gas, construction, healthcare, and general commercial shippers across Texas and Louisiana.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Specialized handling for what you actually ship."
        description="Every industry moves different materials with different risks. KiaRelay handling, pricing, and driver training are matched to each one."
      />

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <IndustryCard key={industry.slug} {...industry} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

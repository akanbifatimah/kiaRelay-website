import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Faq } from "@/components/faq";
import { homeFaqs, businessFaqs, personalFaqs, driverFaqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about shipping, business accounts, and driving with KiaRelay.",
  alternates: { canonical: "/faq" },
};

const faqGroups = [
  { heading: "General", items: homeFaqs },
  { heading: "For Business", items: businessFaqs },
  { heading: "For Individuals", items: personalFaqs },
  { heading: "For Drivers", items: driverFaqs },
] as const;

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions."
        description="Answers to what we hear most from business shippers, individual senders, and drivers."
      />

      {faqGroups.map((group, index) => (
        <section
          key={group.heading}
          className={`${index % 2 === 0 ? "bg-bg" : "bg-surface"} py-20 sm:py-24`}
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
                {group.heading}
              </h2>
            </div>
            <div className="mt-10">
              <Faq items={group.items} className={index % 2 === 0 ? "bg-surface" : "bg-bg"} />
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

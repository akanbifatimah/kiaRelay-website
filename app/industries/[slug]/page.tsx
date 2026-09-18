import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CircleCheckBig } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Faq } from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { industries, industryFaqs } from "@/lib/content";
import { pageMetadata, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};

  return pageMetadata({
    title: industry.name,
    description: industry.complianceNeed,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <JsonLd data={faqJsonLd(industryFaqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.name, path: `/industries/${slug}` },
        ])}
      />
      <PageHero
        eyebrow="Industries"
        title={industry.name}
        description={industry.need}
        primaryCta={{ label: industry.ctaLabel, href: "/business#quote" }}
      />

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-text">
              What we typically move
            </h2>
            <ul className="mt-6 space-y-3">
              {industry.materials.map((material) => (
                <li key={material} className="flex items-start gap-3 text-text-muted">
                  <CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-success" aria-hidden />
                  <span>{material}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight text-text">
              How we handle it
            </h2>
            <p className="mt-6 text-text-muted">{industry.complianceNeed}</p>
          </div>
        </div>
      </section>

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Common questions
            </h2>
          </div>
          <div className="mt-10">
            <Faq items={industryFaqs} />
          </div>
        </div>
      </section>
    </>
  );
}

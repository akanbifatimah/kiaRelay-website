import { Faq } from "@/components/faq";
import { homeFaqs } from "@/lib/content";

export function FaqSection() {
  return (
    <section className="bg-bg py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-3 text-text-muted">
            Answers to the questions we hear most from business and individual shippers.
          </p>
        </div>
        <div className="mt-10">
          <Faq items={homeFaqs} />
        </div>
      </div>
    </section>
  );
}

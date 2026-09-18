import { PageHero } from "@/components/page-hero";
import { ContactChannelCard } from "@/components/contact-channel-card";
import { contactChannels } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Reach KiaRelay for business inquiries, driver questions, or support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        description="Business inquiry, driver question, or support issue — reach the right team directly below."
      />

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {Object.values(contactChannels).map((channel) => (
              <ContactChannelCard key={channel.label} {...channel} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

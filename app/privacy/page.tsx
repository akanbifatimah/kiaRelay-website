import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How KiaRelay collects, uses, and protects information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="[TBD — pending legal review]">
      <section>
        <h2 className="text-xl font-semibold text-text">1. Overview</h2>
        <p className="mt-3 leading-relaxed">
          This Privacy Policy describes how KiaRelay (&quot;KiaRelay,&quot; &quot;we,&quot;
          &quot;us&quot;) collects, uses, and shares information in connection with our
          website and delivery logistics services. This is placeholder text pending review by
          counsel and does not constitute a final or binding privacy notice.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-text">2. Information We Collect</h2>
        <p className="mt-3 leading-relaxed">
          We may collect information you provide directly — such as name, email, phone number,
          company details, pickup/drop-off addresses, and payment-related information — as well
          as information collected automatically, such as device and usage data.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-text">3. How We Use Information</h2>
        <p className="mt-3 leading-relaxed">
          Information is used to provide and improve delivery services, process bookings and
          invoices, communicate with customers and drivers, meet compliance obligations (e.g.
          hazmat, HIPAA-aware handling), and maintain the security of our platform.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-text">4. Sharing of Information</h2>
        <p className="mt-3 leading-relaxed">
          We may share information with drivers to fulfill a delivery, with service providers
          who support our operations, and as required by law. We do not sell personal
          information.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-text">5. Data Retention & Security</h2>
        <p className="mt-3 leading-relaxed">
          We retain information for as long as necessary to provide services and meet legal
          obligations, and apply reasonable technical and organizational measures to protect
          it.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-text">6. Your Choices</h2>
        <p className="mt-3 leading-relaxed">
          You may request access to, correction of, or deletion of your information by
          contacting us — see the Contact page.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-text">7. Contact</h2>
        <p className="mt-3 leading-relaxed">
          Questions about this policy can be directed to us via the{" "}
          <Link href="/contact" className="font-semibold text-primary hover:underline">
            Contact page
          </Link>
          .
        </p>
      </section>
    </LegalPage>
  );
}

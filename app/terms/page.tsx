import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "The terms governing use of KiaRelay's website and delivery services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service" updated="[TBD — pending legal review]">
      <section>
        <h2 className="text-xl font-semibold text-text">1. Agreement to Terms</h2>
        <p className="mt-3 leading-relaxed">
          By using KiaRelay&apos;s website or booking a delivery, you agree to these Terms of
          Service. This is placeholder text pending review by counsel and does not constitute a
          final or binding agreement.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-text">2. Use of Service</h2>
        <p className="mt-3 leading-relaxed">
          KiaRelay provides delivery logistics services for business and individual customers
          across its published service area. Shipments must comply with applicable law,
          including restrictions on hazardous or prohibited materials.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-text">3. Company Accounts</h2>
        <p className="mt-3 leading-relaxed">
          Company accounts are invoiced immediately following each delivery and settled by ACH
          or card. Authorized users added to a company account act on that company&apos;s
          behalf.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-text">4. Individual Bookings & Payment</h2>
        <p className="mt-3 leading-relaxed">
          Individual customers pay at the time of booking. Pricing is shown before a booking is
          confirmed.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-text">5. Drivers</h2>
        <p className="mt-3 leading-relaxed">
          Drivers must meet KiaRelay&apos;s eligibility requirements, including a valid
          license, roadworthy vehicle, and background check, and agree to KiaRelay&apos;s
          driver terms before accepting deliveries.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-text">6. Liability</h2>
        <p className="mt-3 leading-relaxed">
          KiaRelay maintains insurance coverage for shipments handled through the platform.
          Liability limits and claims processes will be detailed in the final version of these
          terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-text">7. Changes to These Terms</h2>
        <p className="mt-3 leading-relaxed">
          We may update these terms from time to time. Material changes will be reflected on
          this page.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-text">8. Contact</h2>
        <p className="mt-3 leading-relaxed">
          Questions about these terms can be directed to us via the{" "}
          <Link href="/contact" className="font-semibold text-primary hover:underline">
            Contact page
          </Link>
          .
        </p>
      </section>
    </LegalPage>
  );
}

import Link from "next/link";
import { LegalList, LegalPage, LegalSection } from "@/components/legal-page";
import { COMPANY_ADDRESS, COMPANY_LEGAL_NAME, PHONE, contactChannels, serviceAreaStates } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: "The terms governing use of KiaRelay's website, apps, and delivery services.",
  path: "/terms",
});

// TODO: two values below are drafting assumptions for counsel to confirm —
// the 7-day claims window (§9) and Texas governing law (§13).
const CLAIM_WINDOW_DAYS = 7;

export default function TermsPage() {
  const support = contactChannels.support.email;

  return (
    <LegalPage eyebrow="Legal" title="Terms of Service" updated="September 25, 2026">
      <LegalSection title="1. Agreement">
        <p>
          These Terms govern your use of the {COMPANY_LEGAL_NAME} website, the KiaRelay customer and driver
          apps, and our delivery services (the &quot;Services&quot;). By creating an account or booking a
          delivery, you agree to these Terms and our{" "}
          <Link href="/privacy" className="font-semibold text-primary hover:underline">Privacy Policy</Link>.
          If you use the Services for a company, you confirm you&apos;re authorized to bind that company.
        </p>
      </LegalSection>

      <LegalSection title="2. The Services">
        <p>
          KiaRelay connects shippers with vetted, independent drivers to move goods within our service area,
          currently {serviceAreaStates.primary.join(" and ")}. Deliveries are booked, tracked, and completed
          through the KiaRelay apps. Delivery types are Standard, Express, and Scheduled; Scheduled deliveries
          can be booked up to 14 days in advance. Availability of any service can vary by location and time.
        </p>
      </LegalSection>

      <LegalSection title="3. Accounts">
        <LegalList
          items={[
            "You must be at least 18 and provide accurate, current information.",
            "Company accounts are reviewed before activation. We may ask for business registration details, an authorized signatory, and supporting documents.",
            "A company is responsible for everything its authorized users do on its account, across all branches.",
            "Keep your login details confidential. You're responsible for activity on your account.",
            "We may suspend or close accounts for non-payment, fraud, safety concerns, or breach of these Terms. Where appropriate, we'll tell you why and give you a chance to respond.",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. Pricing">
        <p>
          Prices are based on weight, dimensions, distance, delivery type, and any specialized handling you select.
          The full price is shown before you confirm a booking. There are no hidden fees.
        </p>
        <p>The final charge can differ from the booked price only in these cases:</p>
        <LegalList
          items={[
            "Waiting time: 30 minutes at each pickup and drop-off is included. Waiting beyond that is billed at the rate shown in your booking.",
            "Inaccurate details: if the actual weight, dimensions, or contents differ materially from what was booked, or you change the route or add stops after booking, we'll re-price the delivery and show you the new amount.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Payment">
        <LegalList
          items={[
            "Individual accounts pay at the time of booking by card, debit card, ACH, Apple Pay, Google Pay, or PayPal.",
            "Company accounts are invoiced automatically once each delivery is confirmed. Payment is due on Net 30 terms unless we agree otherwise in writing, by ACH, corporate card, or an approved line of credit. Credit terms and limits are subject to approval.",
            "Overdue invoices may lead to suspension of booking on the account until the balance is settled.",
            "Payments are handled by our third-party payment processor.",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Cancellations">
        <p>
          You can cancel a delivery in the app before pickup. Any cancellation fee — for example, once a driver
          has been dispatched — is shown in the app before you confirm the cancellation. Refunds for eligible
          cancellations go back to the original payment method or appear as a credit on a company invoice.
        </p>
      </LegalSection>

      <LegalSection title="7. Your shipments">
        <p>You&apos;re responsible for:</p>
        <LegalList
          items={[
            "Describing contents, weight, dimensions, and handling needs accurately.",
            "Packaging goods securely for transport.",
            "Making sure pickup and drop-off sites are accessible, and telling us about any site-access or safety requirements.",
            "Declaring hazardous materials. HazMat Class 3 and 8 shipments are accepted only when declared at booking and are carried only by drivers holding the right endorsements.",
          ]}
        />
        <p>We don&apos;t carry:</p>
        <LegalList
          items={[
            "Illegal items or controlled substances.",
            "Weapons, ammunition, or explosives.",
            "Undeclared or unsupported hazardous materials.",
            "Cash, negotiable instruments, precious metals, or jewelry.",
            "Live animals.",
            "Human remains.",
            "Anything else we reasonably decide is unsafe to transport.",
          ]}
        />
        <p>Drivers may refuse a load that appears prohibited, mis-described, or unsafe.</p>
      </LegalSection>

      <LegalSection title="8. Proof of delivery">
        <p>
          A delivery is complete when the driver records proof of delivery in the app: a drop-off photo, plus the
          recipient&apos;s signature or 4-digit PIN, with GPS location and time. This record is the primary evidence
          of delivery for billing and claims.
        </p>
      </LegalSection>

      <LegalSection title="9. Claims">
        <p>
          If a shipment is lost, damaged, delivered to the wrong address, or late, or if you have a billing issue or
          a concern about a driver&apos;s conduct, report it from the order in the app or by emailing{" "}
          <a href={`mailto:${support}`} className="font-semibold text-primary hover:underline">{support}</a>{" "}
          within {CLAIM_WINDOW_DAYS} days of the delivery or scheduled delivery date.
        </p>
        <p>
          Include photos and any supporting documents. We review claims against the delivery record, including
          photos, GPS data, and signatures. Approved claims are resolved by refund or account credit, up to the
          coverage limit that applies to your shipment or account agreement.
        </p>
      </LegalSection>

      <LegalSection title="10. Drivers">
        <p>
          Drivers must meet our eligibility requirements, keep their documents current, and agree to the separate
          KiaRelay Driver Terms in the driver app before accepting deliveries. Those requirements include:
        </p>
        <LegalList
          items={[
            "A valid license and government ID.",
            "Vehicle registration, inspection, and commercial auto insurance.",
            "A cleared background and driving-record check.",
          ]}
        />
        <p>
          Driver earnings are credited to the driver&apos;s wallet after each completed delivery and paid out as
          described in the Driver Terms.
        </p>
      </LegalSection>

      <LegalSection title="11. Acceptable use">
        <p>Don&apos;t misuse the Services. For example, don&apos;t:</p>
        <LegalList
          items={[
            "Give false information.",
            "Interfere with the apps or try to access accounts or data that aren't yours.",
            "Harass drivers, customers, or staff.",
            "Use the Services for anything unlawful.",
          ]}
        />
      </LegalSection>

      <LegalSection title="12. Liability">
        <p>
          To the fullest extent permitted by law:
        </p>
        <LegalList
          items={[
            "KiaRelay's total liability for a shipment is limited to the coverage limit described in section 9.",
            "We're not liable for indirect, incidental, special, or consequential damages, including lost profits, downtime, or delays caused by events outside our reasonable control such as weather, road closures, or site-access restrictions.",
          ]}
        />
        <p>Nothing in these Terms limits liability that can&apos;t be limited by law.</p>
      </LegalSection>

      <LegalSection title="13. Governing law and disputes">
        <p>
          These Terms are governed by the laws of the State of Texas, without regard to its conflict-of-law rules.
          Before filing any claim, please contact us so we can try to resolve the issue informally.
        </p>
      </LegalSection>

      <LegalSection title="14. Changes">
        <p>
          We may update these Terms. We&apos;ll post the new version here with a new effective date and notify you of
          material changes in the app or by email. Continuing to use the Services after that means you accept
          the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="15. Contact">
        <p>
          Email <a href={`mailto:${support}`} className="font-semibold text-primary hover:underline">{support}</a>,
          call <a href={`tel:${PHONE.tel}`} className="font-semibold text-primary hover:underline">{PHONE.display}</a>
          {COMPANY_ADDRESS ? <>, or write to us at {COMPANY_ADDRESS}</> : null}. You can also use the{" "}
          <Link href="/contact" className="font-semibold text-primary hover:underline">Contact page</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

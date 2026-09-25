import Link from "next/link";
import { LegalList, LegalPage, LegalSection } from "@/components/legal-page";
import { COMPANY_ADDRESS, COMPANY_LEGAL_NAME, PHONE, contactChannels } from "@/lib/site-config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How KiaRelay collects, uses, shares, and protects information about customers, drivers, and website visitors.",
  path: "/privacy",
});

const privacyEmail = contactChannels.support.email;

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="September 25, 2026">
      <LegalSection title="1. Who we are">
        <p>
          This Privacy Policy explains how {COMPANY_LEGAL_NAME} (&quot;KiaRelay,&quot; &quot;we,&quot; &quot;us&quot;)
          collects, uses, shares, and protects personal information through this website, the KiaRelay
          customer app, the KiaRelay driver app, and our delivery logistics services (together, the
          &quot;Services&quot;).
        </p>
      </LegalSection>

      <LegalSection title="2. Information we collect">
        <p>
          <strong className="text-text">Customers (individuals and company accounts):</strong>
        </p>
        <LegalList
          items={[
            "Account details: name, email, phone number, and password.",
            "Company account details: legal business name, registration number, business address, authorized signatory, branch and user information, and documents submitted for business verification.",
            "Delivery details: pickup and drop-off addresses, recipient names and contact details, package descriptions, weight, dimensions, and handling requirements.",
            "Payment details: handled by our payment processor. We receive limited information such as card type, last four digits, and billing status, but not full card or bank numbers.",
            "Support and claims: messages, tickets, claim descriptions, and photos or files you send us.",
          ]}
        />
        <p>
          <strong className="text-text">Drivers:</strong>
        </p>
        <LegalList
          items={[
            "Identity and eligibility: name, date of birth, address, driver's license, government-issued ID, and TWIC or HazMat endorsements, if provided.",
            "Vehicle information: make, model, year, plate, registration, inspection, and insurance documents.",
            "Background check results from our third-party screening provider, collected only with your written consent (see section 5).",
            "Location data from the driver app while you're online or on a delivery, used for dispatch, tracking, and proof of delivery.",
            "Earnings and payout information, including the bank account used for ACH payouts.",
          ]}
        />
        <p>
          <strong className="text-text">Proof of delivery:</strong> delivery photos, recipient signatures or PINs, GPS
          coordinates, and timestamps captured at pickup and drop-off.
        </p>
        <p>
          <strong className="text-text">Website visitors:</strong> this website doesn&apos;t use advertising or analytics
          cookies. It stores your light/dark theme choice in your browser&apos;s local storage. Our hosting provider
          may log standard technical data, such as IP address and browser type, for security and reliability.
        </p>
      </LegalSection>

      <LegalSection title="3. How we use information">
        <LegalList
          items={[
            "To create and manage accounts, including verifying company accounts and screening drivers.",
            "To price, dispatch, route, track, and complete deliveries, and to provide proof of delivery.",
            "To process payments, send invoices, and pay drivers.",
            "To investigate and resolve claims, support requests, and disputes.",
            "To keep the platform safe, including fraud prevention, driver compliance monitoring, and audit logs.",
            "To send service messages about your deliveries and account.",
            "To send marketing emails if you haven't opted out. Every marketing email includes an unsubscribe link.",
            "To meet legal, tax, and regulatory obligations, including hazmat and healthcare handling requirements.",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. How we share information">
        <p>We do not sell personal information. We share it only as follows:</p>
        <LegalList
          items={[
            "With drivers: the pickup and drop-off details, recipient contact information, and handling instructions needed to complete a delivery.",
            "With customers and recipients: the assigned driver's first name, vehicle details, live location during the delivery, and proof of delivery.",
            "Within a company account: shipments, invoices, and reports are visible to that company's authorized users.",
            "With service providers acting on our behalf, including payment processing, mapping and navigation, background screening, cloud hosting, and email/SMS delivery.",
            "When required by law, or to protect the rights, property, or safety of KiaRelay, our users, or the public.",
            "In a merger, acquisition, or sale of assets, subject to this policy.",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Background checks for drivers">
        <p>
          Before running a background check, we give you a separate written disclosure and ask for your
          authorization, as required by the Fair Credit Reporting Act. The check may include criminal records,
          sex offender registries, motor vehicle records, and identity verification.
        </p>
        <p>
          If we may take adverse action based on the report, we&apos;ll first send you a copy of it and a summary of
          your rights, so you have a chance to dispute it with the screening provider.
        </p>
      </LegalSection>

      <LegalSection title="6. Data retention">
        <p>
          We keep information for as long as your account is active and afterwards as needed to meet legal, tax,
          accounting, and insurance requirements, resolve disputes and claims, and enforce our agreements.
          Delivery and proof-of-delivery records are kept for the period needed to handle claims and meet those
          obligations, and then deleted or anonymized.
        </p>
      </LegalSection>

      <LegalSection title="7. Security">
        <p>
          We use administrative, technical, and physical safeguards to protect information. These include
          encryption in transit, role-based access controls for our staff, and audit logging of administrative
          actions. No system is completely secure, so please keep your password confidential and tell us
          promptly if you suspect unauthorized access.
        </p>
      </LegalSection>

      <LegalSection title="8. Your choices and rights">
        <LegalList
          items={[
            "Update your profile and notification preferences in the app.",
            "Unsubscribe from marketing emails using the link in any of them. We'll still send service messages about your deliveries.",
            "Control location permissions in your device settings. Drivers must allow location access while online to receive and complete deliveries.",
            "Depending on your state of residence, including under the Texas Data Privacy and Security Act, you may have the right to access, correct, delete, or get a copy of your personal information, and to appeal our decision on your request.",
          ]}
        />
        <p>
          To make a request, email <a href={`mailto:${privacyEmail}`} className="font-semibold text-primary hover:underline">{privacyEmail}</a>.
          We&apos;ll verify your identity before acting on it.
        </p>
      </LegalSection>

      <LegalSection title="9. Children">
        <p>
          The Services are not directed to anyone under 18, and we don&apos;t knowingly collect their personal
          information.
        </p>
      </LegalSection>

      <LegalSection title="10. Changes to this policy">
        <p>
          We may update this policy from time to time. We&apos;ll post the new version here with a new effective date
          and, for material changes, notify you in the app or by email.
        </p>
      </LegalSection>

      <LegalSection title="11. Contact us">
        <p>
          Email <a href={`mailto:${privacyEmail}`} className="font-semibold text-primary hover:underline">{privacyEmail}</a>,
          call <a href={`tel:${PHONE.tel}`} className="font-semibold text-primary hover:underline">{PHONE.display}</a>
          {COMPANY_ADDRESS ? <>, or write to us at {COMPANY_ADDRESS}</> : null}. You can also use the{" "}
          <Link href="/contact" className="font-semibold text-primary hover:underline">Contact page</Link>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

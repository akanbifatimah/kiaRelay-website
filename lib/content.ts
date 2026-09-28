import {
  Factory,
  Truck,
  Home as HomeIcon,
  PackageCheck,
  Wallet,
  ShieldCheck,
  Gauge,
  MapPinned,
  Camera,
  Clock,
  BadgeCheck,
  Receipt,
  Building2,
  BarChart3,
  Headset,
  ShieldAlert,
  MousePointerClick,
  Tag,
  Share2,
  FileSignature,
  IdCard,
  Wrench,
  Target,
  FileCheck,
  UserCheck,
  Radar,
  Flame,
  HardHat,
  Cross,
  Briefcase,
  Route,
  Zap,
} from "lucide-react";
import { BUSINESS_BRAND } from "@/lib/site-config";

export const industries = [
  {
    slug: "oil-gas",
    name: "Refineries & Oil/Gas",
    need: "Hazmat-aware handling and load integrity for pipe fittings, valves, seals, and testing equipment.",
    icon: Flame,
    materials: [
      "Pipe fittings and valves",
      "Seals and gaskets",
      "Chemical samples",
      "Field testing equipment",
    ],
    complianceNeed:
      "Refinery and oil/gas shipments move under hazmat-aware handling protocols, with load integrity checks and weight-based pricing that reflects the density and regulatory class of what's being moved. Drivers are briefed on site-access requirements before pickup.",
    ctaLabel: "Talk to Sales About Oil & Gas Shipping",
  },
  {
    slug: "construction",
    name: "Construction",
    need: "Large-format packaging and dimension-based pricing for materials, tools, and structural components.",
    icon: HardHat,
    materials: [
      "Building materials",
      "Power and hand tools",
      "Hardware and fasteners",
      "Structural components",
    ],
    complianceNeed:
      "Construction shipments are priced by dimension as much as weight — oversized and irregular loads are quoted individually, with large-format packaging handled by drivers trained on jobsite pickup and drop-off logistics.",
    ctaLabel: "Talk to Sales About Construction Shipping",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    need: "Chain-of-custody and cold-chain awareness for medical supplies, specimens, and pharmaceuticals.",
    icon: Cross,
    materials: [
      "Medical supplies and equipment",
      "Lab specimens",
      "Pharmaceuticals",
      "Time-sensitive documents",
    ],
    complianceNeed:
      "Healthcare shipments are handled with HIPAA-aware practices, documented chain of custody, and cold-chain awareness for temperature-sensitive materials, from lab pickup to facility drop-off.",
    ctaLabel: "Talk to Sales About Healthcare Logistics",
  },
  {
    slug: "commercial",
    name: "General Commercial",
    need: "Fast, trackable delivery with proof of delivery for documents, packages, and retail goods.",
    icon: Briefcase,
    materials: [
      "Business documents",
      "Retail goods and inventory",
      "General packages",
      "Scheduled B2B shipments",
    ],
    complianceNeed:
      "Commercial shipments are optimized for speed and accountability — real-time tracking and photo proof of delivery on every run, with Scheduled delivery (booked up to 14 days ahead) for planned business shipments.",
    ctaLabel: "Talk to Sales About Commercial Shipping",
  },
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Request",
    description:
      "Book a delivery in the KiaRelay app — now, or scheduled up to 14 days ahead. The full price is shown before you confirm.",
    icon: "ClipboardList",
  },
  {
    step: "02",
    title: "Match",
    description:
      "A vetted, background-checked driver is matched and dispatched to your pickup location.",
    icon: "UsersRound",
  },
  {
    step: "03",
    title: "Track",
    description:
      "Follow the shipment live in the app, from pickup to drop-off.",
    icon: "MapPinned",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Delivery is confirmed with a drop-off photo and the recipient's signature or PIN — proof of delivery, every time.",
    icon: "PackageCheck",
  },
] as const;

export const deliveryTypes = [
  {
    name: "Standard",
    description:
      "Reliable, cost-effective delivery for shipments that aren't racing the clock.",
    points: ["Priced by weight, dimensions, and distance", "Price shown before you book", "Live tracking included"],
    featured: false,
  },
  {
    name: "Express",
    description:
      "Priority handling and routing when a shipment absolutely has to move now.",
    points: ["Priority dispatch", "Fastest available routing", "Express price shown before you book"],
    featured: true,
  },
  {
    name: "Scheduled",
    description:
      "Pick the date and time slot that works for your site, dock, or delivery address.",
    points: ["Book up to 14 days in advance", "Customer-selected time slot", "Live tracking included"],
    featured: false,
  },
] as const;

export const trustSignals = [
  // Only claims the platform actually enforces (driver vetting, POD, tracking).
  // TODO: add "Insured" / DOT-MC badges once the client supplies real
  // coverage details and registration numbers — never invent them.
  { label: "Background-Checked Drivers", icon: "UserCheck" },
  { label: "ID-Verified Drivers", icon: "ShieldCheck" },
  { label: "TWIC & HazMat-Endorsed Drivers", icon: "Truck" },
  { label: "Photo Proof of Delivery", icon: "FileCheck" },
  { label: "Real-Time Tracking", icon: "Radar" },
] as const;

export const splitCtaCards = [
  {
    eyebrow: BUSINESS_BRAND,
    title: "Ship with KiaRelay",
    description:
      "Company accounts with invoiced billing, multi-branch access, and industry-specific handling.",
    cta: `Explore ${BUSINESS_BRAND}`,
    href: "/business",
  },
  {
    eyebrow: "For Individuals",
    title: "Send a Package",
    description:
      "Book a door-to-door delivery in the KiaRelay app and track it in real time.",
    cta: "Get Started",
    href: "/personal",
  },
  {
    eyebrow: "For Drivers",
    title: "Drive with KiaRelay",
    description:
      "Earn on your schedule with a wallet credited immediately after every delivery.",
    cta: "Drive with Us",
    href: "/drive",
  },
] as const;

export const heroSlides = [
  {
    id: "business",
    eyebrow: BUSINESS_BRAND,
    headline: "Ship it right,",
    highlight: "the first time.",
    description:
      "KiaRelay gives refineries, contractors, healthcare providers, and commercial shippers across Texas and Louisiana one company account for every delivery. Each shipment is handled by a vetted driver who is briefed on your site's requirements, and you can track it live from pickup to drop-off.",
    // Hero shows this path's store buttons (2026-09-25) instead of CTA buttons.
    download: "business",
    appHint: `Download the KiaRelay app and choose ${BUSINESS_BRAND}.`,
    learnMore: { label: `Learn more about ${BUSINESS_BRAND}`, href: "/business" },
    trackingLabel: "KR-48213 · In Transit",
    progress: 65,
    fromIcon: Factory,
    toIcon: Truck,
    badgeIcons: [ShieldCheck, Gauge] as const,
  },
  {
    id: "individual",
    eyebrow: "For Individuals",
    headline: "Book it, send it,",
    highlight: "watch it move.",
    description:
      "Sending a package with KiaRelay is simple. You see the full price before you book, follow your delivery live in the app, and get a photo at drop-off as proof that it arrived safely.",
    download: "individual",
    appHint: "Download the KiaRelay app and choose a Personal account.",
    learnMore: { label: "See how personal deliveries work", href: "/personal" },
    trackingLabel: "KR-90142 · Out for Delivery",
    progress: 85,
    fromIcon: HomeIcon,
    toIcon: PackageCheck,
    badgeIcons: [MapPinned, Camera] as const,
  },
  {
    id: "driver",
    eyebrow: "Drive with KiaRelay",
    headline: "Deliver on your schedule,",
    highlight: "track every dollar.",
    description:
      "Sign up in the KiaRelay driver app and choose when you work. Your wallet is credited as soon as each delivery is completed, and you get paid on the payout cycle that suits you.",
    download: "driver",
    appHint: "Download the KiaRelay Driver app to sign up.",
    learnMore: { label: "See driver requirements and pay", href: "/drive" },
    trackingLabel: "Wallet · Credited Today",
    progress: 40,
    fromIcon: Wallet,
    toIcon: Truck,
    badgeIcons: [Clock, BadgeCheck] as const,
  },
] as const;

// ---------------------------------------------------------------------------
// /business
// ---------------------------------------------------------------------------

export const businessFeatures = [
  {
    icon: Receipt,
    title: "Invoiced billing",
    description:
      "An invoice is generated automatically once delivery is confirmed. Standard Net 30 terms, settled by ACH, corporate card, or an approved line of credit — no prepayment.",
  },
  {
    icon: Building2,
    title: "Multi-branch, multi-user",
    description:
      "Add authorized users across branches under one company account, with visibility into every shipment.",
  },
  {
    icon: BarChart3,
    title: "Spend & usage reporting",
    description:
      "See delivery volume and spend by branch, user, or date range — built for procurement and ops review.",
  },
  {
    icon: Headset,
    title: "Dedicated account support",
    description:
      "A single point of contact who understands your account, your sites, and your handling requirements.",
  },
  {
    icon: ShieldAlert,
    title: "Industry-specific handling",
    description:
      "Hazmat awareness, cold-chain handling, and dimensional freight pricing — matched to what you actually ship.",
  },
] as const;

export const businessVolumeOptions = [
  "Fewer than 10 deliveries / month",
  "10–50 deliveries / month",
  "50–200 deliveries / month",
  "200+ deliveries / month",
] as const;

// ---------------------------------------------------------------------------
// /personal
// ---------------------------------------------------------------------------

export const personalFeatures = [
  {
    icon: MousePointerClick,
    title: "Book in the app",
    description:
      "Create a free account, enter pickup and drop-off, pick Standard, Express, or Scheduled, and confirm.",
  },
  {
    icon: Tag,
    title: "No hidden fees",
    description:
      "The full price is shown before you book, and that's what you pay — paid at booking by card, debit, ACH, Apple Pay, Google Pay, or PayPal.",
  },
  {
    icon: Share2,
    title: "Live tracking",
    description:
      "Follow your delivery in real time in the app, from pickup to drop-off.",
  },
  {
    icon: FileSignature,
    title: "Photo proof of delivery",
    description:
      "Every drop-off is confirmed with a photo and the recipient's signature or PIN.",
  },
] as const;

// ---------------------------------------------------------------------------
// /drive — mirrors the driver app onboarding and the admin payout settings
// ---------------------------------------------------------------------------

export const driverEarnings = [
  { label: "End of Day", description: "Everything you earned today, paid out at the end of the day." },
  { label: "First of Week", description: "Last week's earnings, paid on the first day of the new week." },
  { label: "Bi-weekly", description: "Automatic payout every two weeks." },
  { label: "Instant Cashout", description: "Withdraw your wallet balance any time (1.5% fee)." },
] as const;

export const driverPayoutNotes = [
  "Your wallet is credited as soon as each delivery is completed.",
  "Payouts go to your registered bank account by ACH.",
  "Balances under $50 roll over to your next payout.",
  "Per-delivery earnings, bonuses, and deductions are itemized in the app.",
] as const;

export const driverRequirements = [
  { label: "Valid driver's license", icon: IdCard },
  { label: "Government-issued photo ID", icon: UserCheck },
  { label: "Vehicle registration & inspection", icon: Wrench },
  { label: "Commercial auto insurance", icon: FileCheck },
  { label: "Background & driving-record check", icon: ShieldCheck },
  { label: "TWIC / HazMat endorsement (optional)", icon: BadgeCheck },
] as const;

export const driverVehicleTypes = ["Cargo vans", "Sprinter vans", "Box trucks"] as const;

export const driverApplicationSteps = [
  { step: "01", title: "Personal details", description: "Name, contact info, and preferred service area." },
  { step: "02", title: "Documents", description: "License, photo ID, registration, and insurance uploads." },
  { step: "03", title: "Vehicle info", description: "Vehicle type, year, plate, and capacity." },
  { step: "04", title: "Background check", description: "Consent to your background and driving-record check." },
] as const;

// ---------------------------------------------------------------------------
// /about
// ---------------------------------------------------------------------------

export const missionPillars = [
  {
    icon: ShieldCheck,
    title: "Safety of materials",
    description: "Every load is handled with the care its contents require, from hazmat to fragile freight.",
  },
  {
    icon: PackageCheck,
    title: "Integrity of packaging",
    description: "What leaves the dock arrives the way it left — intact, sealed, and accounted for.",
  },
  {
    icon: Gauge,
    title: "Speed",
    description: "Standard, Express, and Scheduled options built around how fast a shipment actually needs to move.",
  },
  {
    icon: Target,
    title: "Accurate delivery",
    description: "The right shipment, to the right location, confirmed with photo and signature every time.",
  },
] as const;

export const whyKiaRelay = [
  {
    icon: FileCheck,
    title: "Compliance rigor",
    description: "Hazmat-aware and HIPAA-aware handling, with regulated loads only offered to drivers holding the right TWIC or HazMat endorsement.",
  },
  {
    icon: UserCheck,
    title: "Driver vetting",
    description: "Every driver is ID-verified and background-checked — criminal, driving record, and document review — before they're matched to a delivery.",
  },
  {
    icon: Radar,
    title: "Technology-driven dispatch",
    description: "Real-time matching and tracking, so shipments move efficiently and visibly from pickup to drop-off.",
  },
] as const;

// ---------------------------------------------------------------------------
// /contact
// ---------------------------------------------------------------------------

export const contactRoutingOptions = [
  { value: "business", label: "Business inquiry" },
  { value: "driver", label: "Driver inquiry" },
  { value: "support", label: "Support" },
] as const;

// ---------------------------------------------------------------------------
// Specialized services & company verification — taken from the Operations
// Settings and Company Verification screens in the KiaRelay admin web app.
// ---------------------------------------------------------------------------

export const specializedServices = [
  { icon: Route, title: "Multi-stop routes", description: "Add up to 5 stops to a single delivery route." },
  { icon: Flame, title: "HazMat & heavy lift", description: "HazMat Class 3 and 8 and forklift-required loads, carried by endorsed drivers." },
  { icon: Zap, title: "Hot-shot express", description: "Immediate driver assignment for high-urgency loads." },
  { icon: Cross, title: "Healthcare & chain of custody", description: "Documented handling for medical supplies, specimens, and pharmaceuticals." },
  { icon: Truck, title: "Oversized freight", description: "Box-truck capacity for large-format and palletized loads." },
  { icon: Clock, title: "Waiting time, disclosed", description: "30 minutes on site is included; waiting beyond that is billed at the rate shown when you book." },
] as const;

export const companyVerificationItems = [
  "Legal business name and registration number",
  "Business address and contact email/phone",
  "An authorized signatory for the account",
  "Company documents for our compliance review",
] as const;

// ---------------------------------------------------------------------------
// FAQs
// ---------------------------------------------------------------------------

export const homeFaqs = [
  {
    question: "Where does KiaRelay operate?",
    answer:
      "Texas and Louisiana today, with a phased expansion into Arkansas, Oklahoma, Mississippi, and New Mexico as the network grows.",
  },
  {
    question: "How do I book a delivery?",
    answer:
      "Download the KiaRelay app from the App Store or Google Play, create an account, and book — for your business or for yourself.",
  },
  {
    question: "What's the difference between Standard, Express, and Scheduled delivery?",
    answer:
      "Standard is reliable, cost-effective delivery. Express gets priority dispatch and routing for shipments that need to move now. Scheduled lets you pick a specific date and time slot, up to 14 days ahead.",
  },
  {
    question: "Are there hidden fees?",
    answer:
      "No. The full price — including any Express or specialized-handling charges — is shown before you confirm a booking. The only thing that can be added afterwards is waiting time beyond the 30 minutes included on site, billed at the rate shown when you booked.",
  },
  {
    question: "Are KiaRelay drivers vetted?",
    answer:
      "Yes. Every driver is ID-verified and background-checked (criminal and driving record), and their license, registration, and insurance are reviewed before they're matched to a delivery. TWIC and HazMat endorsements are verified for regulated loads.",
  },
  {
    question: "How is delivery confirmed?",
    answer:
      "Every drop-off is confirmed with a photo plus the recipient's signature or a 4-digit PIN, recorded with GPS location and time.",
  },
  {
    question: "What if something is damaged, lost, or late?",
    answer:
      "Report it from the order in the app. Our claims team reviews the delivery photos, GPS record, and signatures, and resolves eligible claims with a refund or account credit.",
  },
] as const;

export const businessFaqs = [
  {
    question: "How does billing work for company accounts?",
    answer:
      "An invoice is generated automatically once each delivery is confirmed. Standard terms are Net 30, settled by ACH, corporate card, or an approved line of credit. Other terms can be agreed per account.",
  },
  {
    question: "What do I need to open a company account?",
    answer:
      "Your legal business name and registration number, business address and contact details, and an authorized signatory. We review your company documents before the account is activated.",
  },
  {
    question: "Can multiple people on my team book deliveries?",
    answer:
      "Yes. Company accounts support multiple authorized users across branches, all under one account with shared visibility into shipments and invoices.",
  },
  {
    question: "Do you handle hazmat, healthcare, or oversized freight?",
    answer:
      "Yes — HazMat Class 3 and 8 with endorsed drivers, chain-of-custody handling for healthcare, heavy-lift and box-truck loads, and multi-stop routes of up to 5 stops.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "By weight, dimensions, distance, and delivery type, plus any specialized handling your load needs. You see the full price before confirming each booking. Talk to sales about volume pricing.",
  },
  {
    question: "Do you provide spend or usage reporting?",
    answer:
      "Yes. Company accounts include spend and usage reporting broken down by branch, user, or date range.",
  },
] as const;

export const personalFaqs = [
  {
    question: "How do I book a personal delivery?",
    answer:
      "Download the KiaRelay app, create a free account, enter pickup and drop-off details, choose Standard, Express, or Scheduled, and confirm.",
  },
  {
    question: "Do I need an account?",
    answer: "Yes. You'll create a free account in the app to see prices and book.",
  },
  {
    question: "How will I pay?",
    answer:
      "At the time of booking, by card, debit, ACH, Apple Pay, Google Pay, or PayPal. The price you see before booking is the price you pay.",
  },
  {
    question: "How is delivery confirmed?",
    answer:
      "Every delivery is confirmed with a drop-off photo and the recipient's signature or PIN, so you know exactly when and how it arrived.",
  },
  {
    question: "What can I send?",
    answer:
      "Personal parcels, online purchases, and personal effects. Illegal, dangerous, and other prohibited items can't be sent — see our Terms of Service.",
  },
] as const;

export const driverFaqs = [
  {
    question: "What do I need to start driving?",
    answer:
      "A valid driver's license, a government photo ID, a registered and inspected vehicle with commercial auto insurance, and a cleared background and driving-record check. TWIC and HazMat endorsements are optional but open up more deliveries.",
  },
  {
    question: "What vehicles can I use?",
    answer: "Cargo vans, Sprinter vans, and box trucks.",
  },
  {
    question: "How do I apply?",
    answer:
      "Through the KiaRelay driver app — you'll add your details, upload documents, register your vehicle, and consent to the background check, all in the app.",
  },
  {
    question: "How fast do I get paid?",
    answer:
      "Your wallet is credited the moment each delivery is completed. Get paid End of Day, First of Week, or Bi-weekly by ACH — or cash out instantly any time for a 1.5% fee. Balances under $50 roll over to your next payout.",
  },
  {
    question: "Can I drive part-time?",
    answer: "Yes — KiaRelay drivers choose when they're available.",
  },
  {
    question: "Do TWIC or HazMat endorsements help?",
    answer:
      "Yes — they qualify you for refinery, oil and gas, and other regulated-freight deliveries that are only offered to endorsed drivers.",
  },
] as const;

export const industryFaqs = [
  {
    question: "How is pricing determined for this industry?",
    answer:
      "Pricing reflects the handling your shipment requires — weight and hazmat class for oil/gas, dimensions for construction, and chain-of-custody requirements for healthcare. The full price is shown before you book; talk to sales about volume pricing.",
  },
  {
    question: "Are drivers trained for this type of shipment?",
    answer:
      "Drivers are background-checked and briefed on the site-access, handling, and compliance requirements of each job before pickup. Regulated loads only go to drivers with the right endorsements.",
  },
  {
    question: "Can I schedule shipments ahead of time?",
    answer:
      "Yes — Scheduled delivery lets you book a specific date and time slot up to 14 days in advance, useful for jobsite, facility, and dock deliveries.",
  },
] as const;

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
  ClipboardList,
  CircleCheckBig,
  Target,
  FileCheck,
  UserCheck,
  Radar,
  Flame,
  HardHat,
  Cross,
  Briefcase,
} from "lucide-react";

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
      "Recurring B2B shipments",
    ],
    complianceNeed:
      "Commercial shipments are optimized for speed and accountability — real-time tracking and proof of delivery on every run, with recurring/scheduled options for repeat business shipments.",
    ctaLabel: "Talk to Sales About Commercial Shipping",
  },
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Request",
    description:
      "Submit a delivery request online — one-time or scheduled, business or personal.",
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
      "Follow the shipment in real time with a shareable tracking link from pickup to drop-off.",
    icon: "MapPinned",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Delivery is confirmed with photo and signature — proof of delivery, every time.",
    icon: "PackageCheck",
  },
] as const;

export const deliveryTypes = [
  {
    name: "Standard",
    description:
      "Reliable, cost-effective delivery for shipments that aren't racing the clock.",
    points: ["Predictable transit windows", "Weight- and dimension-based pricing", "Full tracking included"],
    featured: false,
  },
  {
    name: "Express",
    description:
      "Priority handling and routing when a shipment absolutely has to move now.",
    points: ["Priority dispatch", "Fastest available routing", "Contact us for a custom rate"],
    featured: true,
  },
  {
    name: "Scheduled",
    description:
      "Pick the date and time window that works for your site, dock, or delivery address.",
    points: ["Customer-selected time slot", "Ideal for recurring shipments", "Full tracking included"],
    featured: false,
  },
] as const;

export const trustSignals = [
  { label: "TWIC-Compliant", icon: "ShieldCheck" },
  { label: "DOT-Aware", icon: "Truck" },
  { label: "Fully Insured", icon: "FileCheck" },
  { label: "Background-Checked Drivers", icon: "UserCheck" },
  { label: "Real-Time Tracking", icon: "Radar" },
] as const;

export const splitCtaCards = [
  {
    eyebrow: "For Business",
    title: "Ship with KiaRelay",
    description:
      "Company accounts with invoiced billing, multi-branch access, and industry-specific handling.",
    cta: "Request a Quote",
    href: "/business#quote",
  },
  {
    eyebrow: "For Individuals",
    title: "Send a Package",
    description:
      "Book a delivery in minutes and track it in real time, door to door.",
    cta: "Get Started",
    href: "/personal",
  },
  {
    eyebrow: "For Drivers",
    title: "Drive with KiaRelay",
    description:
      "Earn on your schedule with a wallet credited immediately after every delivery.",
    cta: "Apply to Drive",
    href: "/drive",
  },
] as const;

export const heroSlides = [
  {
    id: "business",
    eyebrow: "For Business",
    headline: "Ship it right,",
    highlight: "the first time.",
    description:
      "One company account, industry-trained drivers, and a live tracking link on every shipment — trusted by refineries, contractors, hospitals, and commercial shippers across Texas and Louisiana.",
    primaryCta: { label: "Get a Quote", href: "/business#quote" },
    secondaryCta: { label: "Explore Business Accounts", href: "/business" },
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
      "Transparent pricing, real-time tracking with a shareable link, and photo-and-signature confirmation on every delivery.",
    primaryCta: { label: "Track a Package", href: "/track" },
    secondaryCta: { label: "Send a Package", href: "/personal" },
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
    highlight: "earn the same day.",
    description:
      "Vehicle-friendly requirements, background-checked onboarding, and a wallet credited immediately after every delivery.",
    primaryCta: { label: "Apply to Drive", href: "/drive" },
    secondaryCta: { label: "See Requirements", href: "/drive" },
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
      "An invoice is sent immediately after each delivery. Settle by ACH or card — no prepayment required.",
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
    title: "Book in minutes",
    description:
      "Enter pickup and drop-off details, pick a delivery type, and confirm — no account required to get a price.",
  },
  {
    icon: Tag,
    title: "Transparent pricing",
    description:
      "See the price before you book. No hidden fees, no surprise surcharges at drop-off.",
  },
  {
    icon: Share2,
    title: "Real-time, shareable tracking",
    description:
      "Follow your delivery live and share the tracking link with anyone waiting on the other end.",
  },
  {
    icon: FileSignature,
    title: "Photo & signature confirmation",
    description:
      "Every delivery is confirmed with a photo and signature, so you know exactly when and how it arrived.",
  },
] as const;

// ---------------------------------------------------------------------------
// /drive
// ---------------------------------------------------------------------------

export const driverEarnings = [
  { label: "End of day", description: "Cash out the same day you drive." },
  { label: "Weekly", description: "Automatic payout on a weekly schedule." },
  { label: "Bi-weekly", description: "Automatic payout every two weeks." },
  { label: "On-demand", description: "Withdraw your wallet balance whenever you need to." },
] as const;

export const driverRequirements = [
  { label: "Valid driver's license", icon: IdCard },
  { label: "Roadworthy vehicle", icon: Wrench },
  { label: "Background check", icon: ShieldCheck },
  { label: "TWIC / HazMat endorsement (optional)", icon: BadgeCheck },
] as const;

export const driverApplicationSteps = [
  { step: "01", title: "Personal details", description: "Name, contact info, and service area." },
  { step: "02", title: "Documents", description: "License and vehicle documentation upload." },
  { step: "03", title: "Vehicle info", description: "Vehicle type, year, and capacity." },
  { step: "04", title: "Background check consent", description: "Authorize your background check to finish onboarding." },
] as const;

// ---------------------------------------------------------------------------
// /track
// ---------------------------------------------------------------------------

export const trackingTimeline = [
  { label: "Order Placed", icon: ClipboardList },
  { label: "Picked Up", icon: PackageCheck },
  { label: "In Transit", icon: Truck },
  { label: "Delivered", icon: CircleCheckBig },
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
    description: "Hazmat-aware, HIPAA-aware, and DOT-aware handling built into how drivers are trained and dispatched.",
  },
  {
    icon: UserCheck,
    title: "Driver vetting",
    description: "Every driver is background-checked before they're matched to a delivery.",
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
// FAQs
// ---------------------------------------------------------------------------

export const homeFaqs = [
  {
    question: "Where does KiaRelay operate?",
    answer:
      "Texas and Louisiana today, with a phased expansion into Arkansas, Oklahoma, Mississippi, and New Mexico as the network grows.",
  },
  {
    question: "What's the difference between Standard, Express, and Scheduled delivery?",
    answer:
      "Standard is reliable, cost-effective delivery for shipments that aren't racing the clock. Express is priority dispatch and routing for shipments that need to move now. Scheduled lets you pick a specific date and time window for pickup and drop-off.",
  },
  {
    question: "Are KiaRelay drivers vetted?",
    answer:
      "Every driver is background-checked before being matched to a delivery, and drivers can carry optional TWIC or HazMat endorsements for restricted-site and regulated freight.",
  },
  {
    question: "How much does Express cost?",
    answer:
      "Express pricing depends on distance, weight, and urgency — contact us for a custom rate.",
  },
  {
    question: "Can I track my delivery in real time?",
    answer:
      "Yes. Every delivery includes real-time tracking with a shareable link, plus photo-and-signature confirmation once it's dropped off.",
  },
  {
    question: "Do you handle hazmat or medical shipments?",
    answer:
      "Yes — hazmat-aware handling for refinery and oil/gas shipments, and HIPAA-aware, cold-chain-aware handling for healthcare shipments.",
  },
] as const;

export const businessFaqs = [
  {
    question: "How does billing work for company accounts?",
    answer:
      "An invoice is sent immediately after each delivery, settled by ACH or card. There's no prepayment required.",
  },
  {
    question: "Can multiple people on my team book deliveries?",
    answer:
      "Yes. Company accounts support multiple authorized users across branches, all under one account with shared visibility into shipments.",
  },
  {
    question: "Do you handle hazmat, cold-chain, or oversized freight?",
    answer:
      "Yes — handling is matched to your industry, including hazmat awareness for oil/gas, cold-chain awareness for healthcare, and dimensional pricing for large-format construction materials.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing is based on weight, dimensions, and delivery type. Contact sales with your estimated monthly volume for a custom rate.",
  },
  {
    question: "Is there a minimum shipment volume to open a company account?",
    answer:
      "There's no stated minimum — reach out to sales with your estimated volume and we'll get you set up.",
  },
  {
    question: "Do you provide spend or usage reporting?",
    answer:
      "Yes. Company accounts include spend and usage reporting broken down by branch, user, or date range.",
  },
] as const;

export const personalFaqs = [
  {
    question: "Do I need an account to get a price?",
    answer: "No — pricing is shown up front before you book, no account required.",
  },
  {
    question: "How do I pay?",
    answer:
      "Individual bookings are paid at the time of booking by card, debit, ACH, Apple Pay, Google Pay, or PayPal.",
  },
  {
    question: "Can I track my delivery?",
    answer:
      "Yes — every delivery includes a real-time, shareable tracking link so you (or whoever's waiting) can follow it live.",
  },
  {
    question: "How is delivery confirmed?",
    answer:
      "Every delivery is confirmed with a photo and signature at drop-off, so you know exactly when and how it arrived.",
  },
  {
    question: "When will individual booking be available?",
    answer:
      "Web booking is on the way. Email us and we'll let you know the moment you can book a delivery in your area.",
  },
  {
    question: "What can I send?",
    answer: "Personal parcels, online purchases, and personal effects — sent door to door.",
  },
] as const;

export const driverFaqs = [
  {
    question: "What do I need to start driving?",
    answer:
      "A valid driver's license, a roadworthy vehicle, and a completed background check. TWIC and HazMat endorsements are optional but open up more delivery opportunities.",
  },
  {
    question: "How fast do I get paid?",
    answer:
      "Your wallet is credited immediately after every delivery. Cash out end of day, weekly, bi-weekly, or on demand.",
  },
  {
    question: "Do I need a specific type of vehicle?",
    answer:
      "It depends on the job — cars, cargo vans, box trucks, and pickup trucks are all eligible vehicle types.",
  },
  {
    question: "How long does the background check take?",
    answer:
      "Background checks are processed as part of onboarding after you submit your application — our driver recruiting team will follow up with next steps.",
  },
  {
    question: "Can I drive part-time?",
    answer: "Yes — KiaRelay drivers work on their own schedule.",
  },
  {
    question: "Do TWIC or HazMat endorsements help?",
    answer:
      "Yes — they qualify you for additional refinery, oil and gas, and other regulated-freight delivery opportunities.",
  },
] as const;

export const industryFaqs = [
  {
    question: "How is pricing determined for this industry?",
    answer:
      "Pricing reflects the handling your shipment requires — weight and hazmat class for oil/gas, dimensions for construction, and cold-chain/chain-of-custody requirements for healthcare. Contact sales for a custom rate.",
  },
  {
    question: "Are drivers trained for this type of shipment?",
    answer:
      "Yes — drivers are background-checked and briefed on the site-access, handling, and compliance requirements specific to each industry before pickup.",
  },
  {
    question: "Can this be a recurring or scheduled shipment?",
    answer:
      "Yes — Scheduled delivery lets you set a recurring date and time window, useful for regular jobsite, facility, or business shipments.",
  },
] as const;

export const trackFaqs = [
  {
    question: "What do the tracking statuses mean?",
    answer:
      "Order Placed means the request has been submitted. Picked Up means a driver has collected the shipment. In Transit means it's on the way. Delivered means it's been dropped off and confirmed with photo and signature.",
  },
  {
    question: "Can I share my tracking link with someone else?",
    answer: "Yes — tracking links are shareable, so anyone waiting on a delivery can follow it live.",
  },
  {
    question: "What if my tracking number doesn't show a result?",
    answer:
      "Double-check the number, or reach out to support — see the Contact page for the right email and phone number.",
  },
] as const;

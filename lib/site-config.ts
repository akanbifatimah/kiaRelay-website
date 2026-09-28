// TODO: swap for the real production domain once deployed.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kiarelay.com";

/** The business product's name (TC-14, 2026-09-28). One constant so a later
 * naming change is a one-line edit. */
export const BUSINESS_BRAND = "KiaRelay Business";

// The web app (app.kiarelay.com) hosts two sign-ins (approved 2026-09-28):
// KiaRelay Business accounts and KiaRelay admins. Customers and drivers
// still sign in inside the mobile apps.
const WEB_APP_URL = (process.env.NEXT_PUBLIC_WEB_APP_URL || "https://app.kiarelay.com").replace(/\/$/, "");

export const loginMenu = {
  label: "Log In",
  items: [
    {
      label: BUSINESS_BRAND,
      // The web app's welcome page, which leads to sign-in or registration.
      href: `${WEB_APP_URL}/business`,
      description: "Sign in or register your company account.",
    },
    {
      label: "KiaRelay Admin",
      href: `${WEB_APP_URL}/login`,
      description: "Access your dashboard as a KiaRelay staff.",
    },
  ],
} as const;

// All services (business, personal, driver) are presented as available
// (client, 2026-09-25) — no "coming soon" copy anywhere.
//
// Two mobile apps, each on both stores:
// - customer: one app with two interfaces. Individuals and companies pick
//   "Personal" or "KiaRelay Business" when they sign up — the website tells
//   them which to choose, since a store link can't open a specific screen.
// - driver: a separate app for drivers.
// TODO: set the four NEXT_PUBLIC_*_URL variables below to the real store
// listings (and confirm the app names); until then badges link to "#".
export const APPS = {
  customer: {
    name: "KiaRelay",
    appStore: process.env.NEXT_PUBLIC_CUSTOMER_APP_STORE_URL || "#",
    playStore: process.env.NEXT_PUBLIC_CUSTOMER_PLAY_STORE_URL || "#",
  },
  driver: {
    name: "KiaRelay Driver",
    appStore: process.env.NEXT_PUBLIC_DRIVER_APP_STORE_URL || "#",
    playStore: process.env.NEXT_PUBLIC_DRIVER_PLAY_STORE_URL || "#",
  },
} as const;

export type AppKey = keyof typeof APPS;

/** Separate, labelled download paths (TC-01, 2026-09-28). Business and
 * Individual share the one customer app listing but each path tells the
 * visitor which account to pick at sign-up. */
export type DownloadPathKey = "business" | "individual" | "driver";

export const DOWNLOAD_PATHS: Record<DownloadPathKey, { app: AppKey; label: string; signUpChoice?: string }> = {
  business: { app: "customer", label: BUSINESS_BRAND, signUpChoice: BUSINESS_BRAND },
  individual: { app: "customer", label: "KiaRelay for Individuals", signUpChoice: "Personal" },
  driver: { app: "driver", label: "KiaRelay Driver" },
};

// TODO: single interim number supplied by the client (2026-09-25) — replace
// with per-team numbers if/when they exist.
export const PHONE = { display: "+234 813 743 3258", tel: "+2348137433258" };

// TODO: the client will provide the registered company address. While it is
// null, nothing renders an address (footer, contact page, legal pages).
export const COMPANY_ADDRESS: string | null = null;

export const COMPANY_LEGAL_NAME = "KiaRelay";

// "Ways to Relay" (2026-09-25) replaces the generic "Services" label — a
// play on the brand name covering the three ways to use KiaRelay.
export const servicesMenu = {
  label: "Ways to Relay",
  items: [
    {
      label: BUSINESS_BRAND,
      href: "/business",
      description: "Company accounts, invoicing, and multi-branch shipping.",
    },
    {
      label: "For Individuals",
      href: "/personal",
      description: "Book a delivery in the app and track it in real time.",
    },
    {
      label: "Drive with KiaRelay",
      href: "/drive",
      description: "Earn on your schedule with a wallet credited after every delivery.",
    },
  ],
} as const;

export const primaryNavLinks = [
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerSitemap = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: BUSINESS_BRAND,
    links: [
      { label: "Company Accounts", href: "/business" },
      { label: "Industries We Serve", href: "/industries" },
      { label: `Get ${BUSINESS_BRAND}`, href: "/download#business" },
      { label: "Business Log In", href: loginMenu.items[0].href },
    ],
  },
  {
    heading: "For Individuals",
    links: [
      { label: "Personal Deliveries", href: "/personal" },
      { label: "Get the App", href: "/download#individual" },
    ],
  },
  {
    heading: "Drivers",
    links: [
      { label: "Drive with KiaRelay", href: "/drive" },
      { label: "Get the Driver App", href: "/download#driver" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
] as const;

export const serviceAreaStates = {
  primary: ["Texas", "Louisiana"],
  expanding: ["Arkansas", "Oklahoma", "Mississippi", "New Mexico"],
};

// Email addresses are the intended KiaRelay mailboxes; the phone is the one
// interim number above for every team.
// TODO: confirm each mailbox exists before launch.
export const contactChannels = {
  business: {
    label: "Business & Sales",
    description: "Company accounts, pricing, and industry-specific shipping questions.",
    email: "sales@kiarelay.com",
    phone: PHONE.display,
  },
  individual: {
    label: "Individual Senders",
    description: "Questions about sending a package or booking a personal delivery.",
    email: "hello@kiarelay.com",
    phone: PHONE.display,
  },
  drivers: {
    label: "Driver Recruiting",
    description: "Questions about driving with KiaRelay, requirements, and payouts.",
    email: "drivers@kiarelay.com",
    phone: PHONE.display,
  },
  support: {
    label: "Support",
    description: "Help with an existing delivery, account, invoice, or claim.",
    email: "support@kiarelay.com",
    phone: PHONE.display,
  },
} as const;

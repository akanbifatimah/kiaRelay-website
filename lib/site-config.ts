// TODO: swap for the real production domain once deployed.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kiarelay.com";

// TODO: point at the real KiaRelay web app (staging and/or production) once confirmed.
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL ?? "https://app.kiarelay.com";

export const LOGIN_URL = `${APP_URL}/login`;
// TODO: confirm a public self-serve /signup route exists on the app before relying on it;
// if not, point "Sign Up" at the quote/waitlist flow instead.
export const SIGNUP_URL = `${APP_URL}/signup`;

// TODO: swap for the real App Store / Google Play listings once the app is published.
export const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL ?? "#";
export const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "#";

export const servicesMenu = {
  label: "Services",
  items: [
    {
      label: "For Business",
      href: "/business",
      description: "Company accounts, invoicing, and multi-branch shipping.",
    },
    {
      label: "For Individuals",
      href: "/personal",
      description: "Book a delivery and track it in real time.",
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
    heading: "For Business",
    links: [
      { label: "Business Accounts", href: "/business" },
      { label: "Industries We Serve", href: "/industries" },
      { label: "Download the App", href: "/download" },
    ],
  },
  {
    heading: "For Individuals",
    links: [{ label: "Send a Package", href: "/personal" }],
  },
  {
    heading: "Drivers",
    links: [{ label: "Drive with KiaRelay", href: "/drive" }],
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

// TODO: replace with real KiaRelay contact details before launch — this site
// has no backend, so these are the only way for a visitor to reach anyone.
export const contactChannels = {
  business: {
    label: "Business & Sales",
    description: "Company accounts, quotes, and industry-specific shipping questions.",
    email: "sales@kiarelay.com",
    phone: "+1 (000) 000-0000",
  },
  individual: {
    label: "Individual Senders",
    description: "Questions about sending a package or booking a delivery.",
    email: "hello@kiarelay.com",
    phone: "+1 (000) 000-0000",
  },
  drivers: {
    label: "Driver Recruiting",
    description: "Apply to drive or ask about requirements and payouts.",
    email: "drivers@kiarelay.com",
    phone: "+1 (000) 000-0000",
  },
  support: {
    label: "Support",
    description: "Help with an existing delivery or account.",
    email: "support@kiarelay.com",
    phone: "+1 (000) 000-0000",
  },
} as const;

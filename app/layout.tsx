import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { SITE_URL } from "@/lib/site-config";
import { organizationJsonLd } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KiaRelay | Delivered Safely. Delivered Fast.",
    template: "%s | KiaRelay",
  },
  description:
    "KiaRelay is a specialized delivery logistics platform moving materials and goods safely and fast across Texas, Louisiana, and neighboring states — for refineries, construction, healthcare, and general commercial shippers.",
  keywords: [
    "KiaRelay",
    "delivery logistics",
    "Texas courier",
    "Louisiana courier",
    "express delivery",
    "freight delivery",
    "specialized shipping",
    "hazmat delivery",
    "construction materials delivery",
    "healthcare logistics",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "KiaRelay | Delivered Safely. Delivered Fast.",
    description:
      "Specialized delivery logistics across Texas, Louisiana, and neighboring states.",
    siteName: "KiaRelay",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "KiaRelay | Delivered Safely. Delivered Fast.",
    description:
      "Specialized delivery logistics across Texas, Louisiana, and neighboring states.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-bg text-text">
        <JsonLd data={organizationJsonLd()} />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}

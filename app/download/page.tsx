import type { Metadata } from "next";
import { Smartphone, MapPinned, Wallet, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { FeatureGrid } from "@/components/feature-grid";
import { Button } from "@/components/ui/button";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Download the App",
  description:
    "Get the KiaRelay app to book a delivery, track it in real time, and manage business shipments from your phone.",
  alternates: { canonical: "/download" },
};

const appHighlights = [
  {
    icon: Smartphone,
    title: "Book from your phone",
    description: "Request a delivery and see a transparent price up front, no account required.",
  },
  {
    icon: MapPinned,
    title: "Real-time tracking",
    description: "Follow every shipment live with a shareable link, from pickup to drop-off.",
  },
  {
    icon: Wallet,
    title: "For drivers, too",
    description: "Drivers use the same app to accept jobs and cash out earnings on demand.",
  },
  {
    icon: ShieldCheck,
    title: "Proof of delivery",
    description: "Every drop-off is confirmed with a photo and signature, right in the app.",
  },
] as const;

export default function DownloadPage() {
  return (
    <>
      <PageHero
        eyebrow="Get the App"
        title="Book, price, and track — right from your phone."
        description="The KiaRelay app is where deliveries actually get booked and tracked. Download it for iOS or Android to get started."
      >
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href={APP_STORE_URL} variant="primary" size="lg" className="w-full sm:w-auto">
            Download on the App Store
          </Button>
          <Button
            href={PLAY_STORE_URL}
            variant="outline"
            size="lg"
            className="w-full border-white/30 text-white hover:bg-white/10 sm:w-auto"
          >
            Get it on Google Play
          </Button>
        </div>
      </PageHero>

      <section className="bg-bg py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
              What you can do in the app
            </h2>
          </div>
          <FeatureGrid items={appHighlights} columns={4} className="mt-12" />
        </div>
      </section>
    </>
  );
}

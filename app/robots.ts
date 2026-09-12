import type { MetadataRoute } from "next";

// TODO: swap for the real production domain once deployed.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kiarelay.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

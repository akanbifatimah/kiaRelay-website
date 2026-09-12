import type { MetadataRoute } from "next";
import { industries } from "@/lib/content";

// TODO: swap for the real production domain once deployed.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kiarelay.com";

const staticRoutes = [
  "",
  "/business",
  "/personal",
  "/industries",
  "/drive",
  "/track",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const industryRoutes = industries.map((industry) => `/industries/${industry.slug}`);

  return [...staticRoutes, ...industryRoutes].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}

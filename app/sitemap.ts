import type { MetadataRoute } from "next";
import { industries } from "@/lib/content";
import { SITE_URL } from "@/lib/site-config";

const staticRoutes = [
  "",
  "/business",
  "/personal",
  "/industries",
  "/drive",
  "/about",
  "/faq",
  "/download",
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

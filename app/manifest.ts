import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "KiaRelay | Delivered Safely. Delivered Fast.",
    short_name: "KiaRelay",
    description:
      "Specialized delivery logistics across Texas, Louisiana, and neighboring states.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1220",
    theme_color: "#f0602e",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

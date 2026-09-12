import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // TODO: remove once real KiaRelay freight/industrial photography
    // replaces the Lorem Picsum placeholders used across interior pages.
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
};

export default nextConfig;

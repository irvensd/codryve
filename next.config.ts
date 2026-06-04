import path from "path";
import type { NextConfig } from "next";

// Pin workspace root so a stray ~/package-lock.json does not confuse local dev.
// Do not use absolute resolveAlias paths for react — Turbopack on Vercel rejects them.
const projectRoot = path.resolve(__dirname);

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    scrollRestoration: true,
    // optimizeCss pulls in `critters` via Next's post-process; it can fail if the
    // resolved `next` install isn't the project's (e.g. hoisted/global copy).
    optimizeCss: false,
  },
};

export default nextConfig;

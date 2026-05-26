import path from "path";
import type { NextConfig } from "next";

// ~/package-lock.json can make Next resolve from the home directory (Next 15 +
// a second React copy), which breaks RSC and hooks such as useReducedMotion.
const projectRoot = path.resolve(__dirname);
const react = path.join(projectRoot, "node_modules/react");
const reactDom = path.join(projectRoot, "node_modules/react-dom");

const nextConfig: NextConfig = {
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
    resolveAlias: {
      react,
      "react-dom": reactDom,
    },
  },
  webpack: (config) => {
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      react,
      "react-dom": reactDom,
    };
    return config;
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

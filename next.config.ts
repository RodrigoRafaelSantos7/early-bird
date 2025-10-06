import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: { remotePatterns: [new URL("https://cdn.blueprint-academy.com/**")] },
};

export default nextConfig;

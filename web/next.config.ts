import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bwybkdzenyxyoz6w.public.blob.vercel-storage.com",
      }
    ],
  },
};

export default nextConfig;

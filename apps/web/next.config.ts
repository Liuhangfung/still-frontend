import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The shared UI package ships TypeScript source, so Next compiles it.
  transpilePackages: ["@still/ui"],
  poweredByHeader: false,
};

export default nextConfig;

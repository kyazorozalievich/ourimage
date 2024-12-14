import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vodfgqixtogeqggmxkvz.supabase.co",
        pathname: "/storage/v1/object/public/file/uploads/**",
      },
    ],
  },
};

export default nextConfig;

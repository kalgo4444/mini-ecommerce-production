import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.errorchi.uz",
        port: "",
        pathname: "/product/image/**",
      },
    ],
  },
};

export default nextConfig;

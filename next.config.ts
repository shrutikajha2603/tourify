import type { NextConfig } from "next";
import type { NextConfigComplete } from "next/dist/server/config-shared";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ovco9b5jyh.ufs.sh",
      },
    ],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config) => {
    config.watchOptions = {
      ignored: [
        "**/node_modules/**",
        "**/.next/**",
        "**/C:/Users/Shrutika Jha/Cookies/**",
        "**/C:/Users/Shrutika Jha/Application Data/**",
      ],
    };
    return config;
  },
};

export default nextConfig as NextConfigComplete;


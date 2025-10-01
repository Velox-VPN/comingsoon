import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  webpack: (config) => {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components')
    config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles')
    return config
  },
};

export default nextConfig;
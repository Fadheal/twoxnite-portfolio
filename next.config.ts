import type { NextConfig } from "next";

module.exports = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
  }
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

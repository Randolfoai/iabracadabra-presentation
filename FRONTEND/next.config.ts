import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoBasePath = "/iabracadabra-presentation";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? repoBasePath : "",
  assetPrefix: isProd ? `${repoBasePath}/` : "",
};

export default nextConfig;

/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require("@next/bundle-analyzer");
const withTM = require("next-transpile-modules");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {},
  output: 'export',
  // Optional: Change the output directory
  distDir: '../walrus-sites-main/out'
};

const nextPlugins = [
  withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" }),
  withTM([]),
];

module.exports = (_phase, { defaultConfig: _ }) => {
  return nextPlugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig });
};

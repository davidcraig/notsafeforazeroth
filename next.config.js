/**
 * @type {import('next').NextConfig}
 */

const path = require("path");

const nextConfig = {
  output: "export",

  transpilePackages: ["@davidcraig/wowdata", "@davidcraig/tailwind-nextjs-tsx"],

  turbopack: {
    resolveAlias: {
      "@nsfa/Components": path.resolve(__dirname, "Components"),
      "@nsfa/data": path.resolve(__dirname, "data"),
      "jsr:@davidcraig/tailwind-nextjs-tsx": "@davidcraig/tailwind-nextjs-tsx",
    },
  },
};

module.exports = nextConfig;

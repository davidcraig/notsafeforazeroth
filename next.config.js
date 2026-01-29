/**
 * @type {import('next').NextConfig}
 */

const path = require("path");

const nextConfig = {
  output: "export",

  transpilePackages: [
    "@davidcraig/wowdata"
  ],

  turbopack: {
    resolveAlias: {
      "@nsfa/Components": path.resolve(__dirname, "Components"),
      "@nsfa/data": path.resolve(__dirname, "data"),
    },
  },
};

module.exports = nextConfig;

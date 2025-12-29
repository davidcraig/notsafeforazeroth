/**
 * @type {import('next').NextConfig}
 */

const path = require("path");

const nextConfig = {
  output: "export",

  transpilePackages: ["@davidcraig/wowdata", "@davidcraig/tailwind-nextjs-tsx"],

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  webpack(config) {
    config.resolve.alias["@nsfa/Components"] = path.resolve(
      __dirname,
      "Components",
    );
    config.resolve.alias["@nsfa/data"] = path.resolve(__dirname, "data");
    return config;
  },
};

module.exports = nextConfig;

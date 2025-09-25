/**
 * @type {import('next').NextConfig}
 */

const path = require('path');

const nextConfig = {
  output: 'export',

  transpilePackages: ['@davidcraig/wowdata'],
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  webpack(config) {
    config.resolve.alias['@nsfa/Components'] = path.resolve(__dirname, 'Components');
    return config;
  }
}
 
module.exports = nextConfig

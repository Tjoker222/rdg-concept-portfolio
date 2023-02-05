/** @type {import('next').NextConfig} */
const nextTranslate = require("next-translate");

module.exports = nextTranslate({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com"],
  },
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
});

/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s3.legendsofvenari.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "components/slider")],
  },
};

module.exports = nextConfig;

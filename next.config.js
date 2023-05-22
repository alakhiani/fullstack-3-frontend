/** @type {import('next').NextConfig} */

require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd33wubrfki0l68.cloudfront.net',
      },
    ],
  },
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
};

module.exports = nextConfig;
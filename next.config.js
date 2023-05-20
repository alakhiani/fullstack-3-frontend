/** @type {import('next').NextConfig} */

require("dotenv").config();

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [      
      {
        protocol: "https",
        hostname: "d33wubrfki0l68.cloudfront.net",               
      }
    ]
  }
}

module.exports = nextConfig

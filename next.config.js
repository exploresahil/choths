/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/",
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
      },
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;

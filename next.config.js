/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optional: Add a trailing slash to URLs
  // trailingSlash: true,
  // Optional: Configure base path if your GitHub Pages URL has a subdirectory
  // basePath: '/AppInatel',
  images: {
    unoptimized: true, // Required for static export if you use next/image
  },
};

module.exports = nextConfig;
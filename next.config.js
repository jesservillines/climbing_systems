/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // Optimized for Netlify deployment
  output: 'standalone',
}

module.exports = nextConfig

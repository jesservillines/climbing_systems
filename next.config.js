/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  // This setting ensures compatibility with Netlify's serverless functions
  target: process.env.NETLIFY ? 'serverless' : undefined,
}

module.exports = nextConfig

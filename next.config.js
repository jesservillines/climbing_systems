/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  optimizeFonts: true,
  productionBrowserSourceMaps: false,
  images: {
    domains: ['alpinisthub.com'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    // Only enable this for local development, use optimized in production
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // Optimized for Netlify deployment
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  // Generate a sitemap.xml and robots.txt during the build
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ];
  },
}

module.exports = nextConfig

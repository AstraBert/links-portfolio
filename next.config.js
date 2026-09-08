/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  basePath: process.env.PAGES_BASE_PATH || '',
  assetPrefix: process.env.PAGES_BASE_PATH || '',
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Configure base path for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/hotel-gy' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hotel-gy/' : '',
}

export default nextConfig

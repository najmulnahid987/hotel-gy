/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
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
  // This will be set automatically by GitHub Actions
  basePath: process.env.NODE_ENV === 'production' ? process.env.BASE_PATH || '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? process.env.BASE_PATH || '' : '',
  // Disable server-side features for static export
  experimental: {
    esmExternals: 'loose'
  }
}

export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  assetPrefix: '/',
  compiler: {
    removeConsole: true,
  },
  swcMinify: true,
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', '@radix-ui/react-dropdown-menu', 'framer-motion'],
    scrollRestoration: true
  }
};

module.exports = nextConfig;
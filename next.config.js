/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['github.com', 'linkedin.com'],
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://your-portfolio-url.com',
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeFonts: true,
  },
}

module.exports = nextConfig

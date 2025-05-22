/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Specify Next.js 14 compatibility settings
  experimental: {
    // Next.js 14 specific features
    serverActions: true,
  },
}

export default nextConfig

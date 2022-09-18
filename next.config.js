/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      unoptimized: true,
      allowFutureImage: true
    }
  },
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig

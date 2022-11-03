// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // basePath: '/CleanCityDubai',
//   // assetPrefix: '/CleanCityDubai',
//   reactStrictMode: true,
//   swcMinify: true,
//   experimental: {
//     newNextLinkBehavior: true,
//     scrollRestoration: true,
//     images: {
//       unoptimized: true,
//       allowFutureImage: true
//     }
//   },
//   images: {
//     loader: 'akamai',
//     path: '',
//   },
// }
//
// module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
    images: {
      allowFutureImage: true,
      loader: 'akamai',
      path: '',
    }
  },
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig


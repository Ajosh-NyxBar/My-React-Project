/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.rawg.io'],
  },
  publicRuntimeConfig: {
    REACT_APP_KEY: '807e38dfea19457fa3ade12126e275df'
  }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/merchant-ops-agent-V1.1',
  assetPrefix: '/merchant-ops-agent-V1.1/',
  trailingSlash: true
}

module.exports = nextConfig


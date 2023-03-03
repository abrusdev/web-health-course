/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.resolve.fallback = {
      fs: false,
      path: false,
    };

    return config;
  },
  optimization: {
    minimize: true,
  },
  experimental: {
    esmExternals: true,
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

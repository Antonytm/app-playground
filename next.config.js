/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"standalone",
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

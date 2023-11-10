/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "colabs.yourcreative.com.au",
      },
    ],
  },
};

module.exports = nextConfig;

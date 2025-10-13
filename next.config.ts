/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // ✅ لازم السطر ده
      },
    ],
  },
};

module.exports = nextConfig;

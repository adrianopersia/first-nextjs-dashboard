/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "instagram.fmdz4-1.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;

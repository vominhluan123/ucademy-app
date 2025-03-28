/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "szvqvzy6du.ufs.sh",
      },
    ],
  },
};

export default nextConfig;

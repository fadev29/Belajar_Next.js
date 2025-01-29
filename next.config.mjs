/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
/** file next.config dibuat otomatis di root project untuk mengatur konfigurasi tambahan di pr
 * project nextjs https://
 */

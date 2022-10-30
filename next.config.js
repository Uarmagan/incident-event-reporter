/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.dicebear.com',
        port: '',
        pathname: '/api/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/events',
        permanent: true,
      },
    ];
  },
};

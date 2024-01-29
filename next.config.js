/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'www.datocms-assets.com',
      'encrypted-tbn0.gstatic.com',
      'sg360.sungod.co',
    ], // Add the hostname to the 'domains' array
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.datocms-assets.com',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/*',
      },
      {
        protocol: 'https',
        hostname: 'sg360.sungod.co',
        port: '',
        pathname: '/*',
      },
    ],
  },
};

module.exports = nextConfig;

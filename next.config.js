/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/abc",
        destination: "/",
        permanent: true,
      },
      {
        source: "/bca",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

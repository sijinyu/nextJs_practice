/** @type {import('next').NextConfig} */

const API_KEY = process.env.APP_KEY;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: () => {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  rewrites: () => {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};
module.exports = nextConfig;

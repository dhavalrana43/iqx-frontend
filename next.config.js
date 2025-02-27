/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["stagingadmin.iqbusiness.net", "iqbusiness-backend.onrender.com"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**/*",
      },
      {
        protocol: "https",
        hostname: "iqbusiness-backend.onrender.com",
        pathname: "/uploads/**/*",
      },
      {
        protocol: "https",
        hostname: "app.requestly.io",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "stagingadmin.iqbusiness.net",
        pathname: "/uploads/**/*",
      },
    ],
  },
};

module.exports = nextConfig;

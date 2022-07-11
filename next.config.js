/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: [
      "img.dummyapi.io",
      "randomuser.me",
      "source.unsplash.com",
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googlelapis.com",
    ],
  },
};

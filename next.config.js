// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "www.notion.so",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
// }

// module.exports = nextConfig
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.notion.so",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: 's3.us-west-2.amazonaws.com',
        port: "",
        pathname: "/**",
      }
    ],
  },
}
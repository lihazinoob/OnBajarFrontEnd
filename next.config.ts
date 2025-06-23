import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains:["res.cloudinary.com"]
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["res.cloudinary.com"], // 👈 Allow Cloudinary images
//   },
// };

// module.exports = nextConfig;

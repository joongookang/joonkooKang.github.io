/** @type {import('next').NextConfig} */
const prefix =
  process.env.NODE_ENV === "production"
    ? "https://joongookang.github.io/joonkooKang.github.io/"
    : "";
const nextConfig = {
  //output: "export",
  //assetPrefix: prefix,
  // basePath: "/joonkooKang.github.io",
};

export default nextConfig;

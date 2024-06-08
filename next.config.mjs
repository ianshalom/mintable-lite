/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
  images: {
    // domains: ['avatars.githubusercontent.com']
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      // {
      //   protocol: "https",
      //   hostname:
      //     "ipfs://bafybeidopy3ixbzmdihpw3cps5octclnpu5ewrkxuk7s4zzybnv5vrrgp4/1",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "arweave.net",
      //   port: "",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname:
      //     "bafybeihn4tzyzsmihfejsekhftwhbid4inn6bw43zv7gjgpucsn6aco7ka.ipfs.nftstorage.link",
      //   port: "",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "i.seadn.io",
      //   port: "",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "images.squarespace-cdn.com",
      //   port: "",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "encrypted-tbn0.gstatic.com",
      //   port: "",
      //   pathname: "/**",
      // },
      // {
      //   protocol: "https",
      //   hostname: "support.bitmart.com",
      //   port: "",
      //   pathname: "/**",
      // },
    ],
  },
};
export default nextConfig;

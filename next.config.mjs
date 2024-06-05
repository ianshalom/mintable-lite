/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['avatars.githubusercontent.com']
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ipfs.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "arweave.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname:
          "bafybeihn4tzyzsmihfejsekhftwhbid4inn6bw43zv7gjgpucsn6aco7ka.ipfs.nftstorage.link",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.seadn.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
export default nextConfig;

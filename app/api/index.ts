import axios from "axios";
import { PROMO_MOCK_DATA } from "./mockData";
// Alchemy API key
const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
// Alchemy URL
const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTsForCollection`;

// Get contract addresses of multiple nft owners for generating real nfts
const jakeInezAddress = "0x7b0500fdc298e7f3a26d4cfab87606779680b7db";
const womanUniteAddress = "0xbee7cb80dfd21a9eaae714208f361601f68eb746";
const schizoPosterAddress = "0xbfe47d6d4090940d1c7a0066b63d23875e3e2ac5";
const shrapnelOperatorsCollectionAddress =
  "0xfc8a98c22a9e32948ab028414d67c62c49b16864";
const babyDogeAddress = "0xd9f092bdf2b6eaf303fc09cc952e94253ae32fae";

const withMetadata = "true";
const limit = 30;

const jakeInezUrl = `${baseURL}?contractAddress=${jakeInezAddress}&withMetadata=${withMetadata}&limit=${limit}`;
const womenUniteUrl = `${baseURL}?contractAddress=${womanUniteAddress}&withMetadata=${withMetadata}&limit=${limit}`;
const schizoPosterUrl = `${baseURL}?contractAddress=${schizoPosterAddress}&withMetadata=${withMetadata}&limit=${limit}`;
const shrapnelPosterUrl = `${baseURL}?contractAddress=${shrapnelOperatorsCollectionAddress}&withMetadata=${withMetadata}&limit=${limit}`;
const babyDogeUrl = `${baseURL}?contractAddress=${babyDogeAddress}&withMetadata=${withMetadata}&limit=${limit}`;

const nftAddresses = [
  {
    name: "Jake Inez",
    url: jakeInezUrl,
    id: "jakeinez",
    promoData: PROMO_MOCK_DATA.JAKE_INEZ,
  },
  // { name: "Women Unite", url: womenUniteUrl },
  {
    name: "Schizo Poster",
    url: schizoPosterUrl,
    id: "schizoposter",
    promoData: PROMO_MOCK_DATA.SCHIZO_POSTER,
  },
  // { name: "Shrapnel Poster", url: shrapnelPosterUrl },
  {
    name: "Baby Doge",
    url: babyDogeUrl,
    id: "babydoge",
    promoData: PROMO_MOCK_DATA.BABY_DOGE,
  },
];

// For fetching real NFTs to populate in marketplace.
export const getNftData = async () => {
  const results = await Promise.all(
    nftAddresses.map(async ({ url, name, id, promoData }) => ({
      name,
      id,
      promoData,
      data: (await axios.get(url)).data.nfts,
    }))
  );

  return results;
};

import axios from "axios";
import { PROMO_MOCK_DATA } from "./mockData";
import { ContractInfoForUserModeProps } from "../interfaces/collections.interface";
// Alchemy API key
const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
// Alchemy URL
const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTsForCollection`;
// Get contract addresses of multiple nft owners for generating real nfts
const jakeInezAddress = "0x7b0500fdc298e7f3a26d4cfab87606779680b7db";
const schizoPosterAddress = "0xbfe47d6d4090940d1c7a0066b63d23875e3e2ac5";
const babyDogeAddress = "0xd9f092bdf2b6eaf303fc09cc952e94253ae32fae";

const withMetadata = "true";
const limit = 30;

const jakeInezUrl = `${baseURL}?contractAddress=${jakeInezAddress}&withMetadata=${withMetadata}&limit=${limit}`;
const schizoPosterUrl = `${baseURL}?contractAddress=${schizoPosterAddress}&withMetadata=${withMetadata}&limit=${limit}`;
const babyDogeUrl = `${baseURL}?contractAddress=${babyDogeAddress}&withMetadata=${withMetadata}&limit=${limit}`;

const nftAddressesForMarketPlace = [
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
    nftAddressesForMarketPlace.map(async ({ url, name, id, promoData }) => ({
      name,
      id,
      promoData,
      data: (await axios.get(url)).data.nfts,
    }))
  );
  return results;
};

export const getNftDataOfUser = async (info: ContractInfoForUserModeProps) => {
  const { id, name, contractAddress } = info;
  const url = `${baseURL}?contractAddress=${contractAddress}&withMetadata=${withMetadata}&limit=8`;
  const response = await axios.get(url);
  const nftData = [{ data: response.data.nfts, id, name, contractAddress }];
  return nftData;
};

export const getNFTMetaData = async (
  contractAddress: string,
  tokenId: string
) => {
  const baseURLNFTMetadata = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenId}`;
  const response = await axios.get(baseURLNFTMetadata);
  return response.data.metadata;
};

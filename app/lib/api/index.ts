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
const whereMyVansGoAddress = "0x509a050f573be0d5e01a73c3726e17161729558b";
const terraformsByMathcastlesAddress =
  "0x4e1f41613c9084fdb9e34e11fae9412427480e56";
const crypToadzAddress = "0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6";

const withMetadata = "true";
const limit = 30;

const jakeInezUrl = `${baseURL}?contractAddress=${jakeInezAddress}&withMetadata=${withMetadata}&limit=${limit}`;
const schizoPosterUrl = `${baseURL}?contractAddress=${schizoPosterAddress}&withMetadata=${withMetadata}&limit=${limit}`;
const babyDogeUrl = `${baseURL}?contractAddress=${babyDogeAddress}&withMetadata=${withMetadata}&limit=${limit}`;
const whereMyVansGoUrl = `${baseURL}?contractAddress=${whereMyVansGoAddress}&withMetadata=${withMetadata}&limit=${limit}`;
const terraformsByMathcastlesUrl = `${baseURL}?contractAddress=${terraformsByMathcastlesAddress}&withMetadata=${withMetadata}&limit=${limit}`;
const crypToadzUrl = `${baseURL}?contractAddress=${crypToadzAddress}&withMetadata=${withMetadata}&limit=${limit}`;

const nftAddressesForMarketPlace = [
  {
    url: schizoPosterUrl,
    promoData: PROMO_MOCK_DATA.SCHIZO_POSTER,
  },
  {
    url: babyDogeUrl,
    promoData: PROMO_MOCK_DATA.BABY_DOGE,
  },
  {
    url: whereMyVansGoUrl,
    promoData: PROMO_MOCK_DATA.BABY_DOGE,
  },
  {
    url: terraformsByMathcastlesUrl,
    promoData: PROMO_MOCK_DATA.BABY_DOGE,
  },
  {
    url: crypToadzUrl,
    promoData: PROMO_MOCK_DATA.BABY_DOGE,
  },
];

// For fetching real NFTs to populate in marketplace.
export const getNftData = async () => {
  const results = await Promise.all(
    nftAddressesForMarketPlace.map(async ({ url, promoData }) => ({
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
  const url = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTMetadata?contractAddress=${contractAddress}&tokenId=${tokenId}`;
  const response = await axios.get(url);
  return response.data.metadata;
};

export const getNFTCollectionBySlug = async (slug: string) => {
  const url = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getCollectionMetadata?collectionSlug=${slug}`;
  const response = await axios
    .get(url)
    .then()
    .catch((err) => console.log(err));
  return response?.data;
};

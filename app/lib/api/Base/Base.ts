import axios from "axios";
// Alchemy API key
const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
// Alchemy URL
export const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}`;
export const instance = axios.create({
  baseURL,
});
export class BaseApi {
  constructor(protected readonly axios = instance) {}
}

export default BaseApi;

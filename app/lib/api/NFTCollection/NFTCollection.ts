import BaseApi from "../Base/Base";
import { MINTABLE_LITE_MARKETPLACE_ADDRESSES } from "../mockData";
import { ContractInfoForUserModeProps } from "../../interfaces/collections.interface";

const withMetadata = "true";

export class NFTCollectionApi extends BaseApi {
  constructor(protected readonly apiPath = "/getNFTsForCollection") {
    super();
  }

  public async getNftDataForMarketplace() {
    const results = await Promise.all(
      MINTABLE_LITE_MARKETPLACE_ADDRESSES.map(async ({ url, promoData }) => ({
        promoData,
        data: (await this.axios.get(`${this.apiPath}${url}`)).data.nfts,
      }))
    );
    return results;
  }

  public async getNftDataOfUser(info: ContractInfoForUserModeProps) {
    const { id, name, contractAddress } = info;
    const response = await this.axios.get(
      `${this.apiPath}?contractAddress=${contractAddress}&withMetadata=${withMetadata}&limit=8`
    );

    const nftData = [{ data: response.data.nfts, id, name, contractAddress }];
    return nftData;
  }
}

export default NFTCollectionApi;

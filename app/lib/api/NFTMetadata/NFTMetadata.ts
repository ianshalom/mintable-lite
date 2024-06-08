import BaseApi from "../Base/Base";

export class NFTMetadataApi extends BaseApi {
  constructor(protected readonly apiPath = "/getNFTMetadata") {
    super();
  }

  public async getNFTMetaData(contractAddress: string, tokenId: string) {
    const response = await this.axios.get(
      `${this.apiPath}?contractAddress=${contractAddress}&tokenId=${tokenId}`
    );
    return response.data.metadata;
  }
}

export default NFTMetadataApi;

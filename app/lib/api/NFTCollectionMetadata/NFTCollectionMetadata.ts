import BaseApi from "../Base/Base";

export class NFTCollectionMetadataApi extends BaseApi {
  constructor(protected readonly apiPath = "/getCollectionMetadata") {
    super();
  }

  public async getNFTCollectionBySlug(slug: string) {
    const response = await this.axios.get(
      `${this.apiPath}?collectionSlug=${slug}`
    );
    return response.data;
  }
}

export default NFTCollectionMetadataApi;

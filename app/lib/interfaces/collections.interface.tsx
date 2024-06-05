export interface NFTDataProps {
  id: string;
  contractAddress: string;
  collectionDescription: string;
  collectionName: string;
  bannerImageUrl: string;
  lastUpdated: string;
  tokenType: string;
  twitterUsername: string;
  externalUrl: string;
  name: string;
  description: string;
  image: string;
  owner: string;
  price: number;
  slug: string;
}

export interface OwnerMetadataProps {
  contractAddress: string;
  collectionDescription: string;
  collectionName: string;
  bannerImageUrl: string;
  externalUrl: string;
  twitterUsername: string;
}
export interface CollectionsProps {
  name: string;
  contractAddress: string;
  ownerMetadata: OwnerMetadataProps;
  data: NFTDataProps[];
  id: string;
}

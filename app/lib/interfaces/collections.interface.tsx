export type TransactionStatusProps = "Listed" | "Sold" | "Not Listed";

export interface NFTDataProps {
  id: string;
  contractAddress: string;
  collectionDescription: string;
  collectionName: string;
  bannerImageUrl: string;
  lastUpdated: Date;
  tokenType: string;
  twitterUsername: string;
  externalUrl: string;
  name: string;
  description: string;
  image: string;
  owner: string;
  price: number;
  slug: string;
  transactionStatus: TransactionStatusProps;
}

export interface OwnerMetadataProps {
  contractAddress: string;
  collectionDescription: string;
  collectionName: string;
  bannerImageUrl: string;
  externalUrl: string;
  twitterUsername: string;
}

export interface ContractInfoForUserModeProps {
  name: string;
  id: string;
  contractAddress: string;
}

export interface PromoDataProps {
  description: string;
  imageUrl: string;
  cta: string;
  altText: string;
}
export interface CollectionsProps {
  name: string;
  contractAddress: string;
  metadata: OwnerMetadataProps;
  data: NFTDataProps[];
  slug: string;
  id: string;
  promoData?: PromoDataProps;
}

export interface NFTMetadataProps {
  image: string;
  image_details: {
    format: string;
    width: number;
    sha256: string;
    bytes: number;
    height: number;
  };
  image_url: string;
  name: string;
  description: string;
  attributes?: [{ value: string; trait_type: string }];
  created_by: string;
}

export interface NFTCollectionProps {
  name: string;
  slug: string;
  bannerImageUrl: string;
  floorPrice?: {};
  description: string;
  twitterUsername: string;
}

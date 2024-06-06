export type TransactionStatusProps = "Listed" | "Sold" | "Not Listed";

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
  ownerMetadata: OwnerMetadataProps;
  data: NFTDataProps[];
  id: string;
  promoData?: PromoDataProps;
}

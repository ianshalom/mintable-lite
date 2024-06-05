export interface NFTDataProps {
  id: string;
  name: string;
  image: string;
  collection: string;
  owner: string;
  price: number;
}

export interface CollectionsProps {
  name: string;
  id: string;
  data: NFTDataProps[];
}

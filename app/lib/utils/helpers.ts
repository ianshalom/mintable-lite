import {
  NFTDataProps,
  TransactionStatusProps,
} from "../interfaces/collections.interface";

export const shuffleArrayFunc = (array: NFTDataProps[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const formatNFTResponse = (
  nftCollection: any,
  transactionStatus?: TransactionStatusProps
) => {
  const data = nftCollection.map((collection: any) => {
    const array = collection.data.map((nft: any) => {
      const obj = {
        contractAddress: nft.contract?.address,
        collectionDescription: nft.contractMetadata?.openSea.description,
        collectionName: nft.contractMetadata?.openSea.collectionName,
        bannerImageUrl: nft.contractMetadata?.openSea.bannerImageUrl,
        externalUrl: nft.metadata?.external_url,
        twitterUsername: nft.contractMetadata?.openSea.twitterUsername,
        id: nft.id.tokenId,
        lastUpdated: nft.timeLastUpdated,
        tokenType: nft.contractMetadata.tokenType,
        name: nft.metadata?.name,
        image: nft.metadata?.image || nft.metadata?.image_url,
        description: nft.metadata?.description,
        transactionStatus: transactionStatus ? transactionStatus : "Listed",
        price:
          Math.floor(Math.random() * (5 * 100 - 1 * 100) + 1 * 100) / (1 * 100),
        owner: nft.contractMetadata?.name || nft.metadata?.created_by,
        slug: collection.id,
      };
      return obj;
    });

    const userMetadata = {
      contractAddress: array[0].contractAddress,
      collectionDescription: array[0].collectionDescription,
      collectionName: array[0].collectionName,
      bannerImageUrl: array[0].bannerImageUrl,
      externalUrl: array[0].externalUrl,
      twitterUsername: array[0].twitterUsername,
    };
    return {
      name: array[0].owner,
      data: array,
      contractAddress: array[0].contractAddress,
      metadata: userMetadata,
      id: collection.id,
      promoData: collection?.promoData,
    };
  });
  return data;
};

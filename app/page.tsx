import { Suspense } from "react";
import { getNftData } from "./api";
import MarketPlace from "./MarketPlace";
import LoadingComponent from "./components/LoadingComponent";
import { v4 as uuidv4 } from "uuid";

export default async function Home() {
  const response = await getNftData();

  const data = response.map((collection: any) => {
    const array = collection.data.map((nft: any) => {
      const obj = {
        contractAddress: nft.contract?.address,
        collectionDescription: nft.contractMetadata?.openSea.description,
        collectionName: nft.contractMetadata?.openSea.collectionName,
        bannerImageUrl: nft.contractMetadata?.openSea.bannerImageUrl,
        externalUrl: nft.metadata?.external_url,
        twitterUsername: nft.contractMetadata?.openSea.twitterUsername,
        id: uuidv4(),
        lastUpdated: nft.timeLastUpdated,
        tokenType: nft.contractMetadata.tokenType,
        name: nft.metadata?.name,
        image: nft.metadata?.image || nft.metadata?.image_url,
        description: nft.metadata?.description,
        price: Number(Math.random().toFixed(2)),
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
      ownerMetadata: userMetadata,
      id: collection.id,
    };
  });

  return (
    <Suspense fallback={<LoadingComponent text="Loading..." />}>
      <main className="flex w-full px-6 md:p-0 md:w-4/6 mx-auto flex-col mt-20">
        <MarketPlace nftData={data} />
      </main>
    </Suspense>
  );
}

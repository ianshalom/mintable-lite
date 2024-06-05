import { getNftData } from "./api";
import MarketPlace from "./MarketPlace";

export default async function Home() {
  const response = await getNftData();
  const data = response.map((collection: any) => {
    const array = collection.data.map((nft: any) => {
      const obj = {
        name: nft.metadata?.name,
        image: nft.metadata?.image || nft.metadata?.image_url,
        description: nft.metadata?.description,
        price: Number(Math.random().toFixed(2)),
        owner: nft.contractMetadata?.name || nft.metadata?.created_by,
        collection: collection.name,
      };
      return obj;
    });

    return { name: collection.name, data: array };
  });
  return (
    <main className="flex min-h-screen w-full px-6 md:p-0 md:w-4/6 mx-auto flex-col mt-24">
      <h1 className="font-bold text-xl">Mintable Lite Marketplace</h1>
      <MarketPlace nftData={data} />
    </main>
  );
}

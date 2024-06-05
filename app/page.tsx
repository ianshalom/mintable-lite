import { getNftData } from "./api";
import MarketPlace from "./MarketPlace";
export default async function Home() {
  const data = await getNftData();
  return (
    <main className="flex min-h-screen w-full px-6 md:p-0 md:w-4/6 mx-auto flex-col mt-24">
      <h1>Mintable Lite Marketplace</h1>
      <MarketPlace nftData={data} />
    </main>
  );
}

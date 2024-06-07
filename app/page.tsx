import { Suspense } from "react";
import { getNftData } from "./lib/api";
import MarketPlace from "./MarketPlace";
import LoadingComponent from "./components/LoadingComponent";
import TopNav from "./TopNav";
import { formatNFTResponse } from "./lib/utils/helpers";

export default async function Home() {
  const response = await getNftData();

  const data = formatNFTResponse(response);

  return (
    <Suspense fallback={<LoadingComponent text="Loading..." />}>
      <main className="flex w-full px-6 md:p-0 md:w-4/6 mx-auto flex-col mt-20">
        <TopNav />
        <MarketPlace nftData={data} />
      </main>
    </Suspense>
  );
}

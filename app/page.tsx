import { Suspense } from "react";
import { getNftData } from "./api";
import MarketPlace from "./MarketPlace";
import LoadingComponent from "./components/LoadingComponent";
import { v4 as uuidv4 } from "uuid";
import { formatNFTResponse } from "./lib/utils/helpers";

export default async function Home() {
  const response = await getNftData();

  const data = formatNFTResponse(response);

  return (
    <Suspense fallback={<LoadingComponent text="Loading..." />}>
      <main className="flex w-full px-6 md:p-0 md:w-4/6 mx-auto flex-col mt-20">
        <MarketPlace nftData={data} />
      </main>
    </Suspense>
  );
}

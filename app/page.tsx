import { getNftData } from "./lib/api";
import MarketPlace from "./MarketPlace";
import { formatNFTResponse } from "./lib/utils/helpers";

export default async function Home() {
  const response = await getNftData();

  const data = formatNFTResponse(response);

  return (
    <main className="flex w-full px-6 md:p-0 mx-auto flex-col">
      <MarketPlace nftData={data} />
    </main>
  );
}

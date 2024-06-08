import MarketPlace from "./MarketPlace";
import { formatNFTResponse } from "./lib/utils/helpers";
import NFTCollectionApi from "./lib/api/NFTCollection/NFTCollection";

export default async function Home() {
  const nftCollectionMarketplaceApi = new NFTCollectionApi();
  const nftCollection =
    await nftCollectionMarketplaceApi.getNftDataForMarketplace();

  const data = formatNFTResponse(nftCollection);

  return (
    <main className="flex w-full px-6 md:p-0 mx-auto flex-col">
      <MarketPlace nftData={data} />
    </main>
  );
}

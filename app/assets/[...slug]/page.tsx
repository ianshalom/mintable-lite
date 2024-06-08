import { Suspense } from "react";

import LoadingComponent from "@/app/components/LoadingComponent";
import NFTDetailsDisplay from "@/app/components/NFTDetailsDisplay";
import NFTMetadataApi from "@/app/lib/api/NFTMetadata/NFTMetadata";

export default async function NFTDetailsPage({
  params,
}: {
  params: { slug: [contractAddress: string, id: string] };
}) {
  const { slug } = params;
  const [contractAddress, id] = slug;

  const metadataApi = new NFTMetadataApi();
  const nftMetadata = await metadataApi.getNFTMetaData(contractAddress, id);

  return (
    <Suspense fallback={<LoadingComponent text="Loading..." />}>
      <main className="flex w-full px-6 md:p-0 mx-auto flex-col">
        <NFTDetailsDisplay
          id={id}
          nftMetadata={nftMetadata}
          contractAddress={contractAddress}
        />
      </main>
    </Suspense>
  );
}

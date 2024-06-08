import NFTCardsDisplay from "@/app/components/NFTCardsDisplay";
import { Suspense } from "react";
import LoadingComponent from "@/app/components/LoadingComponent";
import NFTCollectionMetadataApi from "../../lib/api/NFTCollectionMetadata/NFTCollectionMetadata";

export default async function CollectionsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const nftCollectionMetaApi = new NFTCollectionMetadataApi();
  const collectionData = await nftCollectionMetaApi.getNFTCollectionBySlug(
    slug
  );

  return (
    <Suspense fallback={<LoadingComponent text="Loading..." />}>
      <main className="flex w-full px-6 md:p-0 mx-auto flex-col">
        <NFTCardsDisplay slug={params.slug} collectionData={collectionData} />
      </main>
    </Suspense>
  );
}

import NFTCardsDisplay from "@/app/components/NFTCardsDisplay";
import { Suspense } from "react";
import LoadingComponent from "@/app/components/LoadingComponent";

export default async function CollectionsPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <Suspense fallback={<LoadingComponent text="Loading..." />}>
      <main className="flex w-full px-6 md:p-0 mx-auto flex-col">
        <NFTCardsDisplay slug={params.slug} />
      </main>
    </Suspense>
  );
}

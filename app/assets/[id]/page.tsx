import { Suspense } from "react";

import LoadingComponent from "@/app/components/LoadingComponent";
import NFTDetailsDisplay from "@/app/components/NFTDetailsDisplay";

export default async function NFTDetailsPage({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const { id, slug } = params;
  return (
    <Suspense fallback={<LoadingComponent text="Loading..." />}>
      <main className="flex w-full px-6 md:p-0 md:w-4/6 mx-auto flex-col mt-24">
        <NFTDetailsDisplay id={id} slug={slug} />
      </main>
    </Suspense>
  );
}
"use client";

import React from "react";
import { useAppSelector } from "../lib/hooks";
import {
  useSelectNFTInfoById,
  useSelectCollectionByOwnerId,
} from "../lib/features/collections/collectionsSlice";
import Image from "next/image";
import LoadingComponent from "./LoadingComponent";
import GeneralDisplay from "./GeneralDisplay";

export default function NFTDetailsPage({
  id,
  slug,
}: {
  id: string;
  slug: string;
}) {
  const nftData = useAppSelector(
    useSelectNFTInfoById({
      payload: id,
      type: "useSelectCollectionByOwnerId",
    })
  );

  const collectionDataByOwner = useAppSelector(
    useSelectCollectionByOwnerId({
      payload: slug,
      type: "useSelectCollectionByOwnerId",
    })
  );

  if (!nftData || !collectionDataByOwner)
    return <LoadingComponent text="Loading..." />;
  const { name, image, collection, owner, description, price } = nftData;
  console.log("collectionDataByOwner", collectionDataByOwner);

  return (
    <div className="h-full flex flex-col">
      <div className="flex mb-8">
        <div className="shrink mr-12 aspect-square rounded-xl shadow-lg hover:shadow-xl">
          <div className="aspect-square rounded-xl overflow-hidden">
            <Image
              alt={owner}
              src={image}
              height={200}
              width={600}
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-between">
          <div>
            <p className="mb-4">{collection}</p>
            <p className="font-bold text-xl mb-6">{name}</p>
            <p className="mb-4">Owned by {owner}</p>
            <p className="mb-4">Description: {description}</p>
          </div>
          <div className="w-full h-[150px] bg-gray-100 rounded-md border-2"></div>
        </div>
      </div>
      <div className="py-8">
        <GeneralDisplay
          key={collectionDataByOwner.id}
          slug={collectionDataByOwner.id}
          header="More from this collection"
          nftData={collectionDataByOwner.data}
        />
      </div>
    </div>
  );
}

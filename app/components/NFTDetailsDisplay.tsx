"use client";

import React from "react";
import { useAppSelector } from "../lib/hooks";
import { useSelectNFTInfoById } from "../lib/features/collections/collectionsSlice";
import Image from "next/image";
import LoadingComponent from "./LoadingComponent";

export default function NFTDetailsPage({ id }: { id: string }) {
  const nftData = useAppSelector(
    useSelectNFTInfoById({
      payload: id,
      type: "useSelectCollectionByOwnerId",
    })
  );

  if (!nftData) return <LoadingComponent text="Loading..." />;
  console.log("NFTDATA: ", nftData);
  const { name, image, collection, owner, description, price } = nftData;
  return (
    <div className="h-full">
      <div className="flex">
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
    </div>
  );
}

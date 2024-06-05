"use client";

import React from "react";
import { useAppSelector } from "../lib/hooks";
import {
  useSelectNFTInfoById,
  useSelectCollectionByOwnerId,
} from "../lib/features/collections/collectionsSlice";
import Image from "next/image";
import LoadingComponent from "./LoadingComponent";
import NFTRowDisplay from "./NFTRowDisplay";
import Link from "next/link";

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
  const {
    name,
    image,
    collection,
    owner,
    description,
    price,
    contractAddress,
    tokenType,
    lastUpdated,
  } = nftData;
  console.log("collectionDataByOwner", collectionDataByOwner);
  console.log("nftData", nftData);

  return (
    <div className="h-full flex flex-col">
      <div className="flex mb-8">
        <div className="shrink mr-12 aspect-square rounded-xl shadow-lg hover:shadow-xl">
          <div className="aspect-square rounded-xl overflow-hidden">
            <Image
              alt={owner}
              src={image}
              height={200}
              width={800}
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-between">
          <div>
            <p className="mb-4">{collection}</p>
            <p className="font-bold text-xl mb-6">{name}</p>
            <p className="mb-4">
              Owned by{" "}
              <span className="underline text-blue-400">
                <Link href={`/collections/${collectionDataByOwner.id}`}>
                  {owner}
                </Link>
              </span>
            </p>
            <p className="mb-4">Description: {description}</p>
          </div>
          <div>
            <p className="font-bold">Details</p>
            <div className="flex justify-between mb-4">
              <div>
                <p>Contract Address</p>
                <p>Token ID</p>
                <p>Token Standard</p>
                <p>Last Updated</p>
                <p></p>
              </div>
              <div>
                <p>{contractAddress}</p>
                <p>{nftData["id"]}</p>
                <p>{tokenType}</p>
                <p>{lastUpdated}</p>
              </div>
            </div>
          </div>
          <div className="w-full h-[150px] bg-gray-100 rounded-md border-2"></div>
        </div>
      </div>
      <div className="py-8">
        <NFTRowDisplay
          key={collectionDataByOwner.id}
          slug={collectionDataByOwner.id}
          header="More from this collection"
          nftData={collectionDataByOwner.data}
        />
      </div>
    </div>
  );
}

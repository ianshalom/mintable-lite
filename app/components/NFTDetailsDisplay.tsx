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
import parse from "html-react-parser";

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

  return (
    <div className="flex flex-col">
      <div className="flex mb-8">
        <div className="mr-12 rounded-xl hover:shadow-xl">
          <Image
            alt={owner}
            src={image}
            height={200}
            width={800}
            className="rounded-md"
          />
        </div>
        <div className="w-full flex flex-col justify-between">
          <div className="mb-4">
            <p className="font-bold text-4xl mb-6">{name}</p>
            <p className="mb-4">
              By{" "}
              <span className="underline text-blue-400">
                <Link href={`/collections/${collectionDataByOwner.id}`}>
                  {owner}
                </Link>
              </span>
            </p>
            <i>{description}</i>
          </div>
          <div className="mb-4">
            <p className="font-bold text-lg">
              <span className="text-blue-400">{price}</span> ETH
            </p>
            <button className="bg-sky-500 hover:bg-sky-600 px-12 py-2 rounded-full mt-4 text-white text-lg ">
              <span>Buy</span>
            </button>
          </div>
          <div className=" bg-gray-100 rounded-xl p-4 mb-4 flex">
            <div className="w-1/2 mr-14 flex flex-col justify-between">
              <div>
                <p className="font-bold text-red-400 text-lg">Special offer!</p>
                <p>{collectionDataByOwner.promoData.description}</p>
              </div>
              <p className="text-sm mb-4">
                {parse(collectionDataByOwner.promoData.cta)}
              </p>
            </div>
            <div className="h-full w-1/2 flex items-center">
              <Image
                alt={collectionDataByOwner.promoData.altText}
                src={collectionDataByOwner.promoData.imageUrl}
                height={100}
                width={150}
                className="object-cover rounded-md"
              />
            </div>
          </div>
          <div>
            <p className="font-bold">Details</p>
            <div className="flex mb-4">
              <div className="w-1/2 mr-8">
                <p>Contract Address</p>
                <p>Token ID</p>
                <p>Token Standard</p>
                <p>Last Updated</p>
              </div>
              <div>
                <p>{contractAddress}</p>
                <p>{nftData["id"]}</p>
                <p>{tokenType}</p>
                <p>{lastUpdated}</p>
              </div>
            </div>
          </div>
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

import React from "react";
import Link from "next/link";
import NFTCard from "./NFTCard";
import { NFTDataProps } from "../lib/interfaces/collections.interface";

export default function NFTRowDisplay({
  nftData,
  header,
  slug,
  displayCollection,
}: {
  header: string;
  slug?: string;
  nftData: NFTDataProps[];
  displayCollection?: boolean;
}) {
  const mappedNfts = nftData
    .map((collection) => {
      const hrefString = displayCollection
        ? `/collections/${collection.slug}`
        : `/assets//${collection.contractAddress}/${collection.id}`;
      return (
        <Link
          key={collection.name}
          href={hrefString}
          className="w-1/5 height-4/5"
        >
          <NFTCard
            collection={collection}
            displayCollection={displayCollection}
          />
        </Link>
      );
    })
    .slice(0, 5);

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between items-center font-bold mb-4">
        <p className="text-xl">{header}</p>
        {!displayCollection && (
          <span className="bg-gray-300 px-4 py-2 rounded-xl text-lg font-bold mb-4 hover:bg-gray-200 hover:cursor-pointer">
            <Link href={`/collections/${slug}`}>See more</Link>
          </span>
        )}
      </div>
      <div className="flex justify-between">
        {mappedNfts.length && mappedNfts}
      </div>
    </div>
  );
}

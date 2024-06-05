import React from "react";
import { useAppSelector } from "../lib/hooks";
import { useSelectShuffledData } from "../lib/features/collections/collectionsSlice";
import NFTCard from "./NFTCard";
import { NFTDataProps } from "../lib/interfaces/collections.interface";
import Link from "next/link";

export default function GeneralDisplay({
  nftData,
  header,
  slug,
}: {
  header: string;
  slug?: string;
  nftData: NFTDataProps[];
}) {
  const mappedNfts = nftData
    .map((collection) => {
      return <NFTCard key={collection.name} collection={collection} />;
    })
    .slice(0, 5);

  return (
    <div>
      {!mappedNfts.length ? (
        <p>Sorry, there are currently no NFTs listed on the marketplace</p>
      ) : (
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center font-bold mb-4">
            <p className="text-xl">{header}</p>
            <span className="bg-gray-300 px-4 py-2 rounded-xl text-lg font-bold mb-4 hover:bg-gray-200 hover:cursor-pointer">
              <Link href={`/collections/${slug}.com`}>See more</Link>
            </span>
          </div>
          <div className="h-full flex justify-between">
            {mappedNfts.length && mappedNfts}
          </div>
        </div>
      )}
    </div>
  );
}

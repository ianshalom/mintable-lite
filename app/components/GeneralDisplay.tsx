import React from "react";
import Link from "next/link";
import NFTCard from "./NFTCard";
import { NFTDataProps } from "../lib/interfaces/collections.interface";

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
      return (
        <Link
          key={collection.id}
          href={`/collections/${slug}.mintable-lite.com/nft-details/${collection.id}`}
        >
          <NFTCard collection={collection} />
        </Link>
      );
    })
    .slice(0, 5);

  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center font-bold mb-4">
          <p className="text-xl">{header}</p>
          <span className="bg-gray-300 px-4 py-2 rounded-xl text-lg font-bold mb-4 hover:bg-gray-200 hover:cursor-pointer">
            {/** Appending .mintable-lite.com to simulate a subdomain for selected owner */}
            <Link href={`/collections/${slug}`}>See more</Link>
          </span>
        </div>
        <div className="h-full flex justify-between">
          {mappedNfts.length && mappedNfts}
        </div>
      </div>
    </div>
  );
}

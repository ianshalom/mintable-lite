"use client";

import React from "react";
import NFTCard from "./NFTCard";
import { useSelectCollectionByOwnerId } from "../lib/features/collections/collectionsSlice";
import { useAppSelector } from "../lib/hooks";
import Link from "next/link";

export default function NFTCardsDisplay({ slug }: { slug: string }) {
  const collectionByOwner = useAppSelector(
    useSelectCollectionByOwnerId({
      payload: slug,
      type: "useSelectCollectionByOwnerId",
    })
  );

  // May need to explore using redux-persist for page refresh
  if (!collectionByOwner) return;
  const { name, data } = collectionByOwner;

  return (
    <div className="flex flex-col w-full">
      <div className="font-bold mb-4">
        <p className="text-xl">{name}</p>
      </div>
      <div className="h-full flex flex-wrap justify-between">
        {data.map((collection) => (
          <Link
            key={collection.name}
            href={`${slug}/nft-details/${collection.id}`}
          >
            <NFTCard collection={collection} />
          </Link>
        ))}
      </div>
    </div>
  );
}

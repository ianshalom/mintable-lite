"use client";

import React from "react";
import NFTCard from "./NFTCard";
import { useSelectCollectionByOwnerId } from "../lib/features/collections/collectionsSlice";
import { useAppSelector } from "../lib/hooks";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { NFTCollectionProps } from "../lib/interfaces/collections.interface";

export default function NFTCardsDisplay({
  slug,
  collectionData,
}: {
  slug: string;
  collectionData: NFTCollectionProps;
}) {
  const collectionByOwner = useAppSelector(
    useSelectCollectionByOwnerId({
      payload: slug,
      type: "useSelectCollectionByOwnerId",
    })
  );

  // May need to explore using redux-persist for page refresh
  if (!collectionByOwner) return;
  const { data } = collectionByOwner;

  const { description, name, twitterUsername, bannerImageUrl } = collectionData;

  return (
    <div className="flex flex-col w-full">
      <div className="w-full h-96 relative mb-8">
        <Image
          alt={`${name}-banner`}
          src={bannerImageUrl}
          fill
          objectFit="cover"
          className="rounded-md"
          quality={100}
        />
      </div>
      <div className="flex">
        <div className="w-1/2 h-32">
          <p className="truncate ... mb-4">{description}</p>
          <p className="mb-4">
            Items: <span className="font-bold">{data.length}</span>
          </p>
          <span>
            <a href={`https://twitter.com/${twitterUsername}`} target="_blank">
              <FaTwitter size={20} />
            </a>
          </span>
        </div>
      </div>

      <div className="font-bold mb-8">
        <p className="text-4xl">{name}</p>
      </div>
      <div className="h-full flex flex-wrap justify-between">
        {data.map((collection) => (
          <Link
            key={collection.name}
            href={`/assets/${collection.contractAddress}/${collection.id}`}
          >
            <NFTCard collection={collection} />
          </Link>
        ))}
      </div>
    </div>
  );
}

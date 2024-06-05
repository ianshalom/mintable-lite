import React from "react";
import { useAppSelector } from "../lib/hooks";
import { useSelectCollectionsData } from "../lib/features/collections/collectionsSlice";
import Image from "next/image";
import NFTCard from "./NFTCard";

export default function GeneralDisplay() {
  const collectionsData = useAppSelector(useSelectCollectionsData);

  const mappedNfts = collectionsData.map((collection) => {
    return <NFTCard key={collection.name} collection={collection} />;
  });

  return (
    <div className="flex">
      {!collectionsData.length ? (
        <p>Sorry, there are currently no NFTs listed on the marketplace</p>
      ) : (
        <div className="h-full flex flex-wrap">
          {collectionsData.length && mappedNfts}
        </div>
      )}
    </div>
  );
}

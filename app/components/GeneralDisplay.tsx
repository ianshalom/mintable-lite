import React from "react";
import { useAppSelector } from "../lib/hooks";
import { useSelectCollectionsData } from "../lib/features/collections/collectionsSlice";
import Image from "next/image";

export default function GeneralDisplay() {
  const collectionsData = useAppSelector(useSelectCollectionsData);

  const mappedNfts = collectionsData.map((collection) => {
    const { name, price, owner, image } = collection;

    return (
      <div key={name} className="flex flex-col m-4">
        <Image alt={owner} src={image} width={80} height={80} />
        <p>{name}</p>
        <p>{price}</p>
      </div>
    );
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

import React from "react";
import Image from "next/image";
import { NFTDataProps } from "../lib/interfaces/collections.interface";

export default function NFTCard({
  collection,
  hidePrice,
  displayCollection,
  onClick,
}: {
  collection: NFTDataProps;
  hidePrice?: boolean;
  displayCollection?: boolean;
  onClick?: () => void;
}) {
  const { name, price, owner, image } = collection;
  console.log("COLLETION: ", collection);
  return (
    <div
      className="mr-2 mb-8 rounded-xl shadow-lg hover:cursor-pointer hover:shadow-xl"
      onClick={onClick}
    >
      <div>
        <div className="relative aspect-square rounded-t-xl overflow-hidden">
          <Image
            alt={owner}
            src={image}
            fill
            className="object-fit hover:scale-110 duration-500"
          />
        </div>
        <div className="p-4 flex flex-col justify-between">
          <div className="h-[100px]">
            <p className="font-bold text-sm mb-2">
              {displayCollection ? collection.collectionName : name}
            </p>
            <p className="text-xs text-gray-400 mb-4">By {owner}</p>
          </div>
          {!hidePrice && !displayCollection && (
            <p className="font-bold text-sm text-blue-600/100">{price} ETH</p>
          )}
          {hidePrice &&
            collection.transactionStatus === "Listed" &&
            !displayCollection && (
              <p className="font-bold text-xs text-blue-600/100">{price} ETH</p>
            )}
        </div>
      </div>
    </div>
  );
}

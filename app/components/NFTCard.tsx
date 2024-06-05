import React from "react";
import Image from "next/image";
import { NFTDataProps } from "../lib/interfaces/collections.interface";

export default function NFTCard({ collection }: { collection: NFTDataProps }) {
  const { name, price, owner, image } = collection;

  return (
    <div className="shrink mr-2 mb-8 aspect-square rounded-xl shadow-lg hover:cursor-pointer hover:shadow-xl">
      <div>
        <div className="aspect-square rounded-t-xl overflow-hidden">
          <Image
            alt={owner}
            src={image}
            height={140}
            width={320}
            className="object-cover hover:scale-110 duration-500"
          />
        </div>
        <div className="p-4">
          <p className="font-bold text-md mb-4">{name}</p>
          <p className="font-bold text-md mb-4">{price} ETH</p>
          <p className="text-xs text-gray-400">By {owner}</p>
        </div>
      </div>
    </div>
  );
}
"use client";

import React from "react";
import { useAppSelector } from "../lib/hooks";
import { useSelectNFTInfoById } from "../lib/features/collections/collectionsSlice";

export default function NFTDetailsPage({ id }: { id: string }) {
  const nftData = useAppSelector(
    useSelectNFTInfoById({
      payload: id,
      type: "useSelectCollectionByOwnerId",
    })
  );

  if (!nftData) return;
  return <div>NFTDetailsPage</div>;
}

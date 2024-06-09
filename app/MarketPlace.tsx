"use client";

import React, { useEffect, useCallback } from "react";
import { useAppDispatch } from "./lib/hooks";
import { saveCollections } from "./lib/features/collections/collectionsSlice";
import NFTRowDisplay from "./components/NFTRowDisplay";
import { useAppSelector } from "./lib/hooks";
import {
  useSelectNFTOfEachCollection,
  useSelectAllCollectionsData,
} from "./lib/features/collections/collectionsSlice";
import LoadingComponent from "./components/LoadingComponent";
import { useSession } from "next-auth/react";

export default function MarketPlace({ nftData }: { nftData: any }) {
  const dispatch = useAppDispatch();
  const uniqueNFTFromCollection = useAppSelector(useSelectNFTOfEachCollection);
  const nftCollectionsByOwner = useAppSelector(useSelectAllCollectionsData);

  const { status } = useSession();
  console.log(uniqueNFTFromCollection, nftCollectionsByOwner, status);
  useEffect(() => {
    if (uniqueNFTFromCollection && nftCollectionsByOwner) return;
    if (nftData) {
      dispatch(saveCollections(nftData));
    }
  }, [nftData, dispatch, uniqueNFTFromCollection, nftCollectionsByOwner]);
  if (
    !nftData ||
    !uniqueNFTFromCollection ||
    !nftCollectionsByOwner ||
    status === "loading"
  )
    return <LoadingComponent text="Loading..." />;

  return (
    <div className="w-full">
      <div className="py-8 w-full">
        <NFTRowDisplay
          header="Collections"
          nftData={uniqueNFTFromCollection}
          displayCollection
        />
      </div>
      <div className="py-8">
        {nftCollectionsByOwner.map((collection) => (
          <NFTRowDisplay
            key={collection.contractAddress}
            slug={collection.slug}
            header={collection.name}
            nftData={collection.data}
          />
        ))}
      </div>
    </div>
  );
}

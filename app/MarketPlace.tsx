"use client";

import React, { useEffect } from "react";
import { useAppDispatch } from "./lib/hooks";
import { saveCollections } from "./lib/features/collections/collectionsSlice";
import GeneralDisplay from "./components/GeneralDisplay";
import { useAppSelector } from "./lib/hooks";
import {
  useSelectShuffledData,
  useSelectAllCollectionsData,
} from "./lib/features/collections/collectionsSlice";
import LoadingComponent from "./components/LoadingComponent";

export default function MarketPlace({ nftData }: { nftData: any }) {
  const dispatch = useAppDispatch();
  const shuffledNftCollection = useAppSelector(useSelectShuffledData);
  const nftCollectionsByOwner = useAppSelector(useSelectAllCollectionsData);

  useEffect(() => {
    if (nftData) {
      dispatch(saveCollections(nftData));
    }
  }, [nftData, dispatch]);

  if (!nftData || !shuffledNftCollection || !nftCollectionsByOwner)
    return <LoadingComponent text="Loading..." />;

  return (
    <div className="w-full h-full">
      <div className="py-8 w-full h-full">
        <GeneralDisplay
          header="All collections"
          nftData={shuffledNftCollection}
        />
      </div>
      <div className="py-8">
        {nftCollectionsByOwner?.map((collection) => (
          <GeneralDisplay
            key={collection.id}
            slug={collection.id}
            header={collection.name}
            nftData={collection.data}
          />
        ))}
      </div>
    </div>
  );
}

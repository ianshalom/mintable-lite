"use client";

import React, { useEffect } from "react";
import { useAppDispatch } from "./lib/hooks";
import { saveCollections } from "./lib/features/collections/collectionsSlice";
import GeneralDisplay from "./components/GeneralDisplay";

export default function MarketPlace({ nftData }: { nftData: any }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (nftData) {
      dispatch(saveCollections(nftData));
    }
  }, [nftData, dispatch]);

  return (
    <div className="w-full h-full">
      <div className="py-8 w-full h-full">
        <GeneralDisplay />
      </div>
      <div className="py-8">
        <h2>Categories</h2>
      </div>
    </div>
  );
}

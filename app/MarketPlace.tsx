"use client";

import React, { useEffect } from "react";

export default function MarketPlace({ nftData }: { nftData: any }) {
  useEffect(() => {
    // Extract relevant data for display
    const data = nftData.map((collection: any) =>
      collection.data.map((nft: any) => {
        const obj = {
          name: nft.metadata?.name,
          image: nft.metadata?.image || nft.metadata?.image_url,
          description: nft.metadata?.description,
          price: nft.contractMetadata?.openSea.floorPrice,
          owner: nft.contractMetadata?.name || nft.metadata?.created_by,
          collection: collection.name,
        };
        return obj;
      })
    );
  }, [nftData]);

  return (
    <div>
      <div className="py-8">
        <h2>General Randomized NFTs</h2>
      </div>
      <div className="py-8">
        <h2>Categories</h2>
      </div>
    </div>
  );
}

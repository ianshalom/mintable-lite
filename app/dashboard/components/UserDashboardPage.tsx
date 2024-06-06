"use client";

import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks";
import {
  useSelectUserNFTData,
  saveUserNFTData,
} from "@/app/lib/features/user/userSlice";
import { addCollection } from "@/app/lib/features/collections/collectionsSlice";
import NFTCard from "@/app/components/NFTCard";
import ListNFTModal from "./ListNFTModal";
import { NFTDataProps } from "@/app/lib/interfaces/collections.interface";
import { CollectionsProps } from "@/app/lib/interfaces/collections.interface";

export default function UserDashboardPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState<NFTDataProps | null>(null);
  const dispatch = useAppDispatch();
  const {
    connectedToWallet,
    data: NFTData,
    walletBalance,
  } = useAppSelector(useSelectUserNFTData);

  if (!NFTData || !connectedToWallet) return;

  const submitNFTForListingHandler = (price: number) => {
    // Save NFT listing into collection reducer
    const nftDataWithUpdatedPrice = {
      ...selectedNFT,
      price,
      transactionStatus: "Listed",
    };
    const updatedNFTForListing = {
      ...NFTData[0],
      data: [nftDataWithUpdatedPrice],
    };

    const usersUpdatedNFTData = [
      {
        ...NFTData[0],
        data: [
          nftDataWithUpdatedPrice,
          ...NFTData[0].data.filter((nft) => nft.id !== selectedNFT?.id),
        ],
      },
    ];
    dispatch(saveUserNFTData(usersUpdatedNFTData as CollectionsProps[]));
    dispatch(addCollection(updatedNFTForListing as CollectionsProps));
  };

  const { data, ownerMetadata, name, contractAddress } = NFTData[0];

  return (
    <div className="flex flex-col w-full">
      {!connectedToWallet ? (
        <p>
          Sorry, you are currently not connected to your wallet. Please try
          connecting to your wallet
        </p>
      ) : (
        <>
          <div className="mb-8">
            <p className="text-4xl font-bold">Your Digital Wallet</p>
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 h-32">
              <p className="">
                Items: <span className="font-bold">{data.length}</span>
              </p>
              <p>
                Contract Address:{" "}
                <span className="font-bold">{contractAddress}</span>
              </p>
            </div>
            <div>
              <p className="text-xl">
                Wallet Balance:{" "}
                <span className="font-bold text-blue-400">
                  {walletBalance} ETH
                </span>
              </p>
            </div>
          </div>
          <div className="mb-8">
            <p className="font-bold text-4xl mb-4">Your NFTs</p>
            <p className="text-md">
              Click on an NFT that you would like to list on the marketplace.
            </p>
          </div>
          <div className="h-full flex flex-wrap justify-between">
            {data.map((collection) => (
              <span
                key={collection.name}
                onClick={() => {
                  setSelectedNFT(collection);
                  setShowModal(true);
                }}
              >
                <NFTCard collection={collection} hidePrice />
              </span>
            ))}
            {showModal ? (
              <ListNFTModal
                setShowModal={setShowModal}
                selectedNFT={selectedNFT}
                submitNFTForListingHandler={submitNFTForListingHandler}
              />
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}

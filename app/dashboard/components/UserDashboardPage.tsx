"use client";

import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks";
import { useAccount } from "wagmi";

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
  const { address } = useAccount();
  const {
    connectedToWallet,
    data: NFTData,
    walletBalance,
  } = useAppSelector(useSelectUserNFTData);

  if (!address) {
    return (
      <div className="flex flex-col items-center">
        <p className="py-6 text-xl font-bold">
          Sorry, you are currently not connected to your wallet. To view your
          wallet, please connect to your wallet.
        </p>
      </div>
    );
  }

  if (!NFTData) return;

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

  const { data, contractAddress } = NFTData[0];

  return (
    <div className="flex flex-col w-full">
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
            <span className="font-bold text-blue-400">{walletBalance} ETH</span>
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
    </div>
  );
}

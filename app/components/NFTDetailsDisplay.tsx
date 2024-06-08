"use client";

import React, { useState, useEffect } from "react";
import { useAppSelector } from "../lib/hooks";
import {
  useSelectCollectionByNFTContractAddress,
  useSelectNFTMetaAndPromoData,
} from "../lib/features/collections/collectionsSlice";
import Image from "next/image";
import LoadingComponent from "./LoadingComponent";
import NFTRowDisplay from "./NFTRowDisplay";
import Link from "next/link";
import parse from "html-react-parser";
import { useSession } from "next-auth/react";
import { useAccount } from "wagmi";
import PurchaseNFTModal from "./PurchaseNFTModal";
import { NFTMetadataProps } from "@/app/lib/interfaces/collections.interface";
import { FaTwitter } from "react-icons/fa";

export default function NFTDetailsPage({
  id,
  nftMetadata,
  contractAddress,
}: {
  id: string;
  nftMetadata: NFTMetadataProps;
  contractAddress: string;
}) {
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const session = useSession();
  const { address } = useAccount();

  const buyHandler = () => {
    if (!session.data)
      return setError(
        "You need to be signed in and connected to your wallet before you can make a purchase."
      );

    if (!address)
      return setError(
        "You need to be connected to your wallet before you can make a purchase."
      );

    setShowModal(true);
  };

  useEffect(() => {
    if (address || session.data) return setError("");
  }, [session.data, address]);

  const additionalNFTData = useAppSelector(
    useSelectNFTMetaAndPromoData({
      payload: { contractAddress, id },
      type: "useSelectNFTMetaAndPromoData",
    })
  );

  const collectionDataByOwner = useAppSelector(
    useSelectCollectionByNFTContractAddress({
      payload: contractAddress,
      type: "useSelectCollectionByNFTContractAddress",
    })
  );
  const { name, image, created_by, description } = nftMetadata;
  if (!additionalNFTData || !collectionDataByOwner)
    return <LoadingComponent text="Loading..." />;

  const {
    owner,
    price,
    slug,
    lastUpdated,
    tokenType,
    description: promoDescription,
    cta,
    imageUrl,
    altText,
    collectionName,
    twitterUsername,
    externalUrl,
  } = additionalNFTData;

  return (
    <div className="flex flex-col">
      <div className="flex justify-between md:justify-normal mb-8">
        <div className="relative h-96 w-96 mr-12 rounded-xl">
          <Image alt={created_by} src={image} fill className="rounded-md " />
        </div>
        <div className="w-1/2 flex flex-col justify-between">
          <div className="mb-4">
            <p className="font-bold text-4xl mb-6">{name}</p>
            <p className="mb-4">
              By{" "}
              <span className="underline text-blue-400">
                <Link href={`/collections/${slug}`}>{owner}</Link>
              </span>
              <span className="my-4">
                <a
                  href={`https://twitter.com/${twitterUsername}`}
                  target="_blank"
                >
                  <FaTwitter size={20} />
                </a>
              </span>
            </p>
            <i>{description}</i>
          </div>
          <div>
            <p className="font-bold text-lg">
              <span className="text-blue-400">{price}</span> ETH
            </p>
            <button
              className="bg-sky-500 hover:bg-sky-600 px-12 py-2 rounded-full mt-4 text-white text-lg"
              onClick={buyHandler}
            >
              <span>Buy</span>
            </button>
            {error && <p className="text-red-400 mt-2">{error}</p>}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <div className="flex flex-col mb-4">
          <p className="font-bold">Details</p>
          <div className="flex justify-between md:justify-normal mb-4">
            <div className="w-96 mr-12">
              <p className="text-sm">Address</p>
              <p className="text-sm">Token ID</p>
              <p className="text-sm">Token Standard</p>
              <p className="text-sm">Last Updated</p>
            </div>
            <div className="">
              <p className="text-sm">{contractAddress}</p>
              <p className="text-sm">{id}</p>
              <p className="text-sm">{tokenType}</p>
              <p className="text-sm">{lastUpdated}</p>
            </div>
          </div>
        </div>

        <div className=" bg-gray-100 rounded-xl p-4 mb-4 flex">
          <div className="w-1/2 mr-14 flex flex-col justify-between">
            <div>
              <p className="font-bold text-red-400 text-lg">Special offer!</p>
              <p>{promoDescription}</p>
            </div>
            {externalUrl && (
              <p className="text-sm my-4">
                Visit our
                <a
                  href={externalUrl}
                  className="underline text-blue-400"
                  target="_blank"
                >
                  {" "}
                  website
                </a>{" "}
                for more information about this promo.
              </p>
            )}
          </div>
          <div className="h-full w-1/2 flex items-center">
            <Image
              alt={altText ?? ""}
              src={imageUrl ?? ""}
              height={100}
              width={150}
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="py-8">
        <NFTRowDisplay
          key={collectionDataByOwner.id}
          slug={slug}
          header="More from this collection"
          nftData={collectionDataByOwner.data}
        />
      </div>
      {showModal && (
        <PurchaseNFTModal
          setShowModal={setShowModal}
          image={image}
          collectionName={collectionName}
          createdBy={created_by}
          name={name}
          price={price}
        />
      )}
    </div>
  );
}

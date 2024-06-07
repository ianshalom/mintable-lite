"use client";

import React, { useState } from "react";

import { NFTDataProps } from "@/app/lib/interfaces/collections.interface";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { useAppSelector } from "../lib/hooks";
import { useSelectUserNFTData } from "../lib/features/user/userSlice";

export default function PurchaseNFTModal({
  setShowModal,
  selectedNFT,
}: {
  setShowModal: (status: boolean) => void;
  selectedNFT?: NFTDataProps | null;
}) {
  const [error, setError] = useState("");

  const userNFTData = useAppSelector(useSelectUserNFTData);

  if (!selectedNFT) return;
  const { name, price, owner, image, collectionName } = selectedNFT;

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative w-[500px] h-[500px] p-20 flex flex-col justify-center bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-center mb-10 w-full border-solid border-blueGray-200 rounded-t">
              <h3 className="text-xl font-semibold">Item {name}</h3>
            </div>
            <button
              className="absolute right-2 top-8 text-black font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
              onClick={() => setShowModal(false)}
            >
              <AiOutlineClose size={15} />
            </button>
            <div className="relative flex flex-col items-center">
              <div className="w-full flex justify-between mb-4 px-6">
                <div>
                  <p className="text-md mb-2 font-bold">Price </p>
                  <p className="text-md mb-2 font-bold">By </p>{" "}
                  <p className="text-md mb-2 font-bold">Collection </p>
                </div>
                <div>
                  {" "}
                  <p className="text-md mb-2 font-bold">
                    <span className="text-blue-400 font-bold">{price} ETH</span>
                  </p>
                  <p className="text-md mb-2 font-bold">
                    <span className="text-blue-400 font-bold">{owner}</span>
                  </p>
                  <p className="text-md mb-2 font-bold">
                    <span className="text-blue-400 font-bold">
                      {collectionName}
                    </span>
                  </p>
                </div>
              </div>
              <Image
                alt={`${owner}-image`}
                src={image}
                width={100}
                height={100}
                className="rounded"
              />
              <div className="flex flex-col items-center pt-8 border-solid border-blueGray-200 rounded-b">
                <button
                  className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-2.5 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mt-4 ease-linear transition-all duration-150 mb-2"
                  type="button"
                  onClick={() => {
                    if (price > userNFTData.walletBalance) {
                      setError(
                        "You have insufficient ETH to purchase this item."
                      );
                    } else {
                      setShowModal(false);
                    }
                  }}
                >
                  Purchase
                </button>
                {error && <p className="text-red-400 text-sm">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

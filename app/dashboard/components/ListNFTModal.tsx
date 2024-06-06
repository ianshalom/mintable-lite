"use client";

import React, { useState } from "react";

import { NFTDataProps } from "@/app/lib/interfaces/collections.interface";
import { AiOutlineClose } from "react-icons/ai";

export default function ListNFTModal({
  setShowModal,
  selectedNFT,
  submitNFTForListingHandler,
}: {
  setShowModal: (status: boolean) => void;
  selectedNFT?: NFTDataProps | null;
  submitNFTForListingHandler: (price: number) => void;
}) {
  const [price, setPrice] = useState(0);

  if (!selectedNFT) return;
  const { name } = selectedNFT;
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-between p-5 border-solid border-blueGray-200 rounded-t">
              <h3 className="text-xl font-semibold">
                You are listing item {name}
              </h3>
              <button
                className=" text-black font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                onClick={() => setShowModal(false)}
              >
                <AiOutlineClose size={15} />
              </button>
            </div>
            <div className="relative px-6 flex flex-col">
              <label className="pb-5 font-semibold">
                List your price in ETH
              </label>
              <input
                type="number"
                placeholder="1.0"
                step="0.01"
                min="0"
                max="10"
                className="w-1/2 h-12 px-4 py-2 border rounded-sm"
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div className="flex items-center justify-center py-12 border-solid border-blueGray-200 rounded-b">
              <button
                className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-2.5 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none ml-4 ease-linear transition-all duration-150"
                type="button"
                onClick={() => {
                  submitNFTForListingHandler(price);
                  setShowModal(false);
                }}
              >
                List
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

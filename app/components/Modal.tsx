"use client";

import React, { useState, useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { contractAddressesForUserMode } from "../lib/constants";
import { getNftDataOfUser } from "../api";
import { ContractInfoForUserModeProps } from "../lib/interfaces/collections.interface";
import { formatNFTResponse } from "../lib/utils/helpers";
import { useAppDispatch } from "../lib/hooks";
import { saveUserNFTData } from "../lib/features/user/userSlice";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";

export default function Modal({
  setShowModal,
}: {
  setShowModal: (status: boolean) => void;
}) {
  const { address } = useAccount();

  const dispatch = useAppDispatch();
  const router = useRouter();

  const fetchDataHandler = async (info: ContractInfoForUserModeProps) => {
    const response = await getNftDataOfUser(info);
    const nftData = formatNFTResponse(response, "Not Listed");
    dispatch(saveUserNFTData(nftData));
    router.push("/dashboard");
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-between p-5 border-solid border-blueGray-200 rounded-t">
              <h3 className="text-xl font-semibold">Connect to a wallet</h3>
              <button
                className=" text-black font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                onClick={() => setShowModal(false)}
              >
                x
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              {!address ? (
                <p className="text-black text-md">
                  Connect to wallet to show Metamask integration.
                </p>
              ) : (
                <p className="text-black text-md">
                  You have successfully connected to Metamask. Select creator to
                  generate real NFTs to include in your wallet.
                </p>
              )}
            </div>
            <div className="flex items-center justify-center p-6 border-solid border-blueGray-200 rounded-b">
              {!address ? (
                <ConnectButton />
              ) : (
                <>
                  {contractAddressesForUserMode.map((info) => {
                    return (
                      <button
                        key={info.id}
                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-2.5 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none ml-4 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setShowModal(false);
                          fetchDataHandler(info);
                        }}
                      >
                        Connect to {info.name}
                      </button>
                    );
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

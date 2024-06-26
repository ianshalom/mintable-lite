"use client";

import React, { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { contractAddressesForUserMode } from "../lib/constants";
import { ContractInfoForUserModeProps } from "../lib/interfaces/collections.interface";
import { formatNFTResponse } from "../lib/utils/helpers";
import { useAppDispatch } from "../lib/hooks";
import { saveUserNFTData } from "../lib/features/user/userSlice";
import { useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { usePathname } from "next/navigation";
import NFTCollectionApi from "../lib/api/NFTCollection/NFTCollection";

export default function Modal({
  setShowModal,
}: {
  setShowModal: (status: boolean) => void;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const { address } = useAccount();

  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  const fetchDataHandler = async (info: ContractInfoForUserModeProps) => {
    const nftCollectionApi = new NFTCollectionApi();
    const response = await nftCollectionApi.getNftDataOfUser(info);
    const nftData = formatNFTResponse(response, "Not Listed");
    setShowModal(false);

    dispatch(saveUserNFTData(nftData));
    if (!pathname.includes("/assets")) router.push("/dashboard");
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-center justify-center p-8 border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold text-center">
                Connect to a wallet
              </h3>
              {!address && (
                <button
                  className="absolute right-0 text-black font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                  onClick={() => setShowModal(false)}
                >
                  x
                </button>
              )}
            </div>
            <div className="relative p-6 flex-auto text-center">
              {!address ? (
                <p className="text-black text-md">
                  Connect to wallet to show Metamask integration.
                </p>
              ) : (
                <p className="text-black text-md">
                  Congratulations! You have successfully connected to Metamask.
                  Select a creator to generate real NFTs to include in your
                  wallet.
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
                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-2.5 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none ml-4 ease-linear transition-all duration-150 disabled:bg-gray-400"
                        type="button"
                        disabled={isLoading}
                        onClick={() => {
                          setIsLoading(true);
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

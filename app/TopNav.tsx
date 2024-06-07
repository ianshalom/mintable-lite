"use client";

import React, { useState } from "react";
import Link from "next/link";
import Modal from "./components/Modal";
import { useAccount, useDisconnect } from "wagmi";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaWallet } from "react-icons/fa6";
import { persistor } from "./lib/store";

export default function TopNav() {
  const [showModal, setShowModal] = useState(false);

  const { address, status } = useAccount();
  const { disconnect } = useDisconnect();
  const session = useSession();
  const router = useRouter();
  const signOutHandler = () => {
    persistor.purge();
    disconnect();
    signOut();
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-16 border-b z-50 flex items-center bg-white">
      <div className="w-full px-6 md:p-0 md:w-4/6 mx-auto font-bold text-lg hover:cursor-pointer">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <p>Mintable Lite</p>
            </Link>
          </div>
          <div className="flex items-center">
            {session && session.data && (
              <span onClick={() => router.push("/dashboard")}>
                <FaWallet size={30} />
              </span>
            )}

            {address && session.data ? (
              <span className="mx-6">
                <button
                  className="bg-gray-400 text-white active:bg-gray-500 
      font-bold px-6 py-1 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
                  type="button"
                  onClick={() => {
                    persistor.purge();
                    disconnect();
                  }}
                >
                  Disconnect Wallet
                </button>
              </span>
            ) : !session.data ? null : (
              <span className="mx-6">
                <button
                  className="bg-blue-400 text-white active:bg-blue-500 
      font-bold py-1 px-6 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
                  type="button"
                  onClick={() => setShowModal(true)}
                >
                  Connect Wallet
                </button>
              </span>
            )}
            {session.data ? (
              <button
                className="border rounded-md py-1 px-4 flex items-center justify-center hover:bg-gray-100"
                onClick={signOutHandler}
              >
                Sign out
              </button>
            ) : (
              <Link
                className="border rounded-md py-1 px-6 hover:bg-gray-100 flex items-center justify-center"
                href="/auth"
              >
                Log in
              </Link>
            )}
            {showModal ? <Modal setShowModal={setShowModal} /> : null}
          </div>
        </div>
      </div>
    </nav>
  );
}

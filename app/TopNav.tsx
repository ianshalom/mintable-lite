"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Modal from "./components/Modal";

export default function TopNav() {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<InstanceType<typeof HTMLElement | any>>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      buttonRef.current &&
      buttonRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as HTMLDivElement) &&
      event.target !== buttonRef.current
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-0 left-0 w-full h-16 border-b z-50 flex items-center bg-white">
      <div className="w-full px-6 md:p-0 md:w-4/6 mx-auto font-bold text-lg hover:cursor-pointer">
        <div className="flex justify-between items-center">
          <Link href="/">
            <p>MintableLite</p>
          </Link>
          <div className="flex items-center">
            <Link
              className="border-2 border-black rounded-md mr-4 py-1 px-4 hover:bg-gray-100 flex items-center justify-center"
              href="/auth"
            >
              Log in
            </Link>

            <div className="mx-4">
              <button
                className="bg-blue-400 text-white active:bg-blue-500 
      font-bold px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(true)}
              >
                Connect Wallet
              </button>
              {showModal ? <Modal setShowModal={setShowModal} /> : null}
            </div>

            <div>
              <span onClick={toggleDropdown}>
                <FaUser size={25} />
              </span>
            </div>

            {isOpen && (
              <div
                className={`absolute top-16 mt-2 w-48 rounded-md shadow-lg bg-white`}
                ref={menuRef}
              >
                <ul
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                  className="px-4"
                >
                  <li className="flex items-center hover:cursor-pointer hover:text-blue-400">
                    <span
                      className="w-full block py-4 ml-2"
                      onClick={toggleDropdown}
                    >
                      <Link href="/dashboard">Dashboard</Link>
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

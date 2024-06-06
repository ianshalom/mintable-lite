"use client";

import React, { useState } from "react";

export default function UserDashboardPage() {
  const [nftName, setNftName] = useState("");
  const [name, setName] = useState("");
  const [collection, setCollection] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  const submitHandler = () => {
    console.log("nftName", nftName);
    console.log("name", name);
    console.log("collection", collection);
    console.log("image", image);
    console.log("price", price);

    setNftName("");
    setName("");
    setCollection("");
    setImage("");
    setPrice(0);
  };

  return (
    <div className="w-1/2 mt-24">
      <p className="text-2xl font-semibold mb-8">My Dashboard</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <label className="font-semibold">NFT Name</label>
        <input
          type="text"
          placeholder="Email address"
          className="w-full h-12 p-4 mt-4 mb-4 border rounded-md"
          onChange={(e) => setNftName(e.target.value)}
        />
        <label className="font-semibold">Owner</label>
        <input
          type="text"
          placeholder="Your name"
          className="w-full h-12 p-4 mt-4 mb-4 border rounded-md"
          onChange={(e) => setName(e.target.value)}
        />
        <label className="font-semibold">Collection Name</label>
        <input
          type="text"
          placeholder="Collection Name"
          className="w-full h-12 p-4 mt-4 mb-4 border rounded-md"
          onChange={(e) => setCollection(e.target.value)}
        />
        <label className="font-semibold">NFT Image</label>
        <input
          type="text"
          placeholder="NFT Image"
          className="w-full h-12 p-4 mt-4 mb-4 border rounded-md"
          onChange={(e) => setImage(e.target.value)}
        />
        <label className="font-semibold">Price</label>
        <input
          type="number"
          //   placeholder="Your name"
          className="w-full h-12 p-4 mt-4 mb-4 border rounded-md"
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <button
          className="bg-sky-500 hover:bg-sky-600 px-12 py-2 rounded-full mt-4 text-white text-lg"
          type="submit"
        >
          <span>Mint</span>
        </button>
      </form>
    </div>
  );
}

"use client";

import React, { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    console.log("email", email);
    console.log("password", password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="mt-24">
      <p className="text-2xl font-semibold mb-8">Log in to MintableLite</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <label className="font-semibold">Email address</label>
        <input
          type="email"
          placeholder="Email address"
          className="w-full h-12 p-4 mt-4 mb-4 border rounded-md"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="font-semibold">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full h-12 p-4 mt-4 border rounded-md"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-sky-500 hover:bg-sky-600 px-12 py-2 rounded-full mt-4 text-white text-lg"
          type="submit"
        >
          <span>Submit</span>
        </button>
      </form>
    </div>
  );
}

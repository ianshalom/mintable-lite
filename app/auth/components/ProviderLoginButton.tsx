"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";

export default function ProviderLoginButton({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const getLogo = () => {
    switch (id) {
      case "github":
        return <FaGithub />;

      default:
        return "";
    }
  };

  return (
    <>
      <button
        className="w-full border rounded-md p-4 mt-4 flex flex-row items-center justify-center hover:bg-gray-100"
        onClick={() => {
          return signIn(id, { callbackUrl: "/" });
        }}
      >
        {getLogo()} &nbsp; Continue with {name}
      </button>
    </>
  );
}

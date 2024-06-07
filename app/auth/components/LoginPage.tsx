import React from "react";
import { getProviders, getSession } from "next-auth/react";
import ProviderLoginButton from "./ProviderLoginButton";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");

  const providers = await getProviders();
  if (!providers) return;
  const providersMap = Object.values(providers);

  return (
    <div className="mt-24">
      <p className="text-2xl font-semibold mb-8">Log in to MintableLite</p>
      {providersMap.map((provider) => {
        return (
          <>
            <ProviderLoginButton
              key={provider.id}
              id={provider.id}
              name={provider.name}
            />
          </>
        );
      })}
    </div>
  );
}

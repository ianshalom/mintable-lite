"use client";

import React, { useState, useEffect } from "react";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

export default function UserDashboardPage() {
  const { address } = useAccount();
  // Display NFTs

  return <div className="w-1/2 mt-24"></div>;
}

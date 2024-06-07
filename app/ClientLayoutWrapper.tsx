"use client";

import { Suspense } from "react";

import TopNav from "./TopNav";
import LoadingComponent from "./components/LoadingComponent";

export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<LoadingComponent text="Loading..." />}>
      <main className="flex w-full px-6 md:p-0 md:w-4/6 mx-auto flex-col mt-20">
        <TopNav />
        {children}
      </main>
    </Suspense>
  );
}

import React from "react";
import LoginPage from "./components/LoginPage";

export default function page() {
  return (
    <main className="flex w-full px-6 md:p-0 md:w-4/6 mx-auto flex-col items-center mt-24">
      <LoginPage />
    </main>
  );
}

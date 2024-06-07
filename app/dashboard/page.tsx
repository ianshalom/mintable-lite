import React from "react";
import UserDashboardPage from "./components/UserDashboardPage";
export default function page() {
  return (
    <main className="flex w-full px-6 md:p-0 mx-auto flex-col">
      <UserDashboardPage />
    </main>
  );
}

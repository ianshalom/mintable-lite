import React from "react";

export default function TopNav() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 border-b z-50 flex items-center">
      <div className="w-full px-6 md:p-0 md:w-4/6 mx-auto font-bold text-lg">
        <p>MintableLite</p>
      </div>
    </nav>
  );
}

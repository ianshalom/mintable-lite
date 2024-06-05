import React from "react";
import Link from "next/link";

export default function TopNav() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 border-b z-50 flex items-center bg-white">
      <div className="w-full px-6 md:p-0 md:w-4/6 mx-auto font-bold text-lg hover:cursor-pointer">
        <Link href="/">
          <p>MintableLite</p>
        </Link>
      </div>
    </nav>
  );
}

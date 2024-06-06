import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "./TopNav";
import StoreProvider from "./StoreProvider";
import Providers from "./Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mintable Lite",
  description:
    "A dynamic marketplace that allows users to explore, list, and trade Non-Fungible Tokens (NFTs)",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <StoreProvider>
            <TopNav />
            {children}
          </StoreProvider>
        </Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Providers from "./Providers";
import SessionProvider from "./SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import ClientLayoutWrapper from "./ClientLayoutWrapper";
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
  const session = getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session as any}>
          <Providers>
            <StoreProvider>
              <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
            </StoreProvider>
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}

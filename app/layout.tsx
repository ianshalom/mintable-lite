import type { Metadata } from "next";
import { Quantico } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Providers from "./Providers";
import SessionProvider from "./SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";
import ClientLayoutWrapper from "./ClientLayoutWrapper";

const quantico = Quantico({ weight: ["400"] });

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
      <head>
        <link rel="icon" href="/image/favicon.ico" sizes="any" />
      </head>
      <body className={quantico.className}>
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

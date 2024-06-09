### Mintable Lite

Mintable Lite is a NFT marketplace where users can explore, view, and list NFTs from their digital wallet.

### Project description

This project uses the following tech stack: NextJS, Tailwind CSS, Redux ToolKit, NextAuth, RainbowKit, Alchemy API.
Since there is no backend, I will be treating the Redux store as my DB to handle client-side state, especially since I want to display the ability for a user to list NFTs on the market place from their wallet.

# Marketplace

This project uses the Alchemy API to fetch NFTs by contract addresses. I have picked a couple of contract addresses from OpenSea to populate the marketplace with real NFTs (GET: /getNFTsForCollection).
The marketplace in Mintable Lite is categorised by Collections/Owners. Clicking on any NFT in the collections category wil take you to the collections page and clicking on any NFT from the owner category will take you directly to the NFT details page (/assets/tokenId). The app also uses NextAuth with GitHub OAuth provider for a simple log in authentication.

# Dashboard/Digital Wallet

You will first need to log in before you can connect to your Metamask wallet. Since I do not own any NFTs, I will be prompted to generate some NFTs after I have successfully connected to my Metamask wallet from existing owners (GET: /getNFTsForCollection) to treat as my own and have them populated in my digital wallet (/dashboard). I can list NFTs on the market place by clicking on any NFT in my wallet and setting a price to it. It will be displayed in the home/marketplace page at the very bottom.

# Collections page

Each owner on the market place will have their own collection page (including you once you list your NFT on the marketplace). This collection page will display some metadata (GET: /getCollectionMetadata) about the collection as well as all the NFTs that are part of this collection.

# NFT Details/assets page

The assets page will list the relevant NFT metadata related to the selected NFT (GET: /getNFTMetadata) along with other related NFTs from the same collection at the bottom. There is also a buy button but it doesn't come with the actual buy functionality.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### How to install and run project

npm install

Since this app uses the Alchemy API and also Github OAuth provider, you will need to create an .env file and populate them with the following keys:

NEXT_PUBLIC_ALCHEMY_API_KEY={YOUR_API_KEY}
NEXT_PUBLIC_PROJECT_ID={YOUR_API_KEY}
NEXT_PUBLIC_GITHUB_ID={YOUR_API_KEY}
NEXT_PUBLIC_GITHUB_SECRET={YOUR_API_KEY}

To get your GitHub ID and secret, you will need to visit https://github.com/settings/developers and create a new OAuth app to generate your keys. Also set your homepage url to http://localhost:3000 and authorization callback url to http://localhost:3000/api/auth/callback/github. Feel free to reach out to me if you need my keys to run this app on your localhost.

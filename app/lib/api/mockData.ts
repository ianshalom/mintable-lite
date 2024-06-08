export const PROMO_MOCK_DATA = {
  JAKE_INEZ: {
    description: "Free book giveaway. Buy an NFT from my collection to claim!",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/6311513fbb74eb34c7645b4f/1711762169835-7WSYQMI3N6RB4YCUNO7P/Book+cover+hi+res.jpg?format=750w",
    cta: 'Visit <a href="https://www.jakeinez.net/books/p/zephyr" className="underline text-blue-400" target="_blank">my website</a> for more information about my book.',
    altText: "jake-inez-promo",
  },
  SCHIZO_POSTER: {
    description:
      "Free SchizoPoster giveaway. Buy an NFT from our collection to claim a free poster!",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBpiT949kMTsnYVC1NkFL7_wKCvzox_8efg&s",
    cta: 'Visit our <a href="https://twitter.com/SCHIZO_POSTERS" className="underline text-blue-400" target="_blank">twitter</a> for more information about SchizoPosters.',
    altText: "schizo-poster-promo",
  },
  BABY_DOGE: {
    description:
      "Purchase an NFT from us and stand a chance to become one of the 10 lucky winners to win $500 USDT",
    imageUrl:
      "https://support.bitmart.com/hc/article_attachments/15699070890011",
    cta: 'Visit our<a href="https://babydogenft.com/" className="underline text-blue-400" target="_blank"> website</a> for more information about this promo.',
    altText: "baby-doge-promo",
  },
};

const schizoPosterAddress = "0xbfe47d6d4090940d1c7a0066b63d23875e3e2ac5";
const babyDogeAddress = "0xd9f092bdf2b6eaf303fc09cc952e94253ae32fae";
const whereMyVansGoAddress = "0x509a050f573be0d5e01a73c3726e17161729558b";
const terraformsByMathcastlesAddress =
  "0x4e1f41613c9084fdb9e34e11fae9412427480e56";
const crypToadzAddress = "0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6";

const withMetadata = "true";
const limit = 30;

const schizoPosterUrl = `?contractAddress=${schizoPosterAddress}&withMetadata=${withMetadata}&limit=${limit}`;
const babyDogeUrl = `?contractAddress=${babyDogeAddress}&withMetadata=${withMetadata}&limit=${limit}`;
const whereMyVansGoUrl = `?contractAddress=${whereMyVansGoAddress}&withMetadata=${withMetadata}&limit=${limit}`;
const terraformsByMathcastlesUrl = `?contractAddress=${terraformsByMathcastlesAddress}&withMetadata=${withMetadata}&limit=${limit}`;
const crypToadzUrl = `?contractAddress=${crypToadzAddress}&withMetadata=${withMetadata}&limit=${limit}`;

export const MINTABLE_LITE_MARKETPLACE_ADDRESSES = [
  {
    url: schizoPosterUrl,
    promoData: PROMO_MOCK_DATA.SCHIZO_POSTER,
  },
  {
    url: babyDogeUrl,
    promoData: PROMO_MOCK_DATA.BABY_DOGE,
  },
  {
    url: whereMyVansGoUrl,
    promoData: PROMO_MOCK_DATA.BABY_DOGE,
  },
  {
    url: terraformsByMathcastlesUrl,
    promoData: PROMO_MOCK_DATA.BABY_DOGE,
  },
  {
    url: crypToadzUrl,
    promoData: PROMO_MOCK_DATA.BABY_DOGE,
  },
];

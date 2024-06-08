export const PROMO_MOCK_DATA = {
  CRYPTOADZ: {
    description:
      "Get 5% off your next purchase if you purchase an NFT from us now. Offer ends at midnight!",
    imageUrl:
      "https://nftnow.com/wp-content/uploads/2021/10/cryptoadz-inline-cr-gremplin-10262021-700x700.jpg",
    altText: "cryptoadz-promo",
  },
  SCHIZO_POSTER: {
    description:
      "Free SchizoPoster giveaway. Buy an NFT from our collection to claim a free poster!",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBpiT949kMTsnYVC1NkFL7_wKCvzox_8efg&s",

    altText: "schizo-poster-promo",
  },
  BABY_DOGE: {
    description:
      "Purchase an NFT from us and stand a chance to become one of the 10 lucky winners to win $500 USDT",
    imageUrl:
      "https://support.bitmart.com/hc/article_attachments/15699070890011",

    altText: "baby-doge-promo",
  },
  WHERE_MY_VANS_GO: {
    description:
      "Purchase an NFT from us and win a free custom pair of vans shoes.",
    imageUrl:
      "https://i.etsystatic.com/20850599/r/il/4dd0f6/3466082094/il_570xN.3466082094_cwva.jpg",

    altText: "where-my-vans-go-promo",
  },
  TERRAFORM_BY_MATHCASTLES: {
    description: "Purchase an NFT from us and win a free Terraforms poster.",
    imageUrl: "https://miro.medium.com/v2/resize:fit:1228/0*JOnU_9VGiTb80QFE",

    altText: "terraforms-by-mathcastles-promo",
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
    promoData: PROMO_MOCK_DATA.WHERE_MY_VANS_GO,
  },
  {
    url: terraformsByMathcastlesUrl,
    promoData: PROMO_MOCK_DATA.TERRAFORM_BY_MATHCASTLES,
  },
  {
    url: crypToadzUrl,
    promoData: PROMO_MOCK_DATA.CRYPTOADZ,
  },
];

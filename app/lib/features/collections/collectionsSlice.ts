import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { CollectionsProps } from "../../interfaces/collections.interface";

type CollectionsState = CollectionsProps;

interface initialStateProps {
  data?: CollectionsState[] | null;
}

const initialState: initialStateProps = {
  data: null,
};

export const collectionsSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    saveCollections: (state, action: PayloadAction<CollectionsState[]>) => {
      state.data = action.payload;
    },
    addCollection: (state, action: PayloadAction<CollectionsState>) => {
      const collection = state.data?.find(
        (collection) =>
          collection.contractAddress === action.payload.contractAddress
      );

      if (collection) {
        collection.data.push(...action.payload.data);
      } else {
        state.data?.push(action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveCollections, addCollection } = collectionsSlice.actions;

export const useSelectAllCollectionsData = (state: RootState) =>
  state.collections.data;

export const useSelectCollectionByNFTContractAddress =
  (action: PayloadAction<string>) => (state: RootState) => {
    const data = state.collections.data?.filter((data) =>
      data.data.find((nft) => nft.id === action.payload)
    )[0];

    return data;
  };

export const useSelectNFTMetaAndPromoData =
  (action: PayloadAction<{ contractAddress: string; id: string }>) =>
  (state: RootState) => {
    const { contractAddress, id } = action.payload;
    const data = state.collections.data?.filter(
      (collection) => collection.contractAddress === contractAddress
    );
    if (!data?.length) return null;

    const filteredNft = data[0].data.find((data) => data.id === id);

    return {
      ...data[0].metadata,
      ...data[0].promoData,
      price: filteredNft?.price,
      lastUpdated: filteredNft?.lastUpdated,
      tokenType: filteredNft?.tokenType,
    };
  };

export const useSelectCollectionByOwnerId =
  (action: PayloadAction<string>) => (state: RootState) => {
    const data = state.collections.data?.filter(
      (data) => data.id === action.payload
    )[0];

    return data;
  };

export const useSelectNFTInfoById =
  (action: PayloadAction<string>) => (state: RootState) => {
    let filteredData;
    const data = state.collections.data?.filter((data) =>
      data.data.filter((nft) => {
        if (nft.id === action.payload) {
          return (filteredData = nft);
        }
      })
    );
    return filteredData;
  };

export const useSelectNFTOfEachCollection = (state: RootState) => {
  if (!state.collections.data) return [];

  const collections = state.collections.data?.map((collection) =>
    collection.data.filter((nft, i) => i === 0 && collection.data[i])
  );
  const combineCollections = collections?.reduce(
    (result, array) => result.concat(array),
    []
  );

  return combineCollections;
};

export default collectionsSlice.reducer;

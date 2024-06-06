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
      console.log("ACTION PAYLOAD: ", action.payload);
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveCollections } = collectionsSlice.actions;

export const useSelectAllCollectionsData = (state: RootState) =>
  state.collections.data;

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

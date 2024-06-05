import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import {
  CollectionsProps,
  NFTDataProps,
} from "../../interfaces/collections.interface";
import { shuffleArrayFunc } from "../../utils/helpers";
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
  },
});

// Action creators are generated for each case reducer function
export const { saveCollections } = collectionsSlice.actions;

export const useSelectAllCollectionsData = (state: RootState) =>
  state.collections.data;

export const useSelectShuffledData = (state: RootState) => {
  if (!state.collections.data) return [];
  const collections = state.collections.data?.map(
    (collection) => collection.data
  );
  const combineCollections = collections?.reduce(
    (result, array) => result.concat(array),
    []
  );

  const shuffledCollections = shuffleArrayFunc(
    combineCollections as NFTDataProps[]
  );
  return shuffledCollections;
};

export default collectionsSlice.reducer;

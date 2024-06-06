import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { CollectionsProps } from "../../interfaces/collections.interface";

type CollectionsState = CollectionsProps;

interface initialStateProps {
  data?: CollectionsState[] | null;
  connectedToWallet: boolean;
  walletBalance: number;
}

const initialState: initialStateProps = {
  data: null,
  connectedToWallet: false,
  // Initialise wallet balance
  walletBalance: 4.26,
};

export const userSlice = createSlice({
  name: "userCollection",
  initialState,
  reducers: {
    saveUserNFTData: (state, action: PayloadAction<CollectionsState[]>) => {
      state.data = null;
      state.data = action.payload;
      state.connectedToWallet = true;
    },
  },
});

export const { saveUserNFTData } = userSlice.actions;

export const useSelectUserNFTData = (state: RootState) => state.user;

export default userSlice.reducer;

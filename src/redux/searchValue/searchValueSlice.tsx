import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";

const initialState = "";

export const searchValueSlice = createSlice({
  name: "searchValue",
  initialState,
  reducers: {
    addSearchValue(_, action) {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addSearchValue } = searchValueSlice.actions;
export const selectSearchValue = (store: RootState) => store.searchValue;
export default searchValueSlice.reducer;

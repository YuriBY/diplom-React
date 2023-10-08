import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { bookData } from "../../pages/SingleBook";


const initialState: bookData[] = [];

export const favotiteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addtoFavorite(state, action) {
        state.push({...action.payload, favorite: true})
               
    },
    deleteFromFavorite(state, action) {
      const indexOfItem = state.findIndex((item) => item.isbn13 === action.payload);  
      state.splice(indexOfItem, 1)       
  },      
  },  
});
    

// Action creators are generated for each case reducer function
export const { addtoFavorite, deleteFromFavorite } = favotiteSlice.actions;
export const selectFavorite = (store: RootState) => store.favorite;
export default favotiteSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";
import { SingleBook } from "../../models";
import { bookData } from "../../pages/SingleBook";




const initialState: bookData[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart(state, action) {
        const foundObject = state.find((item) => item.isbn13 === action.payload.isbn13);      
        if (!foundObject) {
            state.push(action.payload)
        }
        
    }
  },  
});
    

// Action creators are generated for each case reducer function
export const { addtoCart} = cartSlice.actions;
export const selectAllBooksInCart = (store: RootState) => store.cart;
export default cartSlice.reducer;
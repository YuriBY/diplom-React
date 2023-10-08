import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { bookData } from "../../pages/SingleBook";




const initialState: bookData[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtoCart(state, action) {
        const foundObject = state.find((item) => item.isbn13 === action.payload.isbn13);      
        if (!foundObject) {
            const priceAsFloat = parseFloat(action.payload.price.replace('$', ''));
            state.push({...action.payload, amount: 1, totalPrice: priceAsFloat})
          }       
    },
    deleteFromCart(state, action) {
      const indexOfItem = state.findIndex((item) => item.isbn13 === action.payload);  
      state.splice(indexOfItem, 1)       
  },
    increaseItemAmount(state, action) {
      const foundObject = state.find((item) => item.isbn13 === action.payload);
      if (foundObject && foundObject.amount !== undefined && foundObject.totalPrice !== undefined) {
        const priceAsFloat = parseFloat(foundObject.price.replace('$', ''));
        foundObject.amount += 1;
        foundObject.totalPrice = foundObject.amount * priceAsFloat;
      }
    },
    decreaseItemAmount(state, action) {
      const foundObject = state.find((item) => item.isbn13 === action.payload);
      if (foundObject && foundObject.amount !== undefined && foundObject.totalPrice !== undefined) {
        const priceAsFloat = parseFloat(foundObject.price.replace('$', ''));
        if (foundObject.amount > 1) {
          foundObject.amount -= 1;
          foundObject.totalPrice = foundObject.amount * priceAsFloat;
        }
        
      }
    }      
  },  
});
    

// Action creators are generated for each case reducer function
export const { addtoCart, deleteFromCart, increaseItemAmount, decreaseItemAmount} = cartSlice.actions;
export const selectAllBooksInCart = (store: RootState) => store.cart;
export default cartSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";
import { SingleBook } from "../../models";


export const fetchBooks = createAsyncThunk(
    "books/fetchBooks",
    async () => {
      const response = await axios.get(
        `https://api.itbook.store/1.0/new`
      );
        console.log(response);
        return response.data;
    }
  );

export interface ResponseObj {
  total: number;
  books: SingleBook[]
}

const initialState: ResponseObj = {
    total: 0,
    books: [],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
    

// Action creators are generated for each case reducer function
export const { } = booksSlice.actions;
export const selectAllBooks = (store: RootState) => store.books;
export default booksSlice.reducer;
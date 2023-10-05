import { configureStore } from "@reduxjs/toolkit";
import books from "../redux/books/booksSlice";
import searchValue from "./searchValue/searchValueSlice";

export const store = configureStore({
  reducer: {
    books,
    searchValue,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

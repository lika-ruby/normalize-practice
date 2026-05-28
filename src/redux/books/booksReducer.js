import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchBooks, fetchAuthorById } from "./booksOperations";

export const booksAdapter = createEntityAdapter({
  selectId: (book) => book.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});

const initialState = booksAdapter.getInitialState({
  author: null,
  filter: "",
  isLoading: false,
  error: null,
});

const booksSlice = createSlice({
  name: "books",
  initialState,

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        booksAdapter.setAll(state, action.payload);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAuthorById.fulfilled, (state, action) => {
        state.author = action.payload;
      });
  },
});

export const { setFilter } = booksSlice.actions;
export default booksSlice.reducer;
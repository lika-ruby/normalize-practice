import { createAsyncThunk } from '@reduxjs/toolkit';
import * as bookShelfAPI from 'services/bookshelf-api';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const books = await bookShelfAPI.fetchBooks();
      return books;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);


export const fetchAuthorById = createAsyncThunk(
  'books/fetchAuthorById',
  async (authorId, { rejectWithValue }) => {
    try {
      const author = await bookShelfAPI.fetchAuthorById(authorId);
      return author;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

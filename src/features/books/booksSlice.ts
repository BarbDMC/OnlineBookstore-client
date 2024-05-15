import { Book } from '../../interfaces/bookInterface';
import { axiosInstance } from '../../config/axiosInstance';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface BooksState {
  books: Book[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
}

const initialState: BooksState = {
  books: [],
  status: 'idle',
  error: undefined,
};

export const fetchAllBooks = createAsyncThunk('books/fetchAllBooks', async () => {
  const response = await axiosInstance.get('/books');
  return response.data;
});

export const searchBooks = createAsyncThunk('books/searchBooks', async (searchTerm: string) => {
  const booksByAuthor = await axiosInstance.get(`/authors/${searchTerm}/books`);
  const booksByTitle = await axiosInstance.get(`/books/${searchTerm}`);
  return [...booksByAuthor.data, ...booksByTitle.data];
});


const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchAllBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(searchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(searchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;

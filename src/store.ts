import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/books/booksSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

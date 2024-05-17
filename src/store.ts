import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './features/books/booksSlice';
import userReducer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    books: booksReducer,
    user: userReducer,
    cart: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

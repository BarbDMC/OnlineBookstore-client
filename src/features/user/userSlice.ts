import { User } from "../../interfaces/userInterface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IUserState {
  user: User | null;
}

const initialState: IUserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
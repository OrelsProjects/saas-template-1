import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type AuthStateType = "unauthenticated" | "authenticated";

export type AuthState = {
  user: any;
  state: AuthStateType;

  loading?: boolean;
  error?: string;
};

export const initialState: AuthState = {
  user: {},
  state: "unauthenticated",

  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ user: any; state: AuthStateType } | null>
    ) => {
      state.loading = false;
      if (!action.payload) {
        state.user = null;
        state.state = "unauthenticated";
        return;
      }
      state.state = action.payload.state;
      state.user = action.payload.user;
    },
  },
});

export const { setUser } = authSlice.actions;
export const selectAuth = (state: RootState): AuthState => state.auth;

export default authSlice.reducer;

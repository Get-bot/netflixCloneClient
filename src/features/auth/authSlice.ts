import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWrapper} from "../../helpers/fetch-wrapper";
import {RootState} from "../../store/store";

interface IUser {
  token: string;
  type: string;
  id: string;
  username: string;
  email: string;
  roles: string[];
}
interface IUserAuthArgs {
  email: string;
  password: string;
}

interface AuthState {
  user: IUser | undefined;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | undefined;
}

const initialState: AuthState = {
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : undefined,
  isLoggedIn: !!localStorage.getItem("user"),
  isLoading: false,
  error: undefined
}

export const signInAsync = createAsyncThunk(
  'auth/signin',
  async ({email, password} : IUserAuthArgs) => await fetchWrapper.post(`${process.env.REACT_APP_API_URL}/auth/signin`, {email, password})
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = undefined;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
        state.isLoggedIn = true;
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  }
})

export const selectAuthState = (state: RootState) => state.auth;

export const selectAuthUser = (state: RootState) => state.auth.user;
export const selectAuthError = (state: RootState) => state.auth.error;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const authAction = authSlice.actions;

export default authSlice.reducer;
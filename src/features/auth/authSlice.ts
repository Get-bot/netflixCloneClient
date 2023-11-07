import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWrapper} from "../../helpers/fetch-wrapper";
import { history } from "../../helpers/history";
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
  isLoading: boolean;
  error: string | undefined;
}

const initialState: AuthState = {
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : undefined,
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
      localStorage.removeItem("user");
      history.navigate("/login");
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
        history.navigate("/");
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  }
})

export const selectAuthUser = (state: RootState) => state.auth.user;
export const selectAuthIsLoading = (state: RootState) => state.auth.isLoading;
export const selectAuthError = (state: RootState) => state.auth.error;

export const authAction = authSlice.actions;

export default authSlice.reducer;
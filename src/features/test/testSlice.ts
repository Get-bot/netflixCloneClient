import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { fetchWrapper} from "../../helpers/fetch-wrapper";

interface IUser {
  token: string;
  type: string;
  id: string;
  username: string;
  email: string;
  roles: string[];
}

interface testState {
  user: IUser | undefined;
  isLoading: boolean;
  message: string | undefined;
  error: string | undefined;
}

const initialState: testState = {
  user: undefined,
  isLoading: false,
  message: undefined,
  error: undefined
}

export const fetchUserAsync = createAsyncThunk(
  'test/fetchUser',
  async (endpoint: string) => {
    return await fetchWrapper.get(`${process.env.REACT_APP_API_URL}/test/${endpoint}`);
  }
);

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        const payload = action.payload;
        state.isLoading = false;
        state.user = payload.user;
        state.message = payload.message;
      })
      .addCase(fetchUserAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
  }
})

export const testActions = testSlice.actions;
export default testSlice.reducer;


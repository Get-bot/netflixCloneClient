import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store/store";

interface commonState {
  isSignIn: boolean;
}

const initialState: commonState = {
  isSignIn: true,
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setSignIn: (state) => {
      state.isSignIn = true;
    },
    setRegister: (state) => {
      state.isSignIn = false;
    }
  }
})

export const selectIsSignIn = (state: RootState) => state.common.isSignIn;

export const commonAction = commonSlice.actions;

export default commonSlice.reducer;
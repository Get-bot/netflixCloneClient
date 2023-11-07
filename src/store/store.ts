import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import testReducer from "../features/test/testSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    test: testReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
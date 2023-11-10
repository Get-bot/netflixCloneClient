import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import testReducer from "../features/test/testSlice";
import commonReducer from "../features/common/commonSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    test: testReducer,
    common: commonReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/User/UserSlice";
import jobReducer from "./features/Jobs/JobSlice";
export const store = configureStore({
  reducer: {
    userState: userReducer,
    jobState: jobReducer,
  },
});

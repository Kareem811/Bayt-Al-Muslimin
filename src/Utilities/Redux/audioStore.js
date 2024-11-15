import { configureStore } from "@reduxjs/toolkit";
import audioReducer from "./audioSlice";

export const audioStore = configureStore({
  reducer: {
    audio: audioReducer,
  },
});

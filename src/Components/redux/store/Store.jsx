import { configureStore } from "@reduxjs/toolkit";
import BlockerSlice from "../slices/BlockerSlice";
import apiSlice from "../slices/apiSlice";

export const Store = configureStore({
  reducer: {
    api: apiSlice,
    blocker: BlockerSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import BlockerSlice from "../slices/BlockerSlice";

export const Store = configureStore({
  reducer: {
    blocker: BlockerSlice,
  },
});

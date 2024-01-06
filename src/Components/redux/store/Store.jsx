import { configureStore } from "@reduxjs/toolkit";
import BlockerSlice from "../slices/BlockerSlice";
import Api_1 from "../slices/productsApiSlice";
import Api_2 from "../slices/imagesApiSlice";

export const Store = configureStore({
  reducer: {
    productsApi: Api_1,
    imagesApi: Api_2,
    blocker: BlockerSlice,
  },
});

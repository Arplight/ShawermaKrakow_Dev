import { createSlice } from "@reduxjs/toolkit";

const CurrentProductSlice = createSlice({
  name: "currentProduct",
  initialState: { currentProduct: null },
  reducers: {
    setCurrentProduct(state, action) {
      state.currentProduct = action.payload;
    },
  },
});

export default CurrentProductSlice;

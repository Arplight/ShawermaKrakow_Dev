import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../store/ApiStore";

const CurrentProductSlice = createSlice({
  name: "currentProduct",
  initialState: {
    data: null,
    loading: false,
    error: null,
    targetPathName: null,
  },
  reducers: {
    setTargetPathName(state, action) {
      const currentPath = action.payload.replaceAll(" ", "-");
      state.targetPathName = currentPath;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const data = action.payload[0].products.filter(
          (product) =>
            product.name.replaceAll(" ", "-") === state.targetPathName
        );
        state.data = data[0];
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = "Not found";
        state.loading = false;
      });
  },
});
export default CurrentProductSlice.reducer;
export const { setTargetPathName } = CurrentProductSlice.actions;
export const currentActions = CurrentProductSlice.actions;

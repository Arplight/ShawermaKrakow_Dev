import { createSlice } from "@reduxjs/toolkit";

const CurrentProductSlice = createSlice({
  name: "currentProduct",
  initialState: { data: null },
  reducers: {
    setCurrentProduct(state, action) {
      const products = action.payload;
      if (products.productsData) {
        let currentProduct = products.productsData.filter(
          (product) =>
            product.name.replaceAll(" ", "-") === products.targetPathName
        );
        state.data = currentProduct[0];
      }
    },
  },
});
export default CurrentProductSlice.reducer;
export const { setCurrentProduct } = CurrentProductSlice.actions;

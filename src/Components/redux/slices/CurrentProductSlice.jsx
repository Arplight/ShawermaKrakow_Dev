import { createSlice } from "@reduxjs/toolkit";

const CurrentProductSlice = createSlice({
  name: "currentProduct",
  initialState: { data: null },
  reducers: {
    setCurrentProduct(state, action) {
      const products = action.payload;
      if (products.productsData) {
        let currentProduct = products.productsData.filter(
          (product) => product.id === products.targetId
        );
        state.data = currentProduct;
      }
    },
  },
});
export default CurrentProductSlice.reducer;
export const { setCurrentProduct } = CurrentProductSlice.actions;

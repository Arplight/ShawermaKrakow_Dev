import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../store/ApiStore";
import { produce } from "immer";

const WishListSlice = createSlice({
  name: "WishListSlice",
  initialState: {
    products: localStorage.getItem("wishlist")
      ? JSON.parse(localStorage.getItem("wishlist"))
      : [],
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    addWishListItem(state, action) {
      const productId = action.payload;
      if (state.data) {
        const itemExists = state.products.some(
          (item) => item.itemId === productId
        );
        if (!itemExists) {
          const currentItem = state.data.find((item) => item.id === productId);
          const currentItemSummary = {
            itemId: productId,
            itemTitle: currentItem.name,
            itemPrice: currentItem.price_before_discount,
            itemImage: currentItem.image,
          };
          state.products = produce(state.products, (draft) => {
            draft.push(currentItemSummary);
          }).flat(1);
          localStorage.setItem("wishlist", JSON.stringify(state.products));
        }
      }
    },
    removeWishListItem(state, action) {
      const productId = action.payload;
      if (state.data) {
        state.products = state.products.filter(
          (product) => product.itemId !== productId
        );
        localStorage.setItem("wishlist", JSON.stringify(state.products));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const data = action.payload[0].products;
        state.data = data;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = "Failed to fetch products";
        state.loading = false;
      });
  },
});
export default WishListSlice.reducer;
export const { addWishListItem, removeWishListItem } = WishListSlice.actions;
export const currentActions = WishListSlice.actions;

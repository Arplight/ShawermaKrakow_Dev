import { createSlice } from "@reduxjs/toolkit";
import { fetchCart } from "../store/ApiStore";

const CartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: [],
    cartTotalCost: null,
    cartTotalItems: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.cartItems = action.payload.cartItems;
        state.cartTotalCost = action.payload.total;
        state.cartTotalItems = action.payload.itemCount;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.error = "Failed to fetch products";
        state.loading = false;
      });
  },
});

export default CartSlice.reducer;
export const currentActions = CartSlice.actions;

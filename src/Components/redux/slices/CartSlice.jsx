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
  reducers: {
    // Calculations
    cartTotal(state) {
      if (state.cartItems) {
        const totalCost = state.cartItems.reduce((a, c) => a + c.subtotal, 0);
        const totalItems = state.cartItems.reduce((a, c) => a + c.quantity, 0);
        state.cartTotalCost = state.cartItems.length > 0 ? totalCost : 0;
        state.cartTotalItems = state.cartItems.length > 0 ? totalItems : 0;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        const data = action.payload.cartItems;
        state.cartItems = data;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.error = "Failed to fetch products";
        state.loading = false;
      });
  },
});

export default CartSlice.reducer;
export const { cartTotal } = CartSlice.actions;
export const currentActions = CartSlice.actions;

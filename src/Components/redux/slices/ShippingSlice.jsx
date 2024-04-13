import { createSlice } from "@reduxjs/toolkit";
import { OrderShipping } from "../store/ApiStore";

const ShippingSlice = createSlice({
  name: "shipping",
  initialState: {
    loading: false,
    error: null,
    shippingPrice: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(OrderShipping.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(OrderShipping.fulfilled, (state, action) => {
        state.shippingPrice = action.payload.shipping_amount;
        state.loading = false;
      })
      .addCase(OrderShipping.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default ShippingSlice.reducer;

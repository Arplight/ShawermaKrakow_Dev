import { createSlice } from "@reduxjs/toolkit";
import { OrderTracking } from "../store/ApiStore";
import { toast } from "react-toastify";

const OrderTrackingSlice = createSlice({
  name: "orderTracking",
  initialState: {
    loading: false,
    error: null,
    isAuth: false,
    orderInfo: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(OrderTracking.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isAuth = false;
      })
      .addCase(OrderTracking.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isAuth = true;
        state.orderInfo = action.payload.order;
      })
      .addCase(OrderTracking.rejected, (state, action) => {
        state.isAuth = false;
        state.loading = false;
        state.error = action.payload;
        toast.error("Invalid email or id.");
      });
  },
});
export default OrderTrackingSlice.reducer;

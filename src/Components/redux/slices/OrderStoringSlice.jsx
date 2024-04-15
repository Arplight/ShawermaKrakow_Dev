import { createSlice } from "@reduxjs/toolkit";
import { OrderStoring } from "../store/ApiStore";
import { toast } from "react-toastify";

const OrderStoringSlice = createSlice({
  name: "orderStoring",
  initialState: {
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(OrderStoring.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(OrderStoring.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        toast.success(action.payload.message);
      })
      .addCase(OrderStoring.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default OrderStoringSlice.reducer;

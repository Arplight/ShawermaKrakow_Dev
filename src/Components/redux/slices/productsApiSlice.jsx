import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../store/ApiStore";

const productsApiSlice = createSlice({
  name: "productsApi",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = "Something went wrong!";
        state.loading = false;
      });
  },
});

export default productsApiSlice.reducer;
export const apiActions = productsApiSlice.actions;

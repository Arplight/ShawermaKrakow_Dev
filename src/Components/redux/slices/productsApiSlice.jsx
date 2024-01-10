import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "productsApi/fetchData",
  async () => {
    const response = await axios.get("https://shawermakrakow.com/api/products");
    return response.data;
  }
);

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

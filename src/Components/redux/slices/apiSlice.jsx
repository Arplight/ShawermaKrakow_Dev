import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk("api/fetchData", async () => {
  const response = await axios.get("https://shawermakrakow.com/api/products");
  return response.data;
});

const apiSlice = createSlice({
  name: "api",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state) => {
        state.error = "Something went wrong!";
        state.loading = false;
      });
  },
});
export default apiSlice.reducer;
export const apiActions = apiSlice.actions;

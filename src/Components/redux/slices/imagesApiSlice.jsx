import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchImages = createAsyncThunk("imagesApi/fetchData", async () => {
  const response = await axios.get("https://shawermakrakow.com/api/images");
  return response.data;
});

const imagesApiSlice = createSlice({
  name: "imagesApi",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchImages.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong!";
      });
  },
});
export default imagesApiSlice.reducer;
export const apiActions = imagesApiSlice.actions;

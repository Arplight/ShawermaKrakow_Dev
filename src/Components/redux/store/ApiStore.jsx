import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Products APi
export const fetchProducts = createAsyncThunk(
  "productsApi/fetchData",
  async () => {
    const response = await axios.get("https://shawermakrakow.com/api/products");
    return response.data;
  }
);

// Images APi
export const fetchImages = createAsyncThunk("imagesApi/fetchData", async () => {
  const response = await axios.get("https://shawermakrakow.com/api/images");
  return response.data;
});

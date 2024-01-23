import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiBaseUrl = "https://shawermakrakow.com/api";

// Products APi
export const fetchProducts = createAsyncThunk(
  "productsApi/fetchData",
  async () => {
    const response = await axios.get(`${apiBaseUrl}/products`);
    return response.data;
  }
);

// Images APi
export const fetchImages = createAsyncThunk("imagesApi/fetchData", async () => {
  const response = await axios.get(`${apiBaseUrl}/images`);
  return response.data;
});

// Cart GET
export const fetchCart = createAsyncThunk("cartApi/fetchData", async () => {
  const response = await axios.get(`${apiBaseUrl}/cart/list`);
  return response.data;
});

// Cart Post
export const postCart = async (currentItemData) => {
  try {
    await axios.post(`${apiBaseUrl}/cart/add`, currentItemData);
  } catch (error) {
    console.error(error);
  }
};

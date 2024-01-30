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

// Cart Reading
export const fetchCart = createAsyncThunk("cartApi/fetchData", async () => {
  const response = await axios.get(`${apiBaseUrl}/cart/list`, {
    withCredentials: true,
    withXSRFToken: true,
  });
  return response.data;
});

// Cart Adding
export const cartAdd = async (currentItemData) => {
  try {
    await axios.post(`${apiBaseUrl}/cart/add`, currentItemData, {
      withCredentials: true,
      withXSRFToken: true,
    });
  } catch (error) {
    console.error(error);
  }
};

// Cat Removing
export const cartRemove = async (currentItemId) => {
  try {
    await axios.post(
      `${apiBaseUrl}/cart/remove/${currentItemId}`,
      currentItemId,
      {
        withCredentials: true,
        withXSRFToken: true,
      }
    );
  } catch (error) {
    console.error(error);
  }
};

// Cart Update
export const cartUpdate = async (currentItemData) => {
  try {
    await axios.post(
      `${apiBaseUrl}/cart/update/${currentItemData.id}`,
      currentItemData,
      {
        withCredentials: true,
        withXSRFToken: true,
      }
    );
  } catch (error) {
    console.error(error);
  }
};

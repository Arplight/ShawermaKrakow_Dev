import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://shawermakrakow.com/api";

// Products APi
export const fetchProducts = createAsyncThunk(
  "productsApi/fetchData",
  async () => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  }
);

// Images APi
export const fetchImages = createAsyncThunk("imagesApi/fetchData", async () => {
  const response = await axios.get(`${BASE_URL}/images`);
  return response.data;
});

// Cart get
export const fetchCart = createAsyncThunk("cart/fetch", async () => {
  const response = await axios.get(`${BASE_URL}/cart/list`, {
    withCredentials: true,
    withXSRFToken: true,
  });
  return response.data;
});

// Cart Adding
export const cartAdd = async (currentItemData) => {
  try {
    await axios.post(`${BASE_URL}/cart/add`, currentItemData, {
      withCredentials: true,
      withXSRFToken: true,
    });
  } catch (error) {
    console.error(error);
  }
};

// Cart Removing
export const cartRemove = async (currentItemId) => {
  try {
    await axios.post(
      `${BASE_URL}/cart/remove/${currentItemId}`,
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
      `${BASE_URL}/cart/update/${currentItemData.id}`,
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
// Cart Reset
export const cartReset = async () => {
  try {
    await axios.post(
      `${BASE_URL}/cart/clear`,
      {},
      {
        withCredentials: true,
        withXSRFToken: true,
      }
    );
  } catch (error) {
    console.error(error);
  }
};

// Order Store api
export const OrderStoring = createAsyncThunk(
  "Order/store",
  async (orderData) => {
    const response = await axios.post(`${BASE_URL}/orders/store`, orderData, {
      withCredentials: true,
      withXSRFToken: true,
    });
    return response.data;
  }
);
// Order tracking
export const OrderTracking = createAsyncThunk(
  "order/tracking",
  async (orderAuth) => {
    const response = await axios.post(`${BASE_URL}/orders/show`, orderAuth);
    return response.data;
  }
);

// Shipping API
export const OrderShipping = createAsyncThunk(
  "Order/shipping",
  async (shippingCity) => {
    const response = await axios.post(
      `${BASE_URL}/shippings/show`,
      {
        shipping_city: shippingCity,
      },
      { withCredentials: true, withXSRFToken: true }
    );
    return response.data;
  }
);

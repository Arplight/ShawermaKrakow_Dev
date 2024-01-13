import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../store/ApiStore";
import { produce, current } from "immer";

const CartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: [],
    cartSummary: [],
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    // CRUD
    addItem(state, action) {
      const currentItemId = action.payload;
      if (state.data) {
        const currentItem = current(state.data).find(
          (item) => item.id === currentItemId
        );
        const currentItemSummary = {
          itemId: currentItemId,
          itemQuantity: 1,
          itemTotalPrice: currentItem.price_before_discount,
        };
        state.cartItems = produce(state.cartItems, (draft) => {
          draft.push(currentItem);
        }).flat(1);
        state.cartSummary = produce(state.cartSummary, (draft) => {
          draft.push(currentItemSummary);
        });
        console.log(state.cartItems, state.cartSummary);
      }
    },
    removeItem(state, action) {},
    updateItem(state, action) {},
    // Calculations
    cartTotal(state) {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const data = action.payload[0].products;
        state.data = data;
        // console.log(data);
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = "Not found";
        state.loading = false;
      });
  },
});

export default CartSlice.reducer;
export const { addItem, removeItem, updateItem, cartTotal } = CartSlice.actions;
export const currentActions = CartSlice.actions;

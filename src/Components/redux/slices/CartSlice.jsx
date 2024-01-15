import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../store/ApiStore";
import { produce } from "immer";

const CartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: [],
    cartTotal: null,
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    // CRUD
    addCartItem(state, action) {
      const currentItemInfo = action.payload;
      if (state.data) {
        const itemExists = state.cartItems.some(
          (item) => item.itemId === currentItemInfo.itemId
        );
        if (!itemExists) {
          const currentItem = state.data.find(
            (item) => item.id === currentItemInfo.itemId
          );
          const currentItemSummary = {
            itemId: currentItemInfo.itemId,
            itemStockQuantity: currentItem.quantity,
            itemOrderQuantity: currentItemInfo.itemQuantity,
            itemWeight: currentItem.weight,
            itemTitle: currentItem.name,
            itemPrice: currentItem.price_before_discount,
            itemTotalPrice:
              currentItem.price_before_discount * currentItemInfo.itemQuantity,
            itemImage: currentItem.image,
          };
          state.cartItems = produce(state.cartItems, (draft) => {
            draft.push(currentItemSummary);
          }).flat(1);
        }
        console.log(state.cartItems);
      }
    },
    removeCartItem(state, action) {
      const currentItemId = action.payload;
      if (state.data) {
        state.cartItems = state.cartItems.filter(
          (item) => item.itemId !== currentItemId
        );
      }
      console.log(state.cartItems);
    },
    updateCartItem(state, action) {
      const currentItemSummary = action.payload;

      if (state.data) {
        const currentIndex = state.cartItems.findIndex(
          (item) => item.itemId === currentItemSummary.id
        );

        state.cartItems = produce(state.cartItems, (draft) => {
          draft[currentIndex].itemOrderQuantity = currentItemSummary.quantity;
          draft[currentIndex].itemTotalPrice =
            currentItemSummary.quantity * draft[currentIndex].itemPrice;
        });
      }
      console.log(state.cartItems);
    },
    // Calculations
    cartTotal(state) {
      if (state.data) {
        const totalPrice = state.cartItems.reduce(
          (a, c) => a + c.itemTotalPrice,
          0
        );
        state.cartTotal = state.cartItems.length > 0 ? totalPrice : 0;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const data = action.payload[0].products;
        state.data = data;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = "Failed to fetch products";
        state.loading = false;
      });
  },
});

export default CartSlice.reducer;
export const { addCartItem, removeCartItem, updateCartItem, cartTotal } =
  CartSlice.actions;
export const currentActions = CartSlice.actions;

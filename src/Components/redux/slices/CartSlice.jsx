import { createSlice } from "@reduxjs/toolkit";
import { fetchCart } from "../store/ApiStore";
import { produce, current } from "immer";

const CartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: [],
    cartTotalCost: null,
    cartTotalItems: null,
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
          console.log(currentItem);
          console.log(current(state.data));

          const currentItemSummary = {
            itemId: currentItemInfo.itemId,
            itemOrderQuantity: currentItemInfo.itemQuantity,
            itemStockQuantity: currentItem && currentItem.quantity,
            itemWeight: currentItem && currentItem.weight,
            itemTitle: currentItem && currentItem.name,
            itemPrice: currentItem && currentItem.price_before_discount,
            itemTotalPrice:
              currentItem &&
              currentItem.price_before_discount * currentItemInfo.itemQuantity,
            itemImage: currentItem && currentItem.image,
          };
          state.cartItems = produce(state.cartItems, (draft) => {
            draft.push(currentItemSummary);
          }).flat(1);
        }
      }
    },
    removeCartItem(state, action) {
      const currentItemId = action.payload;
      if (state.data) {
        state.cartItems = state.cartItems.filter(
          (item) => item.itemId !== currentItemId
        );
      }
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
    },
    // Calculations
    cartTotal(state) {
      if (state.data) {
        const totalCost = state.cartItems.reduce(
          (a, c) => a + c.itemTotalPrice,
          0
        );
        const totalItems = state.cartItems.reduce(
          (a, c) => a + c.itemOrderQuantity,
          0
        );
        state.cartTotalCost = state.cartItems.length > 0 ? totalCost : 0;
        state.cartTotalItems = state.cartItems.length > 0 ? totalItems : 0;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        const data = action.payload;
        // const data = action.payload[0].products;
        state.data = data;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.error = "Failed to fetch products";
        state.loading = false;
      });
  },
});

export default CartSlice.reducer;
export const { addCartItem, removeCartItem, updateCartItem, cartTotal } =
  CartSlice.actions;
export const currentActions = CartSlice.actions;

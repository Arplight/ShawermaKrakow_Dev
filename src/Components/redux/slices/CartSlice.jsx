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
      const currentData = state.data.cartItems;
      if (state.data) {
        console.log("passed");
        console.log(current(currentData));

        const itemExists = currentData.some(
          (item) => item.itemId === currentItemInfo.itemId
        );
        if (!itemExists) {
          const currentItem = currentData.find(
            (item) => item.id === currentItemInfo.itemId
          );
          console.log(currentItem);
          console.log(current(currentData));

          const currentItemSummary = {
            itemId: currentItemInfo.itemId,
            itemOrderQuantity: currentItemInfo.itemQuantity,
            // quantity to be edited
            itemStockQuantity: currentItem && currentItem.quantity,
            //Weight to be edited
            itemWeight: currentItem && 33,
            itemTitle: currentItem && currentItem.name,
            itemPrice: currentItem && currentItem.price,
            itemTotalPrice:
              currentItem && currentItem.price * currentItemInfo.itemQuantity,
            itemImage: currentItem && currentItem.attributes.image,
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
        state.data = data;

        console.log(state.cartItems);
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

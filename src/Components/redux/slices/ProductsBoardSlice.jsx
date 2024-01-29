import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../store/ApiStore";
import { produce } from "immer";

const ProductsBoardSlice = createSlice({
  name: "productsBoard",
  initialState: {
    data: null,
    currentProducts: null,
    loading: false,
    error: null,
    // StateObject
    stateObject: {
      sortBy: null,
      currentCategories: [],
      priceRange: 50,
      isCleared: true,
    },
  },
  reducers: {
    // State Object Setter
    stateObjectSetter(state, action) {
      state.stateObject = action.payload;
    },
    // Sort Handler
    sortHandler(state) {
      const fullProducts = state.data;
      switch (state.stateObject.sortBy) {
        case "Top Rated":
          {
            state.currentProducts = produce(fullProducts, (draft) => {
              return draft.filter((top) => top.top_product);
            });
          }
          break;
        case "Price (Lowest First)":
          {
            state.currentProducts = produce(fullProducts, (draft) => {
              draft.sort(
                (a, b) => a.price_before_discount - b.price_before_discount
              );
            });
          }
          break;

        case "Price (Highest First)":
          {
            state.currentProducts = produce(fullProducts, (draft) => {
              draft.sort(
                (b, a) => a.price_before_discount - b.price_before_discount
              );
            });
          }
          break;
        // default: {
        //   state.currentProducts = fullProducts;
        // }
      }
    },
    // Category Handler
    categoryHandler(state) {
      const fullProducts = state.data;
      const length = state.stateObject.currentCategories.length;
      if (length > 0) {
        state.currentProducts = produce(fullProducts, (draft) => {
          return draft.filter((item) =>
            state.stateObject.currentCategories.includes(item.category)
          );
        });
      } else {
        state.currentProducts = fullProducts;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const response = action.payload[0].products;
        state.data = response;
        state.currentProducts = response;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = "Something went wrong!";
        state.loading = false;
      });
  },
});

export default ProductsBoardSlice.reducer;
export const { stateObjectSetter, sortHandler, categoryHandler } =
  ProductsBoardSlice.actions;

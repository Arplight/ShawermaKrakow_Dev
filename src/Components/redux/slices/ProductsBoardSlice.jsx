import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../store/ApiStore";
import { produce } from "immer";

const ProductsBoardSlice = createSlice({
  name: "productsBoard",
  initialState: {
    data: null,
    currentProducts: [],
    loading: false,
    error: null,
    // StateObject
    stateObject: sessionStorage.getItem("stateObject")
      ? JSON.parse(sessionStorage.getItem("stateObject"))
      : {
          sortBy: null,
          currentCategories: [],
          priceRange: 0,
          isCleared: true,
        },
  },
  reducers: {
    // State Object Setter
    stateObjectSetter(state, action) {
      if (state.data) {
        state.stateObject = action.payload;
        // Session Storage
        sessionStorage.setItem("stateObject", JSON.stringify(action.payload));
      }
    },

    // Sort Handler
    sortHandler(state) {
      if (state.currentProducts) {
        switch (state.stateObject.sortBy) {
          case "topRated":
            {
              state.currentProducts = produce(
                state.currentProducts,
                (draft) => {
                  return draft.filter((top) => top.top_product);
                }
              );
            }
            break;
          case "priceLowestFirst":
            {
              state.currentProducts = produce(
                state.currentProducts,
                (draft) => {
                  draft.sort(
                    (a, b) => a.price_before_discount - b.price_before_discount
                  );
                }
              );
            }
            break;

          case "priceHighestFirst":
            {
              state.currentProducts = produce(
                state.currentProducts,
                (draft) => {
                  draft.sort(
                    (b, a) => a.price_before_discount - b.price_before_discount
                  );
                }
              );
            }
            break;
          default: {
            return;
          }
        }
      }
    },

    // Category Handler
    categoryHandler(state) {
      const fullProducts = state.data;
      const length = state.stateObject.currentCategories.length;

      if (length > 0 && state.data) {
        state.currentProducts = produce(fullProducts, (draft) => {
          return draft.filter((item) =>
            state.stateObject.currentCategories.includes(item.category)
          );
        });
      } else {
        state.currentProducts = fullProducts;
      }
    },
    // PriceHandler
    priceHandler(state) {
      const currentPrice = state.stateObject.priceRange;
      if (state.currentProducts) {
        state.currentProducts = produce(state.currentProducts, (draft) => {
          return draft.filter(
            (product) => product.price_before_discount <= currentPrice
          );
        });
      }
    },
    // resetHandler
    resetHandler(state) {
      const fullProducts = state.data;
      state.currentProducts = fullProducts;
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
        state.loading = false;
        state.currentProducts = response;
        const topPrice = produce(response, (draft) => {
          draft.sort(
            (a, b) => b.price_before_discount - a.price_before_discount
          );
        });
        state.stateObject.priceRange = topPrice[0]?.price_before_discount;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.error = "Something went wrong!";
        state.loading = false;
      });
  },
});

export default ProductsBoardSlice.reducer;
export const {
  stateObjectSetter,
  sortHandler,
  categoryHandler,
  priceHandler,
  resetHandler,
} = ProductsBoardSlice.actions;

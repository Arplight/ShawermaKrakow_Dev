import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import BlockerSlice from "../slices/BlockerSlice";
import Api_1 from "../slices/productsApiSlice";
import Api_2 from "../slices/imagesApiSlice";
import CurrentProductSlice from "../slices/CurrentProductSlice";
import CartSlice from "../slices/CartSlice";
import WishlistSlice from "../slices/WishlistSlice";
import SpinnerSlice from "../slices/SpinnerSlice";
import ProductsBoardSlice from "../slices/ProductsBoardSlice";
import LanguageSlice from "../slices/LanguageSlice";
import OrderTrackingSlice from "../slices/OrderTrackingSlice";
import ShippingSlice from "../slices/ShippingSlice";
import OrderStoringSlice from "../slices/OrderStoringSlice";

export const Store = configureStore({
  reducer: {
    productsApi: Api_1,
    imagesApi: Api_2,
    blocker: BlockerSlice,
    spinner: SpinnerSlice,
    currentProduct: CurrentProductSlice,
    cart: CartSlice,
    wishList: WishlistSlice,
    Board: ProductsBoardSlice,
    language: LanguageSlice,
    orderTracking: OrderTrackingSlice,
    shipping: ShippingSlice,
    orderStoring: OrderStoringSlice,
  },
});

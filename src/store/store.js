import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import getProductsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    getProductReducer: getProductsSlice.reducer,
    cartReducer: cartSlice.reducer,
  },
});

export default store;

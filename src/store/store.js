import { configureStore } from "@reduxjs/toolkit";
import getProductsSlice from "./productsSlice";

const store = configureStore({
  reducer: {
    getProductReducer: getProductsSlice.reducer,
  },
});

export default store;

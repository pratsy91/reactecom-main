import { createSlice } from "@reduxjs/toolkit";

const getProductsSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {
    setProducts(state, action) {
      const data = action.payload;
      state.products = data.products;
    },
  },
});

export const getProductsActions = getProductsSlice.actions;

export default getProductsSlice;

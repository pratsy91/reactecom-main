import { createSlice } from "@reduxjs/toolkit";

const getProductsSlice = createSlice({
  name: "products",
  initialState: { products: [], isLoading: false },
  reducers: {
    setProducts(state, action) {
      const data = action.payload;
      state.products = data.products;
    },
    setLoading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const getProductsActions = getProductsSlice.actions;

export default getProductsSlice;

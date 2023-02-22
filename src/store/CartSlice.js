import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    show: false,
    cartProducts: [],
  },
  reducers: {
    showCart(state) {
      state.show = true;
    },
    CloseCart(state) {
      state.show = false;
    },
    setCart(state, action) {
      const data = action.payload;
      const products = data.products;
      state.cartProducts = products;
    },
    addToCart(state, action) {
      const data = action.payload;
      const product = data.product;
      if (state.cartProducts.length === 0) {
        state.cartProducts.push(product);
      } else {
        const existingProduct = state.cartProducts.find((prod) => {
          return prod.id === product.id;
        });
        if (!existingProduct) {
          state.cartProducts.push(product);
        } else {
          existingProduct.quantity =
            existingProduct.quantity + product.quantity;
        }
      }
    },
    removeFromCart(state, action) {
      const data = action.payload;
      const id = data.id;
      const existingProduct = state.cartProducts.find((prod) => {
        return prod.id === id;
      });
      if (existingProduct.quantity === 1) {
        state.cartProducts = state.cartProducts.filter(
          (prod) => prod.id !== id
        );
      } else {
        existingProduct.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

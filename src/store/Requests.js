import { redirect } from "react-router-dom";
import { getProductsActions } from "./productsSlice";

export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth?mode=login");
  }

  return null;
}

export const getProducts = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch("https://api.pujakaitem.com/api/products");
      return response;
    };
    try {
      const response = await sendRequest();
      const data = await response.json();
      dispatch(getProductsActions.setProducts({ products: data }));
    } catch (error) {}
  };
};

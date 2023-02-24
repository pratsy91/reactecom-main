import { redirect } from "react-router-dom";
import { cartActions } from "./CartSlice";
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
      dispatch(getProductsActions.setLoading());
      const response = await fetch("https://api.pujakaitem.com/api/products");
      return response;
    };
    try {
      const response = await sendRequest();
      dispatch(getProductsActions.setLoading());
      const data = await response.json();
      dispatch(getProductsActions.setProducts({ products: data }));
    } catch (error) {}
  };
};

export const sendCart = (product) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const email = localStorage.getItem("email");
      const emailNode = email.replace(".", "");
      const response = await fetch(
        `https://e-com-app-a54c5-default-rtdb.asia-southeast1.firebasedatabase.app/${emailNode}/${product.id}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );
      return response;
    };
    try {
      const response = await sendRequest();

      if (response.ok) {
      }
    } catch (error) {}
  };
};

export const getCart = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const email = localStorage.getItem("email");
      const emailNode = email.replace(".", "");
      const response = await fetch(
        `https://e-com-app-a54c5-default-rtdb.asia-southeast1.firebasedatabase.app/${emailNode}.json`
      );
      return response;
    };
    try {
      const response = await sendRequest();
      const data = await response.json();
      const loadedProducts = [];
      for (const key in data) {
        loadedProducts.push({
          id: data[key].id,
          image: data[key].image,
          name: data[key].name,
          quantity: data[key].quantity,
        });
      }
      dispatch(cartActions.setCart({ products: loadedProducts }));
    } catch (error) {}
  };
};

export const updateCart = (product) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const email = localStorage.getItem("email");
      const emailNode = email.replace(".", "");
      const response = await fetch(
        `https://e-com-app-a54c5-default-rtdb.asia-southeast1.firebasedatabase.app/${emailNode}/${product.id}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );
      return response;
    };
    try {
      const response = await sendRequest();

      if (response.ok) {
      }
    } catch (error) {}
  };
};

export const deleteCart = (id) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const email = localStorage.getItem("email");
      const emailNode = email.replace(".", "");
      const response = await fetch(
        `https://e-com-app-a54c5-default-rtdb.asia-southeast1.firebasedatabase.app/${emailNode}/${id}.json`,
        {
          method: "Delete",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    };
    try {
      const response = await sendRequest();

      if (response.ok) {
      }
    } catch (error) {}
  };
};

export const deleteCartBack = () => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const email = localStorage.getItem("email");
      const emailNode = email.replace(".", "");
      const response = await fetch(
        `https://e-com-app-a54c5-default-rtdb.asia-southeast1.firebasedatabase.app/${emailNode}.json`,
        {
          method: "Delete",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response;
    };
    try {
      const response = await sendRequest();

      if (response.ok) {
      }
    } catch (error) {}
  };
};

import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const url = "https://api.pujakaitem.com/api/products";

  const getProducts = async (url) => {
    const reponse = await axios.get(url);
  };

  useEffect(() => {
    getProducts(url);
  });

  return <AppContext.Provider>{props.children}</AppContext.Provider>;
};

export default AppContextProvider;

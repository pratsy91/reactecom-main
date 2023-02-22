import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Cart from "../components/CartModal";

const Root = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Cart />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Root;
<React.Fragment>
  <NavBar />
</React.Fragment>;

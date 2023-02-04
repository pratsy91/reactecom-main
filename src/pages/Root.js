import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Root = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
    </React.Fragment>
  );
};

export default Root;
<React.Fragment>
  <NavBar />
</React.Fragment>;

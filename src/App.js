import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Products from "./pages/Products";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact-us", element: <ContactUs /> },
      { path: "/products", element: <Products /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Products from "./pages/Products";
import About from "./pages/About";
import Error from "./pages/Error";
import Product, { productLoader } from "./pages/Product";
import Authentication, { authAction } from "./pages/Authentication";
import { checkAuthLoader, tokenLoader } from "./store/Requests";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    id: "token",
    loader: tokenLoader,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "auth", element: <Authentication />, action: authAction },
      { path: "contact-us", element: <ContactUs /> },
      { path: "products", element: <Products />, loader: checkAuthLoader },
      {
        path: "products/:productId",
        element: <Product />,
        loader: productLoader,
      },
      { path: "about", element: <About /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Brands from "../pages/Brands";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/brands',
        element: <Brands></Brands>
      }
    ]
  },
]);

export default routers;

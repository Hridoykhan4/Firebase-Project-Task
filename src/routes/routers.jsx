import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Brands from "../pages/Brands";
import CouponDetails from "../pages/CouponDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile";
import AboutUs from "../pages/AboutUs";
import ForgetPassword from "../pages/ForgetPassword";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/brands",
        element: <Brands></Brands>,
      },
      {
        path: "/coupon/:couponId",
        element: (
          <PrivateRoute>
            <CouponDetails></CouponDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myProfile",
        element: (
          <PrivateRoute>
            <MyProfile></MyProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: '/forgetPassword',
        element: <ForgetPassword></ForgetPassword>
      }
    ],
  },
]);

export default routers;

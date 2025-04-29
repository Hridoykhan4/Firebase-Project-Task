import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/routers";
import "animate.css";
import WatchesProvider from "./providers/WatchesProvider";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster></Toaster>

    <AuthProvider>
      <WatchesProvider>
        <RouterProvider router={routers}></RouterProvider>
      </WatchesProvider>
    </AuthProvider>
  </StrictMode>
);

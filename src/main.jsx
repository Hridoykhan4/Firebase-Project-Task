import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/routers";
import "animate.css";
import WatchesProvider from "./providers/WatchesProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WatchesProvider>
      <RouterProvider router={routers}></RouterProvider>
    </WatchesProvider>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "../auth/signin/SignIn";
import Home from "./pages/home/Home";

const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home/>
      }
    ]
  },
  {
    path: "/auth/signin",
    element: <SignIn />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "../auth/signin/SignIn";
import Home from "./pages/home/Home";
import { ClerkProvider } from "@clerk/clerk-react";
import Dashboard from "./pages/dashboard/Dashboard";
import EditResume from "./pages/dashboard/resume/[resumeId]/EditResume/EditResume";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
      {
        path:'/dashboard/resume/:resumeId/edit',
        element:<EditResume/>
      }
    ],
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/auth/signin",
    element: <SignInPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);

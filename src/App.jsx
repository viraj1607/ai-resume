import { useUser } from "@clerk/clerk-react";
import "./App.css";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/custom/Header";
import { Toaster } from "./components/ui/sonner";

function App() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/signin"} />;
  }
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>
  );
}

export default App;

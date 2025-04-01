import { useUser } from "@clerk/clerk-react";
import "./App.css";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/custom/Header";

function App() {
  const { isSignedIn, user, isLoaded } = useUser();

  if (!isSignedIn && isLoaded) {
    return <Navigate to={"/auth/signin"} />;
  }
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;

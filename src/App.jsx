import { useUser } from "@clerk/clerk-react";
import "./App.css";
import { Navigate, Outlet } from "react-router-dom";

function App() {
  const { isSignedIn, user, isLoaded } = useUser()

  if(!isSignedIn && isLoaded){
    return <Navigate to={'/auth/signin'}/>
  }
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;

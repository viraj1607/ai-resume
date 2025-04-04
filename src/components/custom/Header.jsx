import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <div className="flex justify-between items-center p-5 bg-gray-50">
      <h1 className="font-extrabold text-3xl">AI Resume Builder</h1>
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link to={"auth/signin"}>
          <Button className="cursor-pointer">Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;

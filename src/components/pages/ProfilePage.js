import React from "react";
import { Link } from "react-router-dom";

export default function ProfilePage() {
  return (
    <div>
      Welcome, please <Link to={"/sign-in"}>Sign In</Link>
      {/* , or <Link >Sign Up</Link> */}
    </div>
  );
}

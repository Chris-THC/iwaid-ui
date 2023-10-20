import React from "react";
import { Navigate } from "react-router-dom";

// Todo this component just is a control to redirect to a specific page
// * if the user is not logged in
export const ProtectedRoutes = ({
  user,
  userRoll,
  children,
  redirectTo = "/login",
}) => {
  console.log(user);
  if (!user || userRoll !== "doctor") {
    return <Navigate to={redirectTo} />;
  }

  return children;
};

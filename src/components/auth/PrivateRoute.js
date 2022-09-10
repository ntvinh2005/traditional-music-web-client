import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { authState: { authLoading, isAuthenticated } } = useContext(AuthContext);
  console.log(isAuthenticated, authLoading, "Ving")

  return (
    <div>{isAuthenticated && !authLoading ? children : <Navigate to="/login" />}</div>
  );
};

export default PrivateRoute;

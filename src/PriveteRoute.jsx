import React from "react";
import { Navigate } from "react-router-dom";
import { homeRoute } from "./App";

function PrivateRoute({ children }) {

     const token = localStorage.getItem("token");

     if (!token) {
          return <Navigate to={`${homeRoute}/login`} />;
     }
     return children;
}

export default PrivateRoute;
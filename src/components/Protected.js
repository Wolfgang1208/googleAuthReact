import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

// if there is no user, app will not allow access to the protected pages
const Protected = ({children}) => {
  const { user } = UserAuth();
  if(!user){
    return (<Navigate to={'/'} />)
  }
  return children;
};

export default Protected;

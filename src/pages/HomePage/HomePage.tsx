import React from "react";
import { useAppSelector } from "../../hooks";
import { Navigate } from "react-router-dom";
const HomePage = () => {
  const isAuth = useAppSelector((state) => state.user.auth);

  if (!isAuth) {
    return <>HomePage</>;
  }
  return <Navigate to="/profile" />;
};

export default HomePage;

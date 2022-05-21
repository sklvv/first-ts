import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks";
interface IProps {
  children: React.ReactNode;
}
const PrivateRoute = (props: IProps) => {
  const isAuth = useAppSelector((state) => state.user.auth);

  if (isAuth) {
    return <>{props.children}</>;
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;

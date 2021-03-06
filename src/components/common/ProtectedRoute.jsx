import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";

const ProtectedRoute = ({
  component: Component,
  render,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.getToken()) return <Redirect to="/login" />;
        return <Component {...props} {...rest} />;
      }}
    />
  );
};

export default ProtectedRoute;

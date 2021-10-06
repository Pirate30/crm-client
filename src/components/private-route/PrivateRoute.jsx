import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import DefaultLayout from "../../layout/DefaultLayout";

export default function PrivateRoute({ children, ...rest }) {
  const isAuth = true;

  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
      }
    />
  );
}

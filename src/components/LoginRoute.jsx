import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import Login from "../authentication/Login";
import Loading from "../pages/Loading";
import * as userSelectors from "../store/user/selectors";

const LoginRoute = (props) => {
  const user = useSelector(userSelectors.getUser);
  const autoLoginError = useSelector(userSelectors.getAutoLoginError);

  const getRendering = () => {
    if (autoLoginError) return <Login />;
    return user ? <Redirect to="/dashboard" /> : <Loading />;
  };

  return <Route {...props}>{getRendering()}</Route>;
};

export default LoginRoute;

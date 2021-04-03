import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import Login from "../authentication/Login";
import Loading from "../pages/Loading";
import * as userSelectors from "../store/user/selectors";

const LoginRoute = (props) => {
  const user = useSelector(userSelectors.getUser);
  const autoLoginError = useSelector(userSelectors.getAutoLoginError);
  const loginError = useSelector(userSelectors.getLoginError);

  const getRendering = () => {
    if (autoLoginError) return <Login />;
    if (loginError)
      return <Login loginErrorMsg="Incorrect email/password combination" />;
    return user ? <Redirect to="/dashboard" /> : <Loading />;
  };

  return <Route {...props}>{getRendering()}</Route>;
};

export default LoginRoute;

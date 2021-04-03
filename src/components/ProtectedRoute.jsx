import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import Loading from "../pages/Loading";
import { autoLogin } from "../store/user/actions";
import * as userSelectors from "../store/user/selectors";

const ProtectedRoute = (props) => {
  const user = useSelector(userSelectors.getUser);
  const autoLoginError = useSelector(userSelectors.getAutoLoginError);

  const getRendering = () => {
    if (autoLoginError) return <Redirect to="/login" />;
    return user ? props.children : <Loading />;
  };

  return <Route {...props}>{getRendering()}</Route>;
};

export default ProtectedRoute;

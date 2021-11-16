import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import LoginRoute from "../../components/LoginRoute";
import ProtectedRoute from "../../components/ProtectedRoute";
import Registration from "../../authentication/Registration";
import ProfileModal from "../../components/Modals/ProfileModal";
import CreateAmbassadorModal from "../../components/Modals/CreateAmbassadorModal";
import Dashboard from "../../pages/Dashboard";
import Sessions from "../../pages/Sessions";
import Profile from "../../pages/Profile";
import * as userSelectors from "../../store/user/selectors";
import * as userActions from "../../store/user/actions";

import "./styles.css";
import "semantic-ui-css/semantic.min.css";
import ToastWarning from "../../components/Alerts/ToastWarning";
import ToastSuccess from "../../components/Alerts/ToastSuccess";
import ToastError from "../../components/Alerts/ToastError";

function App() {
  let [registerSuccess, setRegisterSuccess] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(userSelectors.getUser);

  useEffect(() => {
    dispatch(userActions.autoLogin());
  }, []);

  return (
    <div className="App">
      <div style={{ height: "100%" }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route path="/register">
              {registerSuccess ? (
                <Redirect to="/login" />
              ) : (
                <Registration setRegisterSuccess={setRegisterSuccess} />
              )}
            </Route>
            <ProtectedRoute path="/toastwarning">
              <ToastWarning />
            </ProtectedRoute>
            <ProtectedRoute path="/toastsuccess">
              <ToastSuccess />
            </ProtectedRoute>
            <ProtectedRoute path="/toasterror">
              <ToastError />
            </ProtectedRoute>
            <ProtectedRoute path="/dashboard">
              <Dashboard />
            </ProtectedRoute>
            <ProtectedRoute path="/profile">
              <Profile />
            </ProtectedRoute>
            <ProtectedRoute path="/students/:id/sessions">
              <Sessions />
            </ProtectedRoute>
            <ProtectedRoute path="/modal">
              <ProfileModal />
              <CreateAmbassadorModal />
            </ProtectedRoute>
            <LoginRoute />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

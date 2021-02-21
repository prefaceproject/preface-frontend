import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Registration from "../../authentication/Registration";
import Login from "../../authentication/Login";
import ProfileModal from "../../components/Modals/ProfileModal";
import CreateAmbassadorModal from "../../components/Modals/CreateAmbassadorModal";
import Dashboard from "../../pages/Dashboard";
import Sessions from "../../pages/Sessions";
import Profile from "../../pages/Profile";
import StudentCard from "../../components/StudentCard";
import * as userSelectors from "../../store/user/selectors";
import * as userActions from "../../store/user/actions";

import "./styles.css";
import "semantic-ui-css/semantic.min.css";

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
            <Route path="/login">
              {user ? <Redirect to="/dashboard" /> : <Login />}
            </Route>
            <Route path="/dashboard">
              {user ? <Dashboard /> : <Redirect to="/login" />}
            </Route>
            <Route path="/profile">
              {/* TODO: restrict unauthenticated/unauthorized access to profile page */}
              {/* {user ? <Profile /> : <Redirect to="/login" />} */}
              <Profile />
            </Route>
            <Route path="/Card">
              <StudentCard />
            </Route>
            <Route path="/students/:id/sessions">
              {/* TODO: restrict unauthenticated/unauthorized access to sessions page */}
              {/* {user ? <Sessions /> : <Redirect to="/login" />} */}
              <Sessions />
            </Route>
            <Route path="/modal">
              {/* TODO: restrict unauthenticated/unauthorized access to teacher profile modal */}
              {/* {user ? <ProfileModal /> : <Redirect to="/login" />} */}
              <ProfileModal />
              <CreateAmbassadorModal />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

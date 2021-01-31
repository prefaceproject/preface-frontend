import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Registration from '../../authentication/Registration'
import Login from '../../authentication/Login'
import CreateSessionModal from '../../components/Modals/CreateSessionModal'
import ProfileModal from '../../components/Modals/ProfileModal'
import Dashboard from "../../pages/Dashboard";
import Sessions from "../../pages/Sessions";
import Card from "../../components/CardContainer";
import Profile from "../../pages/Profile";
import StudentCard from "../../components/StudentCard";
import Book from "../../pages/Books";

import * as exampleSelectors from "../../store/example/selectors";
import * as exampleActions from "../../store/example/actions";
import * as userSelectors from "../../store/user/selectors";
import * as bookSelectors from "../../store/books/selectors";

import "./styles.css";
import "semantic-ui-css/semantic.min.css";

import Cookies from "js-cookie";

function App() {
  // let [user, setUser] = useState("");
  let [registerSuccess, setRegisterSuccess] = useState(false);
  // initialize dispatch
  const dispatch = useDispatch();
  // read redux state
  const exampleReduxData = useSelector(exampleSelectors.getExampleData);
  const exampleReduxLoading = useSelector(exampleSelectors.getExampleLoading);
  const exampleReduxError = useSelector(exampleSelectors.getExampleError);
  const user = useSelector(userSelectors.getUser);

  // local state
  const [data, setData] = useState(null);

  const callBackendAPI = async () => {
    const response = await fetch("/test");
    const body = await response.json();

    if (response.status !== 200) {
      throw new Error(body.message);
    }
    return body;
  };

  const exampleReduxSagaRequest = () => {
    // dispatch with desired action
    dispatch(exampleActions.exampleRequestData());
  };

  useEffect(() => {
    callBackendAPI()
      .then((res) => setData(res.express))
      .catch((err) => console.error(err));

    exampleReduxSagaRequest();
  }, []);

  if (exampleReduxLoading) return <div>LOADING...</div>;

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
              <Profile />
            </Route>
            <Route path="/Card">
              <StudentCard />
            </Route>
            <Route path="/sessions">
              {<Sessions />}
            </Route>
            <Route path="/modal">
              <CreateSessionModal />
              <ProfileModal />
            </Route>
            <Route path="/Book">
              <Book/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

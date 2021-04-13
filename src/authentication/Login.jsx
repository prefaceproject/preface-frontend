import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";
import HelpModal from "../components/Modals/HelpModal";
import * as userActions from "../store/user/actions";
import "./Registration.css";

const Login = ({ loginErrorMsg }) => {
  const dispatch = useDispatch();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    const loginUser = { email, password };
    dispatch(userActions.setAutoLoginError(null));
    dispatch(userActions.setLoginError(null));
    dispatch(userActions.loginUser({ user: loginUser }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="Registration">
      <div className="registration-form">
        <img className="logo" src={Logo} alt="" />
        <Form className="semantics-form login" onSubmit={handleSubmit}>
          <Form.Field>
            <div>Email</div>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field>
            <div>Password</div>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Field>
          <div className="forgot-password" onClick={() => setIsModalOpen(true)}>
            Forgot Password?
          </div>
          <div className="button-container">
            <Button
              disabled={!email || !password}
              type="submit"
              className="blue"
              fluid
            >
              Login
            </Button>
            <Link to="/register">
              <Button color="violet" fluid>
                Register
              </Button>
            </Link>
          </div>
          <div className="error-container">
            <span className="error">{loginErrorMsg || ""}</span>
          </div>
        </Form>
        <HelpModal
          isOpen={isModalOpen}
          close={closeModal}
          category="password"
        />
      </div>
    </div>
  );
};

export default Login;

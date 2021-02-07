import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import Logo from "../assets/logo.png";

import * as userActions from "../store/user/actions";

import "./Registration.css";

const Login = () => {
  const dispatch = useDispatch();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = () => {
    const loginUser = { email, password };
    dispatch(userActions.loginUser({ user: loginUser }));
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Field>
          <div className="button-container">
            <Button type="submit" className="blue">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;

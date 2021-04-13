import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.png";

import "./Registration.css";

import { backend_url } from "../constants/url";

const Registration = (props) => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = () => {
    const user = { email, firstName, lastName, password };

    fetch(`${backend_url}/api/auth/register`, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.success) {
          props.setRegisterSuccess(true);
        }
      });
  };
  return (
    <div className="Registration">
      <div className="registration-form">
        <img className="logo" src={Logo} alt="" />
        <Form className="semantics-form" onSubmit={handleSubmit}>
          <Form.Field>
            <div>First Name</div>
            <input
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </Form.Field>
          <Form.Field>
            <div>Last Name</div>
            <input
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </Form.Field>
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
          <Form.Field>
            <div>Confirm Password</div>
            <input
              type="password"
              onChange={(e) => {
                setPasswordConfirmation(e.target.value);
              }}
            />
          </Form.Field>
          <div className="button-container">
            <Button
              disabled={
                !firstName ||
                !lastName ||
                !email ||
                !password ||
                !passwordConfirmation ||
                password !== passwordConfirmation
              }
              type="submit"
              className="blue"
            >
              Create Account
            </Button>
            <Link to="/login">
              <Button color="violet" fluid>
                Login
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Registration;

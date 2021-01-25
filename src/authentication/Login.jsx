import React, { useState, useEffect, useCallback } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { BrowserRouter as Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Logo from '../assets/logo.png'

import * as userActions from "../store/user/actions";
import Cookies from 'js-cookie';

import './Registration.css'

import { backend_url } from '../constants/url'

const Login = () => {
  const dispatch = useDispatch();
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  useEffect(() => {
    const token = !(Cookies.get('token') === null);
    const userToken = token ? Cookies.get('token') : '';

    fetch(`${backend_url}/api/auth/current`, {
      method: 'GET', 
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Authorization": "Token " + userToken
      },
    }).then((res) => {
      return res.json()
    }).then((res) => {
      console.log(res)
      if (res.success) {
        dispatch(userActions.setUser(res.user));
      }
    });
  }, [])

  const handleSubmit = () => {
    console.log('handling submit')
    const user = { email, password }
    dispatch(userActions.loginUser({user: user}))
  }

  return (
    <div className="Registration">
      <div className="registration-form">
        <img className="logo" src={Logo} alt="" />
        <Form className="semantics-form login" onSubmit={handleSubmit}>
          <Form.Field>
            <div>Email</div>
            <input
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </Form.Field>
          <Form.Field>
            <div>Password</div>
            <input
              onChange={(e) => {
                setPassword(e.target.value)
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
  )
}

export default Login

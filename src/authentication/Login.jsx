import React, { useState, useEffect, useCallback } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { BrowserRouter as Redirect } from 'react-router-dom'

import Logo from '../assets/logo.png'

import Cookies from 'js-cookie';

import './Registration.css'

const Login = (props) => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  useEffect(() => {
    
    const token = !(Cookies.get('token') === null);
    const userToken = token ? Cookies.get('token') : '';

    fetch('http://localhost:5000/api/auth/current', {
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
        props.setUser(res.user)

      }
    });
  }, [])

  const handleSubmit = () => {
    console.log('handling submit')
    const user = { email, password }

    fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: user,
      }),
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        if (res.success == true) {
          Cookies.set('token', res.user.token, { expires: 1 });
          props.setUser(res.user)
        }
        console.log(res.success == true)
        console.log(Cookies.get('token'))
      })
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

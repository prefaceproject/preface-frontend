import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'

import Logo from '../assets/logo.png'

import './Registration.css'

const Login = () => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  const handleSubmit = () => {
    console.log('handling submit')
    const user = { email, password }

    fetch('http://localhost:5000/api/auth/login', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: user,
      }), // body data type must match "Content-Type" header
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        console.log(res)
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

import React, { useState } from 'react'
import { Button, Form, Grid, Image } from 'semantic-ui-react'
import axios from 'axios'

import Logo from '../assets/logo.png'

import './Registration.css'

const Registration = (props) => {
  let [firstName, setFirstName] = useState('')
  let [lastName, setLastName] = useState('')
  let [password, setPassword] = useState('')
  let [email, setEmail] = useState('')
  let [confirmPassword, setconfirmPassword] = useState('')

  const handleSubmit = () => {
    const user = { email, firstName, lastName, password }

    fetch('http://localhost:5000/api/auth/register', {
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
        if (res.success) {
          props.setRegisterSuccess(true)
        }
      })
  }
  return (
    <div className="Registration">
      <div className="registration-form">
        <img className="logo" src={Logo} alt="" />
        <Form className="semantics-form" onSubmit={handleSubmit}>
          <Form.Field>
            <div>First Name</div>
            <input
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
          </Form.Field>
          <Form.Field>
            <div>Last Name</div>
            <input
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </Form.Field>
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
          <Form.Field>
            <div>Confirm Password</div>
            <input
              onChange={(e) => {
                setconfirmPassword(e.target.value)
              }}
            />
          </Form.Field>
          <div className="button-container">
            <Button type="submit" className="blue">
              Create Account
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Registration

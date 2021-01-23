import React from 'react'
import { Button, Form } from 'semantic-ui-react'

import Logo from '../assets/logo.png'

import './Registration.css'

const Login = () => {
  const handleSubmit = () => {
    console.log('handling submit')
  }

  return (
    <div className="Registration">
      <div className="registration-form">
        <img className="logo" src={Logo} alt="" />
        <Form className="semantics-form login" onSubmit={handleSubmit}>
          <Form.Field>
            <div>Email</div>
            <input />
          </Form.Field>
          <Form.Field>
            <div>Password</div>
            <input />
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

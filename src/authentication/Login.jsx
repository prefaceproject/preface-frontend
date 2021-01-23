import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const Login = () => {
  const handleSubmit = () => {
    console.log('handling submit')
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" />
        </Form.Field>
        <Button type="submit">Create Account</Button>
      </Form>
    </div>
  )
}

export default Login

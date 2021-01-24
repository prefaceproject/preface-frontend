import React from 'react'
import Layout from '../components/Layout'
import { Button, Form } from 'semantic-ui-react'
import Logo from '../assets/logo.png'

import '../authentication/Registration.css'

const Registration = () => {
  const handleSubmit = () => {
    console.log('handling submit')
  }
  return (
    <Layout navbar={false} footer={false} white={false}>
      <div className="registration-form">
        <img className="logo" src={Logo} alt="" />
        <Form className="semantics-form" onSubmit={handleSubmit}>
          <Form.Field>
            <div>First Name</div>
            <input />
          </Form.Field>
          <Form.Field>
            <div>Last Name</div>
            <input />
          </Form.Field>
          <Form.Field>
            <div>Email</div>
            <input />
          </Form.Field>
          <Form.Field>
            <div>Password</div>
            <input />
          </Form.Field>
          <Form.Field>
            <div>Confirm Password</div>
            <input />
          </Form.Field>
          <div className="button-container">
            <Button type="submit" className="blue">
              Create Account
            </Button>
          </div>
        </Form>
      </div>
    </Layout>
  )
}

export default Registration

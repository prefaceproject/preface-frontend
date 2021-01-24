import React from "react";
import Layout from "../components/Layout";
import { Form } from "semantic-ui-react";
import "../index.css";

const Profile = () => {
  return (
    <>
      <Layout navbar={false}>
        <h2>User Profile</h2>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input placeholder="Email" />
          </Form.Field>
        </Form>
      </Layout>
    </>
  );
};

export default Profile;

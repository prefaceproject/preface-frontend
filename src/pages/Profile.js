import React from "react";
import Layout from "../components/Layout";
import { Form } from "semantic-ui-react";
import "../index.css";
import SessionsPageHeader from "../components/SessionsPageHeader";

const Profile = () => {
  return (
    <>
      <Layout>
        <SessionsPageHeader></SessionsPageHeader>
        <div style={{ width: "50%" }}>
          <h1>User Profile</h1>
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
            <Form.Field>
              <label>Languages Spoken</label>
              <input placeholder="Languages Spoken" />
            </Form.Field>
          </Form>
        </div>
      </Layout>
    </>
  );
};

export default Profile;

import React, { useState } from "react";
import Layout from "../components/Layout";
import { Form, Button, Container } from "semantic-ui-react";
import "../index.css";
import { connect } from "react-redux";
import ProfilePageHeader from "../components/ProfilePageHeader";
import { Link } from "react-router-dom";

import "./styles/Profile.css";
import ChangePasswordModal from "../components/Modals/ChangePasswordModal";

const Profile = ({ user }) => {
  console.log(user);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [modalOpen, setModalOpen] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState({success: false, message: ""});

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Layout>
        <Container>
          <ProfilePageHeader></ProfilePageHeader>
          <div style={{ width: "50%" }}>
            <h1>User Profile</h1>
            <Form>
              <Form.Field>
                <label>First Name</label>
                <input placeholder="First Name" value={firstName} readOnly />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder="Last Name" value={lastName} readOnly />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input placeholder="Email" value={email} readOnly />
              </Form.Field>
              <Form.Field>
                <label>Languages Spoken</label>
                <input placeholder="Languages Spoken" readOnly />
              </Form.Field>
              <Form.Field>
                <label>School</label>
                <input placeholder="Add School Name" />
              </Form.Field>
              <div className="buttons">
                <Button 
                  basic 
                  color="blue" 
                  onClick={() => setModalOpen(true)}>
                    Change Password
                </Button>
                <Button color="blue">Save</Button>
              </div>
              <div className={passwordStatus.success ? "passwordStatus pass" : "passwordStatus fail"}>
                {passwordStatus.message}
              </div>
            </Form>
          </div>
        </Container>
      </Layout>
      <ChangePasswordModal
        isOpen={modalOpen}
        close={closeModal}
        setStatus={setPasswordStatus}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStateToProps)(Profile);

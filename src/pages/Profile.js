import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { Form, Button, Container, Dropdown } from "semantic-ui-react";
import "../index.css";
import { connect } from "react-redux";
import ProfilePageHeader from "../components/ProfilePageHeader";
import { Link } from "react-router-dom";

import "./styles/Profile.css";
import ChangePasswordModal from "../components/Modals/ChangePasswordModal";
import {useDispatch, useSelector} from 'react-redux';
import * as userActions from "../store/user/actions";
import * as userSelectors from "../store/user/selectors";



const Profile = ({ }) => {

  const user = useSelector(userSelectors.getUser);

  console.log(user);
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [modalOpen, setModalOpen] = useState(false);
  const [passwordStatus, setPasswordStatus] = useState({success: false, message: ""});
  const [school, setSchool] = useState(user.school ? user.school : "");
  const [languagesSpoken, setLanguagesSpoken] = useState(user.languagesSpoken);
  const [isActive, setIsActive] = useState(user.isActive);
  const [students, setStudents] = useState(user.students);
  const dispatch = useDispatch();

  useEffect(() => {
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setEmail(user.email)
    setSchool(user.school ? user.school : "")
    setLanguagesSpoken(user.languagesSpoken)
    setIsActive(user.isActive)
    setStudents(user.students)
  }, [user]);

  const languagesSpokenOptions = [
    { key: 'English', value: 'English', text: 'English' },
    { key: 'French', value: 'French', text: 'French' },
    { key: 'Spanish', value: 'Spanish', text: 'Spanish' },
    { key: 'German', value: 'German', text: 'German' },
    { key: 'Italian', value: 'Italian', text: 'Italian' },
    { key: 'Greek', value: 'Greek', text: 'Greek' },
    { key: 'Mandarin', value: 'Mandarin', text: 'Mandarin' },
    { key: 'Japanese', value: 'Japanese', text: 'Japanese' }
  ]


  const closeModal = () => {
    setModalOpen(false);
  };

  function handleSave() {

    console.log("languagesSpoken", languagesSpoken)
    if (user.role == 'ambassador') {
      dispatch(userActions.updateAmbassadorProfile({ 
        user: {
            role: "ambassador", 
            firstName: firstName,
            lastName: lastName,
            email: email, 
            students: students,
            isActive: isActive,
            _id: user._id,
            school: school,
            languagesSpoken: languagesSpoken
        } 
      }))       
    }
    else {
      dispatch(userActions.updateTeacherProfile({ 
        user: {
            role: "teacher", 
            firstName: firstName,
            lastName: lastName,
            email: email, 
            students: students,
            isActive: isActive,
            _id: user._id,
            school: school,
            languagesSpoken: languagesSpoken
        } 
      }))        
    }

    // dispatch(userActions.fetchUser())
}

const handleLanguagesSpoken = (e, {value}) => {
  console.log("WUNNA")
  setLanguagesSpoken(value)
}



  return (
    <>
      <Layout>
        <Container>
          <ProfilePageHeader></ProfilePageHeader>
          <div className="profileMain">
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
                <Dropdown
                  onChange={handleLanguagesSpoken}
                  fluid
                  multiple
                  selection
                  options={languagesSpokenOptions}
                  defaultValue={languagesSpoken}
                />
              </Form.Field>
              <Form.Field>
                <label>School</label>
                <input placeholder="Add School Name" value = {school}  onChange={(event) =>  setSchool(event.target.value)}/>
              </Form.Field>
              <div className="buttons">
                <Button 
                  basic 
                  color="blue" 
                  onClick={() => setModalOpen(true)}>
                    Change Password
                </Button>
                <Button color="blue" onClick={handleSave}>Save</Button>
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
});

export default connect(mapStateToProps)(Profile);

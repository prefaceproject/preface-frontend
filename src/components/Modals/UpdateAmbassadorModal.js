import React, { useState, useEffect } from "react";

import {
  Button,
  Form,
  Header,
  Image,
  Modal,
  Checkbox,
  Dropdown,
  Icon,
} from "semantic-ui-react";

import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../store/user/actions";
import * as studentsSelectors from "../../store/students/selectors";
import AdminResetPasswordModal from "./AdminResetPasswordModal";

import "./UpdateAmbassadorModal.css";

function UpdateAmbassadorModal({ profile }) {
  const languagesSpokenOptions = [
    { key: "English", value: "English", text: "English" },
    { key: "French", value: "French", text: "French" },
    { key: "Spanish", value: "Spanish", text: "Spanish" },
    { key: "German", value: "German", text: "German" },
    { key: "Italian", value: "Italian", text: "Italian" },
    { key: "Greek", value: "Greek", text: "Greek" },
    { key: "Mandarin", value: "Mandarin", text: "Mandarin" },
    { key: "Japanese", value: "Japanese", text: "Japanese" },
  ];

  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [email, setEmail] = useState(profile.email);
  const [languagesSpoken, setLanguagesSpoken] = useState(
    profile.languagesSpoken
  );

  const [assignedStudents, setAssignedStudents] = useState(profile.students);
  const [isActive, setIsActive] = useState(profile.isActive);
  const [isRegistered, setIsRegistered] = useState(profile.isRegistered);
  const [resetModalOpen, setResetModalOpen] = useState(false);
  const [isDirtyForm, setIsDirtyForm] = useState(false);

  const dispatch = useDispatch();

  const students = useSelector(studentsSelectors.getAllStudents);

  useEffect(() => {
    setFirstName(profile.firstName);
    setLastName(profile.lastName);
    setEmail(profile.email);
    setLanguagesSpoken(profile.languagesSpoken);
    setAssignedStudents(profile.students);
    setIsActive(profile.isActive);
    setIsRegistered(profile.isRegistered);
  }, [profile]);

  useEffect(() => {
    if (
      profile.firstName == firstName &&
      profile.lastName == lastName &&
      profile.email == email &&
      profile.isActive == isActive
    ) {
      if (
        profile.languagesSpoken == null ||
        profile.languagesSpoken?.length == 0
      ) {
        if (languagesSpoken?.length > 0) return setIsDirtyForm(true);
      } else if (profile.languagesSpoken?.length != languagesSpoken?.length) {
        return setIsDirtyForm(true);
      } else {
        for (var i = 0; i < profile.languagesSpoken.length; ++i) {
          if (profile.languagesSpoken[i] !== languagesSpoken[i])
            return setIsDirtyForm(true);
        }
      }

      if (profile.students == null || profile.students?.length == 0) {
        if (assignedStudents?.length > 0) return setIsDirtyForm(true);
      } else if (profile.students?.length != assignedStudents?.length) {
        return setIsDirtyForm(true);
      } else {
        for (var i = 0; i < profile.students.length; ++i) {
          if (profile.students[i] !== assignedStudents[i])
            return setIsDirtyForm(true);
        }
      }

      setIsDirtyForm(false);
    } else {
      setIsDirtyForm(true);
    }
  }, [firstName, lastName, email, languagesSpoken, assignedStudents, isActive]);

  function handleSave() {
    dispatch(
      userActions.updateAmbassador({
        user: {
          role: "ambassador",
          firstName: firstName,
          lastName: lastName,
          languagesSpoken: languagesSpoken,
          email: email,
          students: assignedStudents,
          isActive: isActive,
          _id: profile._id,
        },
      })
    );
    setOpen(false);
  }

  const assignedStudentsOptions = formatStudents();

  function formatStudents() {
    var studentList = [];
    students.map((student) => {
      studentList.push({
        key: student._id,
        value: student._id,
        text: student.firstName + " " + student.lastName,
      });
    });

    return studentList;
  }

  const handleLanguagesSpoken = (e, { value }) => {
    console.log(value);
    setLanguagesSpoken(value);
  };

  const handleAssignedStudents = (e, { value }) => {
    console.log(value);
    setAssignedStudents(value);
  };

  function handleClick() {
    setIsActive(!isActive);
  }

  const closeModal = () => {
    setResetModalOpen(false);
  };

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Icon style={{ cursor: "pointer" }} name="ellipsis horizontal"></Icon>
        }
      >
        <Modal.Header>Update Ambassador Profile</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>First Name</label>
              <input
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Email</label>
              <input
                readOnly
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Languages Spoken</label>
              <Dropdown
                onChange={handleLanguagesSpoken.bind(this)}
                fluid
                multiple
                selection
                options={languagesSpokenOptions}
                defaultValue={languagesSpoken}
              />
            </Form.Field>
            <Form.Field>
              <label>Assigned Students</label>
              <Dropdown
                onChange={handleAssignedStudents.bind(this)}
                fluid
                multiple
                selection
                options={assignedStudentsOptions}
                defaultValue={assignedStudents}
              />
            </Form.Field>
            <div className="flex-ends">
              <Button toggle active={isActive} onClick={handleClick}>
                Is Active
              </Button>
              <Button basic color="red" onClick={() => setResetModalOpen(true)}>
                Reset Password
              </Button>
            </div>
          </Form>
        </Modal.Content>

        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button
            color="blue"
            onClick={handleSave}
            disabled={!firstName || !lastName || !email || !isDirtyForm}
          >
            Save
          </Button>
        </Modal.Actions>
      </Modal>
      <AdminResetPasswordModal
        isOpen={resetModalOpen}
        close={closeModal}
        user={{ firstName, lastName, email, isRegistered }}
      />
    </>
  );
}

export default UpdateAmbassadorModal;

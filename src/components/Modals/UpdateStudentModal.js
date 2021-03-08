import React, { useState, useEffect } from "react";
import { Button, Form, Modal, Dropdown, Loader } from "semantic-ui-react";

import { useDispatch, useSelector } from "react-redux";
import * as studentsActions from "../../store/students/actions";
import * as userSelectors from "../../store/user/selectors";

function UpdateStudentModal({ student, loading }) {
  const dispatch = useDispatch();

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

  const user = useSelector(userSelectors.getUser);
  useEffect(() => {
    setStudentInput({
      firstName: student.firstName,
      lastName: student.lastName,
      readingLevel: student.readingLevel,
      grade: student.grade,
      school: student.school,
      languagesSpoken: student.languagesSpoken,
    });
  }, [student]);

  const [studentInput, setStudentInput] = useState({
    firstName: "",
    lastName: "",
    readingLevel: "",
    grade: "",
    school: "",
    languagesSpoken: [],
  });

  const [open, setOpen] = useState(false);

  const handleSave = () => {
    dispatch(
      studentsActions.updateStudent({
        student: {
          ...studentInput,
          _id: student._id,
        },
        user: user._id,
      })
    );
    setOpen(false);
  };

  const setInput = (key, value) => {
    setStudentInput({ ...studentInput, [key]: value });
  };

  const handleLanguagesSpoken = (e, { value }) => {
    setStudentInput("languagesSpoken", value);
  };

  const {
    firstName,
    lastName,
    readingLevel,
    grade,
    school,
    languagesSpoken,
  } = studentInput;

  if (loading) return <Loader />;

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Edit Student</Button>}
    >
      <Modal.Header>Update Student Profile</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input
              value={firstName}
              onChange={(event) => setInput("firstName", event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              value={lastName}
              onChange={(event) => setInput("lastName", event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Reading Level</label>
            <input
              value={readingLevel}
              onChange={(event) => setInput("readingLevel", event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>Grade</label>
            <input
              value={grade}
              onChange={(event) => setInput("grade", event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <label>School</label>
            <input
              value={school}
              onChange={(event) => setInput("school", event.target.value)}
            />
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
        </Form>
      </Modal.Content>

      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default UpdateStudentModal;

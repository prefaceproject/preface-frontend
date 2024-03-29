import React, { useState, useEffect } from "react";
import { Button, Form, Modal, Dropdown, Loader } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as studentsActions from "../../store/students/actions";
import * as userSelectors from "../../store/user/selectors";
import * as studentsSelectors from "../../store/students/selectors";

function UpdateStudentModal({ studentTest, loading }) {
  const dispatch = useDispatch();

  const { id } = useParams();

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
  const students = useSelector(studentsSelectors.getAllStudents);

  var [student] = students.filter((s) => id === s._id);

  const [studentInput, setStudentInput] = useState({
    firstName: "",
    lastName: "",
    readingLevel: "",
    grade: "",
    school: "",
    languagesSpoken: [],
  });

  const [isDirtyForm, setIsDirtyForm] = useState(false);

  useEffect(() => {
    [student] = students.filter((s) => id === s._id);

    setStudentInput({
      firstName: student?.firstName,
      lastName: student?.lastName,
      readingLevel: student?.readingLevel,
      grade: student?.grade,
      school: student?.school,
      languagesSpoken: student?.languagesSpoken,
    });
  }, [students]);

  useEffect(() => {
    if (
      student?.firstName == studentInput.firstName &&
      student?.lastName == studentInput.lastName &&
      student?.readingLevel == studentInput.readingLevel &&
      student?.grade == studentInput.grade &&
      student?.school == studentInput.school
    ) {
      if (
        student?.languagesSpoken == null ||
        student?.languagesSpoken?.length == 0
      ) {
        if (languagesSpoken?.length > 0) return setIsDirtyForm(true);
      } else if (
        student?.languagesSpoken?.length != studentInput.languagesSpoken?.length
      ) {
        return setIsDirtyForm(true);
      } else {
        for (var i = 0; i < student?.languagesSpoken.length; ++i) {
          if (student?.languagesSpoken[i] !== studentInput.languagesSpoken[i])
            return setIsDirtyForm(true);
        }
      }

      setIsDirtyForm(false);
    } else {
      setIsDirtyForm(true);
    }
  }, [studentInput]);

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
    setStudentInput({ ...studentInput, languagesSpoken: value });
  };

  const { firstName, lastName, readingLevel, grade, school, languagesSpoken } =
    studentInput;

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
        <Button
          color="blue"
          onClick={handleSave}
          disabled={
            !firstName ||
            !lastName ||
            !readingLevel ||
            !grade ||
            !school ||
            !languagesSpoken.length ||
            !isDirtyForm
          }
        >
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default UpdateStudentModal;

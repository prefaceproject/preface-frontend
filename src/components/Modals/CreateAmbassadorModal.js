import React, { useState } from "react";
import { Button, Form, Modal, Dropdown } from "semantic-ui-react";

import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../../store/user/actions";
import { getAllStudents } from "../../store/students/selectors";

function CreateAmbassadorModal({}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [assignedStudents, setAssignedStudents] = useState([]);
  const [isActive, setIsActive] = useState(true);
  const dispatch = useDispatch();

  const students = useSelector(getAllStudents);

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

  function handleSave() {
    dispatch(
      userActions.initializeAmbassador({
        user: {
          role: "ambassador",
          email: email,
          students: assignedStudents,
          isActive: isActive,
        },
      })
    );
    setOpen(false);
    setEmail("");
    setAssignedStudents([]);
    setIsActive(true);
  }

  const handleAssignedStudents = (_e, { value }) => {
    setAssignedStudents(value);
  };

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button primary>Create New Ambassador</Button>}
    >
      <Modal.Header>Create New Ambassador Profile</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
            />
          </Form.Field>
          <Button toggle active={isActive} onClick={handleClick}>
            Is Active
          </Button>
        </Form>
      </Modal.Content>

      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button color="blue" onClick={handleSave} disabled={!email}>
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default CreateAmbassadorModal;

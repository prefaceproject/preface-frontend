import React, { useState } from "react";
import { Button, Form, Modal, TextArea } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

import CreateBookForm from "./CreateBookForm";

const CreateSessionModal = ({ isOpen, close, createSession }) => {
  const [expandBook, setExpandBook] = useState(false);
  const [date, setNewDate] = useState(null);
  const [note, setNote] = useState("");
  const [book, setBook] = useState("");

  const addNewBook = () => setExpandBook(!expandBook);

  const saveNewBook = (bookData) => {
    console.log("SAVING BOOK", bookData);
    setExpandBook(false);
  };
  const selectDate = (_event, { value }) => setNewDate(value);

  const handleSave = () => {
    close();
    createSession({ note, date, book });
  };

  const options = [
    { key: "Dr. Doolittle", text: "Dr. Doolittle", value: "676asd78uhinasoas" },
  ];

  return (
    <>
      <Modal onClose={close} open={isOpen}>
        <Modal.Header>New Session</Modal.Header>
        <Modal.Content>
          {/* { props.viewOnly ? ViewSessionDetails : CreateSessionForm } */}
          <Form>
            <Form.Field>
              <div>Date of Meeting</div>
              <SemanticDatepicker onChange={selectDate} value={date} />
            </Form.Field>
            {expandBook ? (
              <CreateBookForm
                saveNewBook={saveNewBook}
                cancel={() => setExpandBook(false)}
              />
            ) : (
              <>
                <Form.Select
                  fluid
                  label="Book Read"
                  options={options}
                  value={book}
                  onChange={(_event, { value }) => setBook(value)}
                />
                <Button onClick={addNewBook}>Add Book</Button>
              </>
            )}
            <Form.Field>
              <div>Reading Level</div>
              <input placeholder="read from database" readOnly />
            </Form.Field>
            <Form.Select
              fluid
              label="Difficulty Level (1 being the easiest and 5 being the hardest)"
              options={options}
            />

            <Form.Field>
              <div>Notes</div>
              <TextArea
                placeholder="Type additional notes here..."
                value={note}
                onChange={(event) => setNote(event.target.value)}
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        {/* {props.children} */}
        <Modal.Actions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default CreateSessionModal;

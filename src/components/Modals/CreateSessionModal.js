import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Grid,
  Modal,
  TextArea,
  Radio,
  Dropdown,
} from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

import CreateBookForm from "./CreateBookForm";
import "./CreateSessionModal.css";

const CreateSessionModal = ({
  isOpen,
  close,
  createSession,
  books,
  createBook,
  userId,
  studentId,
}) => {
  const [expandBook, setExpandBook] = useState(false);
  const [date, setNewDate] = useState(null);
  const [note, setNote] = useState("");
  const [comprehensionLevel, setComprehensionlevel] = useState(null);
  const [bookId, setBookId] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(
    () => {
      if (reload) setBookId(books[books.length - 1]._id);
    },
    [books[books.length - 1]?._id],
    reload
  );

  const addNewBook = () => setExpandBook(!expandBook);

  const saveNewBook = (bookData) => {
    createBook(bookData);
    setExpandBook(false);
    setReload(true);
  };

  const selectDate = (_event, { value }) => setNewDate(value);

  const handleSave = () => {
    close();
    createSession({
      note,
      date,
      bookId,
      userId,
      studentId,
      comprehensionLevel,
    });
  };

  const options = books.map((book) => ({
    key: book._id,
    value: book._id,
    text: book.title,
  }));

  const handleComprehensionLevelChange = (e, { value }) =>
    setComprehensionlevel(value);

  return (
    <>
      <Modal onClose={close} open={isOpen}>
        <Modal.Header>New Session</Modal.Header>
        <Modal.Content>
          <Form>
            <Grid className="create-session-grid">
              <Grid.Row>
                <Grid.Column width="11">
                  <Form.Field className="create-session-datepicker">
                    <label>Date of Meeting</label>
                    <SemanticDatepicker onChange={selectDate} value={date} />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              {expandBook ? (
                <Grid.Row>
                  <Grid.Column width="11">
                    <CreateBookForm
                      saveNewBook={saveNewBook}
                      cancel={() => setExpandBook(false)}
                    />
                  </Grid.Column>
                </Grid.Row>
              ) : (
                <>
                  <Grid.Row>
                    <>
                      <Grid.Column width="11">
                        <Form.Field>
                          <label>Book Read</label>
                          <Dropdown
                            label="Book Read"
                            placeholder="Book Read"
                            options={options}
                            value={bookId}
                            search
                            fluid
                            selection
                            onChange={(_event, { value }) => setBookId(value)}
                          />
                        </Form.Field>
                      </Grid.Column>
                      <Grid.Column width="3" verticalAlign="bottom">
                        <Button
                          fluid
                          onClick={addNewBook}
                          className="add-new-book-toggle"
                        >
                          Add Book
                        </Button>
                      </Grid.Column>
                    </>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width="11">
                      <Form.Field>
                        <label>Reading Level</label>
                        <input
                          value={
                            books.find((book) => book._id === bookId)
                              ?.readingLevel
                          }
                          readOnly
                        />
                      </Form.Field>
                    </Grid.Column>
                  </Grid.Row>
                </>
              )}
              <Grid.Row>
                <Grid.Column width="11">
                  <label className="comprehension-level-label">
                    Reading Comprehension Difficulty Level (1 being the easiest
                    and 5 being the hardest)
                  </label>
                </Grid.Column>
                <Grid.Column
                  width="11"
                  className="create-session-comprehension-level"
                >
                  <Radio
                    label="1"
                    name="comprehensionLevel"
                    value={1}
                    checked={comprehensionLevel === 1}
                    onChange={handleComprehensionLevelChange}
                  />
                  <Radio
                    label="2"
                    name="comprehensionLevel"
                    value={2}
                    checked={comprehensionLevel === 2}
                    onChange={handleComprehensionLevelChange}
                  />
                  <Radio
                    label="3"
                    name="comprehensionLevel"
                    value={3}
                    checked={comprehensionLevel === 3}
                    onChange={handleComprehensionLevelChange}
                  />
                  <Radio
                    label="4"
                    name="comprehensionLevel"
                    value={4}
                    checked={comprehensionLevel === 4}
                    onChange={handleComprehensionLevelChange}
                  />
                  <Radio
                    label="5"
                    name="comprehensionLevel"
                    value={5}
                    checked={comprehensionLevel === 5}
                    onChange={handleComprehensionLevelChange}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width="11">
                  <Form.Field>
                    <label>Notes</label>
                    <TextArea
                      placeholder="Type additional notes here..."
                      value={note}
                      onChange={(event) => setNote(event.target.value)}
                    />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Modal.Content>
        {/* {props.children} */}
        <Modal.Actions>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={handleSave} primary>
            Save
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default CreateSessionModal;

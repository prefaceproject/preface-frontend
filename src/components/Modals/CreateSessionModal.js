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
import CreateBookForm from "./CreateBookForm";
import ReadingDifficultyLevelInfo from "../sessions/ReadingDifficultyLevelInfo";

import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import "./CreateSessionModal.css";

const CreateSessionModal = ({
  isOpen,
  close,
  createSession,
  editSession,
  books,
  createBook,
  userId,
  session,
}) => {
  const [expandBook, setExpandBook] = useState(false);
  const [reload, setReload] = useState(false);
  const [inputData, setInputData] = useState({
    date: null,
    notes: "",
    comprehensionLevel: null,
    bookId: "",
  });

  useEffect(
    () => {
      if (reload)
        setInputData({ ...inputData, bookId: books[books.length - 1]._id });
    },
    [books[books.length - 1]?._id],
    reload
  );

  useEffect(() => {
    if (session) {
      setInputData({
        date: new Date(session.date),
        notes: session.notes || "",
        comprehensionLevel: session.comprehensionLevel,
        bookId: session.bookId,
      });
    } else {
      resetInputs();
    }
  }, [session]);

  const resetInputs = () => {
    setInputData({
      date: null,
      notes: "",
      comprehensionLevel: null,
      bookId: "",
    });
  };

  const addNewBook = () => setExpandBook(!expandBook);

  const saveNewBook = (bookData) => {
    createBook(bookData);
    setExpandBook(false);
    setReload(true);
  };

  const selectDate = (_event, { value }) => handleChange("date", value);

  const handleSave = () => {
    if (session) {
      editSession(session._id, inputData);
    } else {
      createSession({
        ...inputData,
        userId,
      });
    }

    close();
    resetInputs();
  };

  const options = books.map((book) => ({
    key: book._id,
    value: book._id,
    text: book.title,
  }));

  const handleComprehensionLevelChange = (e, { value }) =>
    handleChange("comprehensionLevel", value);

  const handleChange = (key, value) => {
    setInputData({
      ...inputData,
      [key]: value,
    });
  };

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
                    <SemanticDatepicker
                      onChange={selectDate}
                      value={inputData.date}
                    />
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
                            value={inputData.bookId}
                            search
                            fluid
                            selection
                            onChange={(_event, { value }) =>
                              handleChange("bookId", value)
                            }
                          />
                        </Form.Field>
                      </Grid.Column>
                      <Grid.Column width="4" verticalAlign="bottom">
                        <Button
                          primary
                          fluid
                          onClick={addNewBook}
                          className="add-new-book-toggle"
                        >
                          Add New Book
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
                            books.find((book) => book._id === inputData.bookId)
                              ?.readingLevel || ""
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
                    Reading Comprehension Difficulty Level
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
                    checked={inputData.comprehensionLevel === 1}
                    onChange={handleComprehensionLevelChange}
                  />
                  <Radio
                    label="2"
                    name="comprehensionLevel"
                    value={2}
                    checked={inputData.comprehensionLevel === 2}
                    onChange={handleComprehensionLevelChange}
                  />
                  <Radio
                    label="3"
                    name="comprehensionLevel"
                    value={3}
                    checked={inputData.comprehensionLevel === 3}
                    onChange={handleComprehensionLevelChange}
                  />
                  <Radio
                    label="4"
                    name="comprehensionLevel"
                    value={4}
                    checked={inputData.comprehensionLevel === 4}
                    onChange={handleComprehensionLevelChange}
                  />
                  <Radio
                    label="5"
                    name="comprehensionLevel"
                    value={5}
                    checked={inputData.comprehensionLevel === 5}
                    onChange={handleComprehensionLevelChange}
                  />
                  <ReadingDifficultyLevelInfo />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width="11">
                  <Form.Field>
                    <label>Notes</label>
                    <TextArea
                      placeholder="Type additional notes here..."
                      value={inputData.notes}
                      onChange={(event) =>
                        handleChange("notes", event.target.value)
                      }
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
          <Button
            disabled={
              !inputData.date ||
              !inputData.comprehensionLevel ||
              !inputData.bookId
            }
            onClick={handleSave}
            primary
          >
            Save
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default CreateSessionModal;

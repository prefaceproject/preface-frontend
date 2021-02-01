import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const CreateBookForm = ({ saveNewBook, cancel }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [readingLevel, setReadingLevel] = useState("");

  return (
    <>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Book Title"
          placeholder="Book Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Form.Input
          fluid
          label="Book Author"
          placeholder="Book Author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
      </Form.Group>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Book Language"
          placeholder="Book Language"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        />
        <Form.Input
          fluid
          label="Book Reading Level"
          placeholder="Book Reading Level"
          value={readingLevel}
          onChange={(event) => setReadingLevel(event.target.value)}
        />
      </Form.Group>
      <Button onClick={cancel}>Cancel</Button>
      <Button
        onClick={() => saveNewBook({ title, author, language, readingLevel })}
      >
        Save
      </Button>
    </>
  );
};

export default CreateBookForm;

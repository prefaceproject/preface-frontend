import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const CreateBookForm = ({ saveNewBook, cancel }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [readingLevel, setReadingLevel] = useState("");

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Book Name"
          placeholder="Book Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
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
        onClick={() => saveNewBook({ name, author, language, readingLevel })}
      >
        Save
      </Button>
    </Form>
  );
};

export default CreateBookForm;

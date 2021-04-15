import React, { useState } from "react";
import { Button, Form, Grid } from "semantic-ui-react";

const CreateBookForm = ({ saveNewBook, cancel }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [readingLevel, setReadingLevel] = useState("");

  return (
    <Grid className="create-book-grid">
      <Grid.Row>
        <Grid.Column width={8}>
          <Form.Input
            fluid
            label="Book Title"
            placeholder="Book Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input
            fluid
            label="Book Author"
            placeholder="Book Author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={8}>
          <Form.Input
            fluid
            label="Book Language"
            placeholder="Book Language"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          />
        </Grid.Column>
        <Grid.Column width={8}>
          <Form.Input
            fluid
            label="Book Reading Level"
            placeholder="Book Reading Level"
            value={readingLevel}
            onChange={(event) => setReadingLevel(event.target.value)}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={4}>
          <Button onClick={cancel} fluid>
            Cancel
          </Button>
        </Grid.Column>
        <Grid.Column width={4}>
          <Button
            primary
            disabled={!title || !author || !language || !readingLevel}
            fluid
            onClick={() =>
              saveNewBook({ title, author, language, readingLevel })
            }
          >
            Save Book
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default CreateBookForm;

import React from "react";
import { Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Breadcrumbs from "./Breadcrumbs";
import "./SessionsPageHeader.css";

const SessionsPageHeader = () => {
  return (
    <Container fluid>
      <header className="sessions-page-header">
        <Breadcrumbs
          items={[
            { content: <Link to="/dashboard">View All Students</Link> },
            { content: "Student Info" },
          ]}
        />
        <Button primary>Create New</Button>
      </header>
    </Container>
  );
};

export default SessionsPageHeader;

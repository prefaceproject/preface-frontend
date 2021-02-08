import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Breadcrumbs from "./Breadcrumbs";
import { Header } from "./Header";

const SessionsPageHeader = ({ openCreateSessionModal }) => {
  return (
    <Header>
      <Breadcrumbs
        items={[
          { content: <Link to="/dashboard">View All Students</Link> },
          { content: "Student Info" },
        ]}
      />
      <Button primary onClick={openCreateSessionModal}>
        Create New
      </Button>
    </Header>
  );
};

export default SessionsPageHeader;

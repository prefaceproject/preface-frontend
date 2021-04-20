import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Breadcrumbs from "./Breadcrumbs";
import { Header } from "./Header";

const SessionsPageHeader = ({
  firstName,
  lastName,
  openCreateSessionModal,
  role,
}) => {
  return (
    <Header>
      <Breadcrumbs
        items={[
          { content: <Link to="/dashboard">Dashboard</Link> },
          { content: `${firstName} ${lastName}` },
        ]}
      />
      {role === "teacher" ? null : (
        <Button primary onClick={openCreateSessionModal}>
          Create New
        </Button>
      )}
    </Header>
  );
};

export default SessionsPageHeader;

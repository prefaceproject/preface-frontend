import React from "react";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Breadcrumbs from "./Breadcrumbs";

const ProfilePageHeader = ({ firstName, lastName }) => {
  return (
    <Container fluid>
      <header className="sessions-page-header">
        <Breadcrumbs
          items={[
            { content: <Link to="/dashboard">Dashboard</Link> },
            { content: `${firstName} ${lastName}` },
          ]}
        />
      </header>
    </Container>
  );
};

export default ProfilePageHeader;

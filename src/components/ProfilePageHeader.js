import React from "react";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

import Breadcrumbs from "./Breadcrumbs";

const ProfilePageHeader = ({ openCreateSessionModal }) => {
  return (
    <Container fluid>
      <header className="sessions-page-header">
        <Breadcrumbs
          items={[
            { content: <Link to="/dashboard">View All Students</Link> },
            { content: "User Profile" },
          ]}
        />
      </header>
    </Container>
  );
};

export default ProfilePageHeader;

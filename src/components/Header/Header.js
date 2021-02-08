import React from "react";
import { Container } from "semantic-ui-react";

import "./Header.css";

const Header = ({ children }) => {
  return (
    <Container fluid>
      <header className="generic-page-header">{children}</header>
    </Container>
  );
};

export default Header;

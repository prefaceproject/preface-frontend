import React, { useEffect } from "react";
import { connect } from "react-redux";
import Logo from "../assets/small_white_logo.png";
import { Popup, Button } from "semantic-ui-react";

import "./Navbar.css";

const Navbar = ({ user }) => {
  const signOut = () => {};

  return (
    <header className="navbar">
      <img className="navbar-logo" src={Logo} alt="" />
      <div className="profile">
        <span className="username">
          {user ? `${user.firstName} ${user.lastName}` : null}
        </span>
        <Popup
          disabled
          basic
          on="click"
          content={
            <>
              <Button>Sign Out</Button>
              <span>Add users to your feed</span>
            </>
          }
          trigger={<div className="profile-icon" />}
        />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStateToProps)(Navbar);

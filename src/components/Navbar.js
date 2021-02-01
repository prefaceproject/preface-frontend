import React, { useEffect } from "react";
import { connect } from "react-redux";
import Logo from "../assets/small_white_logo.png";
import { Popup } from "semantic-ui-react";
import { Link } from 'react-router-dom';

import "./Navbar.css";

const Navbar = ({ user }) => {
  const signOut = () => {};
  const firstInitial = user ? user.firstName[0] : '';
  const lastInitial = user ? user.lastName[0] : '';
  return (
    <header className="navbar">
      <img className="navbar-logo" src={Logo} alt="" />
      <div className="profile">
        <span className="username">
          {user ? `${user.firstName} ${user.lastName}` : null}
        </span>
        <Popup
          basic
          on="click"
          content={
            <>
              <Link to="/profile">Edit Profile</Link>
            </>
          }
          trigger={<div className="profile-icon">{`${firstInitial}${lastInitial}`}</div>}
        />
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.data,
});

export default connect(mapStateToProps)(Navbar);

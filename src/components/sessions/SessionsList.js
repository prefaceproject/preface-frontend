import React from "react";
import { List } from "semantic-ui-react";
import SessionListItem from "./SessionListItem";

import "./SessionList.css";

const SessionList = ({ sessions }) => {
  return (
    <>
      <div className="session-headers">
        <div className="session-header-index">Session Number</div>
        <div className="session-header-info">
          <div className="session-header-book">Book Read</div>
          <div className="session-header-date">Date Recorded</div>
          <div className="session-header-level">Comprehension Level</div>
        </div>
        <div className="session-header-actions">Actions</div>
      </div>
      <List celled>
        {sessions.map((session, index) => (
          <SessionListItem session={session} key={session._id} />
        ))}
      </List>
    </>
  );
};

export default SessionList;

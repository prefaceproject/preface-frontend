import React from "react";
import { List } from "semantic-ui-react";
import SessionListItem from "./SessionListItem";

import "./SessionList.css";

const SessionList = ({ sessions }) => {
  return (
    <>
      <div className="session-headers">
        <div className="session-header-index">
          <h4>Session Number</h4>
        </div>
        <div className="session-header-info">
          <div className="session-header-book">
            <h4>Book Read</h4>
          </div>
          <div className="session-header-date">
            <h4>Date Recorded</h4>
          </div>
          <div className="session-header-level">
            <h4>Comprehension Level</h4>
          </div>
        </div>
        <div className="session-header-actions">
          <h4>Actions</h4>
        </div>
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

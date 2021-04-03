import React from "react";
import { List, Loader } from "semantic-ui-react";
import SessionListItem from "./SessionListItem";

import "./SessionList.css";

const SessionList = ({ sessions, onEditClick, onDeleteClick, editable }) => {
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
        {editable ? (
          <div className="session-header-actions">
            <h4>Actions</h4>
          </div>
        ) : null}
      </div>
      {!sessions?.length ? (
        <Loader />
      ) : (
        <List celled>
          {sessions.map((session, index) => (
            <SessionListItem
              session={session}
              key={session._id}
              onEditClick={onEditClick}
              onDeleteClick={onDeleteClick}
              editable={editable}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default SessionList;

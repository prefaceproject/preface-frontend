import React, { Fragment, useState } from "react";
import { List, Loader, Pagination } from "semantic-ui-react";
import SessionListItem from "./SessionListItem";

import "./SessionList.css";

const SessionList = ({
  sessions,
  onEditClick,
  onDeleteClick,
  editable,
  sessionsPerPage = 4,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const size = sessions ? sessions.length : 0;
  const totalPages = Math.ceil(size / sessionsPerPage);
  const currentSessions = sessions.slice(
    (currentPage - 1) * sessionsPerPage,
    currentPage * sessionsPerPage
  );

  const handlePaginationChange = (e, { activePage }) =>
    setCurrentPage(activePage);

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
            <h4>Session Date</h4>
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
        <div className="sessions-list-container">
          <List celled className="sessions-list">
            {currentSessions.map((session, index) => (
              <SessionListItem
                index={sessionsPerPage * (currentPage - 1) + index}
                session={session}
                key={session._id}
                onEditClick={onEditClick}
                onDeleteClick={onDeleteClick}
                editable={editable}
              />
            ))}
          </List>
          <Pagination
            defaultActivePage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePaginationChange}
          />
        </div>
      )}
    </>
  );
};

export default SessionList;

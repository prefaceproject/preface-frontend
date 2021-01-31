import React from "react";
import { List } from "semantic-ui-react";
import SessionListItem from "./SessionListItem";

const SessionList = ({ sessions }) => {
  return (
    <List celled>
      {sessions.map((session, index) => (
        <SessionListItem session={session} key={session._id} />
      ))}
    </List>
  );
};

export default SessionList;

import React from "react";
import { List } from "semantic-ui-react";
import SessionListItem from "./SessionListItem";

const sessionInfo = [
  {
    id: 1,
    index: 1,
    book: "The Cat in the Hat",
    student: "Antonio",
    user: "Michael",
    notes: "This is a note",
    dateOfSession: "1/24/2021",
  },
  {
    id: 2,
    index: 2,
    book: "The Cat in the Hat",
    student: "Antonio",
    user: "Michael",
    notes: "This is a note",
    dateOfSession: "1/24/2021",
  },
  {
    id: 3,
    index: 3,
    book: "The Cat in the Hat",
    student: "Antonio",
    user: "Michael",
    notes: "This is a note",
    dateOfSession: "1/24/2021",
  },
];

const SessionList = (sessionsList) => {
  return (
    <List celled>
      {sessionInfo.map((sessionItem, index) => (
        <SessionListItem session={sessionItem} key={index} />
      ))}
    </List>
  );
};

export default SessionList;

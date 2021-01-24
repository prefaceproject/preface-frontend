import React from "react";
import { Icon, List } from "semantic-ui-react";

const SessionListItem = ({ session }) => {
  return (
    <List.Item>
      <List.Content verticalAlign="middle" floated="left">
        {session.index}
      </List.Content>
      <List.Content verticalAlign="middle">
        <div className="middle aligned">
          {session.book}
          {session.dateOfSession}
        </div>
      </List.Content>
      <List.Content floated="right" verticalAlign="middle">
        <div>
          <Icon name="edit" />
          <Icon name="trash alternate outline" />
        </div>
      </List.Content>
    </List.Item>
  );
};

export default SessionListItem;

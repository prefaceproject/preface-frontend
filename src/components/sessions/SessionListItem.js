import React from "react";
import { Icon, List, ListContent } from "semantic-ui-react";
import { toMonthDayYearDate } from "../../utils/formatters";

import "./SessionListItem.css";

const SessionListItem = ({ session, onEditClick, onDeleteClick }) => {
  return (
    <List.Item>
      <ListContent>
        <div className="session">
          <div className="session-index">1</div>
          <div className="session-info">
            <div className="session-book">{session?.book?.title}</div>
            <div className="session-date">
              {toMonthDayYearDate(session.createdAt)}
            </div>
            <div className="session-level">{session.comprehensionLevel}</div>
          </div>
          <div className="session-actions">
            <Icon name="edit" onClick={() => onEditClick(session)} />
            <Icon
              name="trash alternate outline"
              onClick={() => onDeleteClick(session._id)}
            />
          </div>
        </div>
      </ListContent>
    </List.Item>
  );
};

export default SessionListItem;

import React from "react";
import { Icon, List, ListContent } from "semantic-ui-react";
import { toMonthDayYearDate } from "../../utils/formatters";

import "./SessionListItem.css";

const SessionListItem = ({ session }) => {
  return (
    <List.Item>
      <ListContent>
        <div className="session">
          <div className="session-index">1</div>
          <div className="session-info">
            <div className="session-book">{session.bookId}</div>
            <div className="session-date">
              {toMonthDayYearDate(session.createdAt)}
            </div>
            <div className="session-level">{session.comprehensionLevel}</div>
          </div>
          <div className="session-actions">
            <Icon name="edit" />
            <Icon name="trash alternate outline" />
          </div>
        </div>
      </ListContent>
    </List.Item>
  );
};

export default SessionListItem;

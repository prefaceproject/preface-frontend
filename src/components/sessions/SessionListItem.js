import React from "react";
import { Icon, List, ListContent } from "semantic-ui-react";
import { toMonthDayYearDate } from "../../utils/formatters";

import "./SessionListItem.css";

const SessionListItem = ({
  index,
  session,
  editable = false,
  onEditClick,
  onDeleteClick,
}) => {
  return (
    <List.Item>
      <ListContent>
        <div className="session">
          <div className="session-index">{index + 1}</div>
          <div className="session-info">
            <div className="session-book">{session?.book?.title}</div>
            <div className="session-date">
              {toMonthDayYearDate(session.date)}
            </div>
            <div className="session-level">{session.comprehensionLevel}</div>
          </div>
          {editable ? (
            <div className="session-actions">
              <>
                <Icon
                  className="icon"
                  name="edit"
                  onClick={() => onEditClick(session)}
                />
                <Icon
                  className="icon"
                  name="trash alternate outline"
                  onClick={() => onDeleteClick(session._id)}
                />
              </>
            </div>
          ) : null}
        </div>
      </ListContent>
    </List.Item>
  );
};

export default SessionListItem;

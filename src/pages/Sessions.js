import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";

import Layout from "../components/Layout";
import StudentCard from "../components/StudentCard";
import SessionList from "../components/sessions/SessionsList";
import * as sessionsSelectors from "../store/sessions/selectors";
import * as sessionsActions from "../store/sessions/actions";
import SessionsPageHeader from "../components/SessionsPageHeader";
import CreateSessionModal from "../components/Modals/CreateSessionModal";

const Sessions = () => {
  const dispatch = useDispatch();
  const sessions = useSelector(sessionsSelectors.getSessions);
  const [createModalStatus, setCreateModalStatus] = useState(false);

  useEffect(() => {
    dispatch(sessionsActions.requestSessions());
  }, []);

  const openCreateSessionModal = () => {
    setCreateModalStatus(true);
  };

  const closeCreateSessionModal = () => {
    setCreateModalStatus(false);
  };

  const createSession = (sessionData) => {
    dispatch(sessionsActions.createSession(sessionData));
  };

  return (
    <>
      <Layout>
        <Grid>
          <SessionsPageHeader openCreateSessionModal={openCreateSessionModal} />
          <Grid.Column width={2}>
            <div className="ui medium header"> Student Info</div>
            <StudentCard></StudentCard>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={13}>
            <div className="ui medium header"> All Sessions </div>
            <SessionList sessions={sessions}></SessionList>
          </Grid.Column>
        </Grid>
      </Layout>
      <CreateSessionModal
        isOpen={createModalStatus}
        close={closeCreateSessionModal}
        createSession={createSession}
      />
    </>
  );
};

export default Sessions;

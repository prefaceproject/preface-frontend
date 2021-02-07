import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

import Layout from "../components/Layout";
import StudentCard from "../components/StudentCard";
import SessionList from "../components/Sessions/SessionsList";
import * as sessionsSelectors from "../store/sessions/selectors";
import * as sessionsActions from "../store/sessions/actions";
import * as booksSelectors from "../store/books/selectors";
import * as booksActions from "../store/books/actions";
import * as userSelectors from "../store/user/selectors";
import SessionsPageHeader from "../components/SessionsPageHeader";
import CreateSessionModal from "../components/Modals/CreateSessionModal";

const Sessions = (props) => {
  const dispatch = useDispatch();
  const sessions = useSelector(sessionsSelectors.getSessions);
  const books = useSelector(booksSelectors.getBooks);
  const user = useSelector(userSelectors.getUser);
  const [createModalStatus, setCreateModalStatus] = useState(false);
  const { id } = useParams();

  if (!id) return <Redirect to="/dashboard" />;

  useEffect(() => {
    if (createModalStatus) dispatch(booksActions.requestBooks());
  }, [createModalStatus]);

  useEffect(() => {
    dispatch(sessionsActions.requestStudentSessions(id));
  }, [id]);

  const openCreateSessionModal = () => {
    setCreateModalStatus(true);
  };

  const closeCreateSessionModal = () => {
    setCreateModalStatus(false);
  };

  const createSession = (sessionData) => {
    dispatch(
      sessionsActions.createSession({
        ...sessionData,
        studentId: id,
        userId: user._id,
      })
    );
  };

  const createBook = (newBook) => {
    dispatch(booksActions.createBook(newBook));
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
        books={books}
        createBook={createBook}
        userId={user?._id}
      />
    </>
  );
};

export default Sessions;

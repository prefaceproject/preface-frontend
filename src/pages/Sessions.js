import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Redirect } from "react-router-dom";

import Layout from "../components/Layout";
import StudentCard from "../components/StudentCard";
import SessionList from "../components/sessions/SessionsList";
import * as sessionsSelectors from "../store/sessions/selectors";
import * as sessionsActions from "../store/sessions/actions";
import * as booksSelectors from "../store/books/selectors";
import * as booksActions from "../store/books/actions";
import * as userSelectors from "../store/user/selectors";
import * as studentActions from "../store/students/actions";
import * as studentSelectors from "../store/students/selectors";
import SessionsPageHeader from "../components/SessionsPageHeader";
import CreateSessionModal from "../components/Modals/CreateSessionModal";
import UpdateStudentModal from "../components/Modals/UpdateStudentModal";

const Sessions = (props) => {
  const dispatch = useDispatch();
  const [createModalStatus, setCreateModalStatus] = useState(false);
  const { id } = useParams();

  const sessions = useSelector(sessionsSelectors.getSessions);
  const books = useSelector(booksSelectors.getBooks);
  const user = useSelector(userSelectors.getUser);
  const student = useSelector(studentSelectors.getStudentById);
  const studentLoading = useSelector(studentSelectors.getStudentLoading);

  if (!id) return <Redirect to="/dashboard" />;

  useEffect(() => {
    if (createModalStatus) dispatch(booksActions.requestBooks());
  }, [createModalStatus]);

  useEffect(() => {
    dispatch(sessionsActions.requestStudentSessions(id));
  }, [id]);

  useEffect(() => {
    dispatch(studentActions.fetchStudentById(id));
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
          <Grid.Column width={4}>
            <div className="ui medium header"> Student Info</div>
            <StudentCard userId={user?._id} profile={student}></StudentCard>
            <UpdateStudentModal student={student} loading={studentLoading} />
          </Grid.Column>
          <Grid.Column width={12}>
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

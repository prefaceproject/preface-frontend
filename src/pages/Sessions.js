import React, { useEffect, useState, useMemo } from "react";
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
import ConfirmModal from "../components/Modals/ConfirmModal";

const Sessions = (props) => {
  const dispatch = useDispatch();
  const [createModalStatus, setCreateModalStatus] = useState(false);
  const [sessionEditing, setSessionEditing] = useState(null);
  const [sessionDeleting, setSessionDeleting] = useState(null);
  const [deleteModalStatus, setDeleteModalStatus] = useState(false);
  const { id } = useParams();

  const sessions = useSelector(sessionsSelectors.getSessions);
  const books = useSelector(booksSelectors.getBooks);
  const user = useSelector(userSelectors.getUser);
  const student = useSelector(studentSelectors.getStudentById);
  const studentLoading = useSelector(studentSelectors.getStudentLoading);

  const { role } = user;
  const isTeacher = role === "teacher";
  const isAmbassador = role === "ambassador";
  const isAdmin = role === "admin";

  if (!id) return <Redirect to="/dashboard" />;

  const sortedSessions = useMemo(() => {
    sessions.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (dateA < dateB) {
        return 1;
      }
      return -1;
    });
    return sessions;
  }, [sessions]);

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
    setSessionEditing(null);
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

  const editSession = (sessionId, inputData) => {
    dispatch(sessionsActions.editSession(sessionId, id, inputData));
  };

  const onEditClick = (session) => {
    setSessionEditing(session);
    openCreateSessionModal();
  };

  const onDeleteClick = (session) => {
    setSessionDeleting(session);
    setDeleteModalStatus(true);
    console.log(session);
  };

  const onCloseDeleteModal = () => {
    setSessionDeleting(null);
    setDeleteModalStatus(false);
  };

  const onConfirmDeleteModal = () => {
    if (sessionDeleting) {
      dispatch(sessionsActions.deleteSession(sessionDeleting._id, id));
    }
    setSessionDeleting(null);
    setDeleteModalStatus(false);
  };

  return (
    <>
      <Layout>
        <Grid>
          <SessionsPageHeader
            firstName={student.firstName}
            lastName={student.lastName}
            openCreateSessionModal={openCreateSessionModal}
            role={user.role}
          />
          <Grid.Column width={4}>
            <div className="ui medium header"> Student Info</div>
            <StudentCard userId={user?._id} profile={student}></StudentCard>
            {isAdmin ? (
              <UpdateStudentModal
                userId={user?._id}
                student={student}
                loading={studentLoading}
              />
            ) : null}
          </Grid.Column>
          <Grid.Column width={12}>
            <div className="ui medium header"> All Sessions </div>
            <SessionList
              editable={isAdmin || isAmbassador}
              sessions={sortedSessions}
              onEditClick={onEditClick}
              onDeleteClick={onDeleteClick}
            ></SessionList>
          </Grid.Column>
        </Grid>
      </Layout>
      <CreateSessionModal
        isOpen={createModalStatus}
        close={closeCreateSessionModal}
        createSession={createSession}
        editSession={editSession}
        books={books}
        createBook={createBook}
        userId={user?._id}
        session={sessionEditing}
      />
      <ConfirmModal
        isOpen={deleteModalStatus}
        onClose={onCloseDeleteModal}
        onConfirm={onConfirmDeleteModal}
        header={"Delete Session"}
        confirmButtonText={"Delete"}
        rejectButtonText={"Cancel"}
        text={`Are you sure you want to delete session?`}
      ></ConfirmModal>
    </>
  );
};

export default Sessions;

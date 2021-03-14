import { action } from "typesafe-actions";

import * as actionTypes from "./actionTypes";

export const createSession = (data) => action(actionTypes.CREATE_SESSION, data);
export const editSession = (id, studentId, data) =>
  action(actionTypes.EDIT_SESSION, { id, studentId, data });
export const deleteSession = (id, studentId) =>
  action(actionTypes.DELETE_SESSION, { id, studentId });
export const requestStudentSessions = (id) =>
  action(actionTypes.REQUEST_STUDENT_SESSIONS, { id });
export const receiveSessions = (data) =>
  action(actionTypes.RECEIVE_SESSIONS, data);

export const setError = (error) => action(actionTypes.SET_ERROR, error);

import Axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { backend_url } from "../../constants/url";

const createSession = function* ({ payload }) {
  try {
    yield call(Axios.post, backend_url + "/api/sessions", payload);
    yield put(actions.requestStudentSessions(payload.studentId));
  } catch (err) {
    yield put(actions.setError(err));
  }
};

const editSession = function* ({ payload }) {
  try {
    yield call(
      Axios.put,
      backend_url + `/api/sessions/${payload.id}`,
      payload.data
    );
    yield put(actions.requestStudentSessions(payload.studentId));
  } catch (err) {
    yield put(actions.setError(err));
  }
};

const deleteSession = function* ({ payload }) {
  try {
    yield call(Axios.delete, backend_url + `/api/sessions/${payload.id}`);
    yield put(actions.requestStudentSessions(payload.studentId));
  } catch (err) {
    yield put(actions.setError(err));
  }
};

const requestStudentSessions = function* ({ payload }) {
  const { id } = payload;
  try {
    const {
      data: { data },
    } = yield call(Axios.get, backend_url + `/api/students/${id}/sessions`);
    yield put(actions.receiveSessions(data));
  } catch (err) {
    yield put(actions.setError(err));
  }
};

export default function* SessionsSaga() {
  yield takeLatest(actionTypes.CREATE_SESSION, createSession);
  yield takeLatest(actionTypes.EDIT_SESSION, editSession);
  yield takeLatest(actionTypes.DELETE_SESSION, deleteSession);
  yield takeLatest(
    actionTypes.REQUEST_STUDENT_SESSIONS,
    requestStudentSessions
  );
}

import Axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { backend_url } from "../../constants/url";

const createSession = function* ({ payload }) {
  try {
    console.log("CREATING SESSION", payload);
    // yield call(Axios.post, backend_url + "/api/sessions");
    // yield put(actions.requestSessions());
  } catch (err) {
    yield put(actions.setError(err));
  }
};

const requestSessions = function* ({}) {
  try {
    const {
      data: { data },
    } = yield call(Axios.get, backend_url + "/api/sessions");
    yield put(actions.receiveSessions(data));
  } catch (err) {
    yield put(actions.setError(err));
  }
};

export default function* SessionsSaga() {
  yield takeLatest(actionTypes.CREATE_SESSION, createSession);
  yield takeLatest(actionTypes.REQUEST_SESSIONS, requestSessions);
}

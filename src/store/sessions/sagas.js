import Axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { backend_url } from "../../constants/url";

const createSession = function* ({ payload }) {
  try {
    const response = yield call(Axios.post, backend_url + "/api/sessions");
    console.log(response.data);
  } catch (err) {
    yield put(actions.setError(err));
  }
};

export default function* SessionsSaga() {
  yield takeLatest(actionTypes.CREATE_SESSION, createSession);
}

import Axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { backend_url } from "../../constants/url";

const createBook = function* ({ payload }) {
  try {
    yield call(Axios.post, backend_url + "/api/books", payload);
    yield put(actions.requestBooks());
  } catch (err) {
    yield put(actions.setError(err));
  }
};

const requestBooks = function* ({}) {
  try {
    const {
      data: { data },
    } = yield call(Axios.get, backend_url + "/api/books");
    yield put(actions.receiveBooks(data));
  } catch (err) {
    yield put(actions.setError(err));
  }
};

export default function* BooksSaga() {
  yield takeLatest(actionTypes.CREATE_BOOK, createBook);
  yield takeLatest(actionTypes.REQUEST_BOOKS, requestBooks);
}

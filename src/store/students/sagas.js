import Axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import {
  backend_url,
  defaultLimit,
  defaultSortBy,
  defaultSortOrder,
  defaultPage,
} from "../../constants";

const fetchAllStudents = function* ({ payload }) {
  const {
    userId,
    options: {
      sortBy = defaultSortBy,
      sortOrder = defaultSortOrder,
      page = defaultPage,
      limit = defaultLimit,
      searchTerm = "",
    },
  } = payload;

  const params = {
    _id: userId,
    sortBy,
    sortOrder,
    offset: (page - 1) * limit,
    limit,
    searchTerm,
  };
  try {
    const response = yield call(Axios.get, backend_url + "/api/students", {
      params,
    });

    if (response.status == 200) {
      yield put(actions.setAllStudents(response.data, response.headers.total));
    }
  } catch (err) {
    console.log(err);
  }
};

const createStudent = function* ({ payload }) {
  try {
    const headerParams = {
      mode: "cors",
      credentials: "same-origin",
    };
    const response = yield call(
      Axios.post,
      backend_url + "/api/students",
      payload.student,
      headerParams
    );
    if (response.status == 200) {
      yield put(actions.invalidateCache());
    }
  } catch (err) {
    console.log(err);
  }
};

const updateStudent = function* ({ payload }) {
  try {
    var student = payload.student;

    const headerParams = {
      mode: "cors",
      credentials: "same-origin",
    };
    const response = yield call(
      Axios.put,
      backend_url + "/api/students/" + student._id,
      student,
      headerParams
    );
    if (response.status == 200) {
      yield put(actions.invalidateCache());
    }
  } catch (err) {
    console.log(err);
  }
};

const fetchStudentById = function* ({ payload }) {
  try {
    const response = yield call(
      Axios.get,
      backend_url + "/api/students/" + payload
    );

    if (response.status == 200) {
      yield put(actions.setStudentById(response.data.data));
    }
  } catch (err) {
    console.log(err);
  }
};

export default function* StudentsSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_ALL_STUDENTS, fetchAllStudents),
    takeLatest(actionTypes.CREATE_STUDENT, createStudent),
    takeLatest(actionTypes.UPDATE_STUDENT, updateStudent),
    takeLatest(actionTypes.FETCH_STUDENT_BY_ID, fetchStudentById),
  ]);
}

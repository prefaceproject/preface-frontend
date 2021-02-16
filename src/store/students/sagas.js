import Axios from "axios";
import { all, call, put, takeLatest, select, take, takeEvery } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { backend_url } from "../../constants/url";


const fetchAllStudents = function* ({ payload }) {
  try {
    const headerParams = {
      mode: 'cors',
      credentials: 'same-origin'
    };
    const response = yield call(
      Axios.get,
      backend_url + "/api/students",
      { params: payload },
      headerParams
    );

    if (response.status == 200) {
      yield put(actions.setAllStudents(response.data))
    }
  } catch (err) {
    console.log(err)
  }
};

const createStudent = function* ({payload}) {
  console.log(payload)
  try {
    const headerParams = {
      mode: 'cors',
      credentials: 'same-origin'
    };
    const response = yield call(
      Axios.post,
      backend_url + "/api/students",
      payload,
      headerParams
    );
    if (response.status == 200) {
      yield put(actions.fetchAllStudents());
    }
  } catch (err) {
    console.log(err)
  }
}

const updateStudent = function* ({payload}) {
  console.log("in updateStudent", payload._id)
  try {
    const headerParams = {
      mode: 'cors',
      credentials: 'same-origin'
    };
    const response = yield call(
      Axios.put,
      backend_url + "/api/students/" + payload._id,
      payload,
      headerParams
    );
    if (response.status == 200) {
      yield put(actions.fetchAllStudents());
    }
  } catch (err) {
    console.log(err)
  }
}

export default function* StudentsSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_ALL_STUDENTS, fetchAllStudents),
    takeLatest(actionTypes.CREATE_STUDENT, createStudent),
    takeLatest(actionTypes.UPDATE_STUDENT, updateStudent),
  ]);
}

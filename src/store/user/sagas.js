import Axios from "axios";
import { all, call, put, takeLatest, select, take, takeEvery } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { backend_url } from "../../constants/url";

import Cookies from 'js-cookie';

const loginUser = function* ({ payload }) {
  try {
    const headerParams = {
      mode: 'cors',
      credentials: 'same-origin'
    };
    const response = yield call(
      Axios.post,
      backend_url + "/api/auth/login",
      payload,
      headerParams
    );
    if (response.data.success) {
      yield put(actions.setUser(response.data.user))
      Cookies.set('token', response.data.user.token, { expires: 1 });
    }
  } catch (err) {
    console.log(err)
  }
};

const fetchAllAmbassadors = function* ({ payload }) {
  try {
    const headerParams = {
      mode: 'cors',
      credentials: 'same-origin'
    };
    const response = yield call(
      Axios.post,
      backend_url + "/api/users/getAllFromRole",
      payload,
      headerParams
    );
    if (response.data.success) {
      console.log("here", response.data.list)
      yield put(actions.setAllAmbassadors(response.data.list))
    }
  } catch (err) {
    console.log(err)
  }
};

const fetchAllTeachers = function* ({ payload }) {
  try {
    const headerParams = {
      mode: 'cors',
      credentials: 'same-origin'
    };
    const response = yield call(
      Axios.post,
      backend_url + "/api/users/getAllFromRole",
      payload,
      headerParams
    );
    if (response.data.success) {
      yield put(actions.setAllTeachers(response.data.list))
    }
  } catch (err) {
    console.log(err)
  }
};

const fetchAllStudents = function* ({}) {
  try {
    const headerParams = {
      mode: 'cors',
      credentials: 'same-origin'
    };
    const response = yield call(
      Axios.get,
      backend_url + "/api/students",
      headerParams
    );

    if (response.status == 200) {
      yield put(actions.setAllStudents(response.data))
    }
  } catch (err) {
    console.log(err)
  }
};

export default function* UserSaga() {
  yield all([
    takeLatest(actionTypes.LOGIN_USER, loginUser),
    takeLatest(actionTypes.FETCH_ALL_AMBASSADORS, fetchAllAmbassadors),
    takeLatest(actionTypes.FETCH_ALL_TEACHERS, fetchAllTeachers),
    takeLatest(actionTypes.FETCH_ALL_STUDENTS, fetchAllStudents)
  ]);
}

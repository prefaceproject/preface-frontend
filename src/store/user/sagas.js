import Axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { backend_url } from "../../constants/url";

import Cookies from "js-cookie";

const loginUser = function* ({ payload }) {
  try {
    const headerParams = {
      mode: "cors",
      credentials: "same-origin",
    };
    const response = yield call(
      Axios.post,
      backend_url + "/api/auth/login",
      payload,
      headerParams
    );
    if (response.data.success) {
      yield put(actions.setUser(response.data.user));
      Cookies.set("token", response.data.user.token, { expires: 1 });
    }
  } catch (err) {
    yield put(actions.setLoginError(err));
  }
};

const autoLogin = function* ({ payload }) {
  try {
    const token = !(Cookies.get("token") === null);
    const userToken = token ? Cookies.get("token") : "";

    const { data } = yield call(Axios.get, backend_url + "/api/auth/current", {
      headers: {
        Authorization: "Token " + userToken,
      },
    });

    if (data.success) {
      yield put(actions.setUser(data.user));
    }
  } catch (err) {
    yield put(actions.setAutoLoginError(err));
  }
};

const fetchAllAmbassadors = function* () {
  try {
    const headerParams = {
      mode: "cors",
      credentials: "same-origin",
    };
    const response = yield call(
      Axios.post,
      backend_url + "/api/users/getAllFromRole",
      { role: "ambassador" },
      headerParams
    );
    if (response.data.success) {
      yield put(actions.setAllAmbassadors(response.data.list));
    }
  } catch (err) {
    console.log(err);
  }
};

const fetchAllTeachers = function* () {
  try {
    const headerParams = {
      mode: "cors",
      credentials: "same-origin",
    };
    const response = yield call(
      Axios.post,
      backend_url + "/api/users/getAllFromRole",
      { role: "teacher" },
      headerParams
    );
    if (response.data.success) {
      yield put(actions.setAllTeachers(response.data.list));
    }
  } catch (err) {
    console.log(err);
  }
};

const initializeAmbassador = function* ({ payload }) {
  try {
    const headerParams = {
      mode: "cors",
      credentials: "same-origin",
    };
    const response = yield call(
      Axios.post,
      backend_url + "/api/users/initialize",
      payload,
      headerParams
    );
    if (response.data.success) {
      yield put(actions.fetchAllAmbassadors());
    }
  } catch (err) {
    console.log(err);
  }
};

const updateAmbassador = function* ({ payload }) {
  try {
    const headerParams = {
      mode: "cors",
      credentials: "same-origin",
    };
    const response = yield call(
      Axios.post,
      backend_url + "/api/users/update",
      payload,
      headerParams
    );
    if (response.data.success) {
      yield put(actions.fetchAllAmbassadors());
    }
  } catch (err) {
    console.log(err);
  }
};

const initializeTeacher = function* ({ payload }) {
  try {
    const headerParams = {
      mode: "cors",
      credentials: "same-origin",
    };
    const response = yield call(
      Axios.post,
      backend_url + "/api/users/initialize",
      payload,
      headerParams
    );
    if (response.data.success) {
      yield put(actions.fetchAllTeachers());
    }
  } catch (err) {
    console.log(err);
  }
};

const updateTeacher = function* ({ payload }) {
  try {
    const headerParams = {
      mode: "cors",
      credentials: "same-origin",
    };
    const response = yield call(
      Axios.post,
      backend_url + "/api/users/update",
      payload,
      headerParams
    );

    if (response.data.success) {
      yield put(actions.fetchAllTeachers());
    }
  } catch (err) {
    console.log(err);
  }
};

const changePassword = function* ({ payload }) {
  try {
    const headerParams = {
      mode: "cors",
      credentials: "same-origin",
    };

    const response = yield call(
      Axios.post,
      backend_url + "/api/auth/updatepassword",
      payload,
      headerParams
    );
    yield put(actions.setPasswordError(response.data));
  } catch {
    yield put(
      actions.setPasswordError({
        success: false,
        message: "Error changing password. Please try again.",
      })
    );
  }
};

const resetPassword = function* ({ payload }) {
  try {
    const headerParams = {
      mode: "cors",
      credentials: "same-origin",
    };

    const response = yield call(
      Axios.post,
      backend_url + "/api/auth/resetuserpassword",
      payload,
      headerParams
    );
    yield put(actions.setResetPasswordError(response.data));
  } catch {
    yield put(
      actions.setResetPasswordError({
        success: false,
        message: "Error resetting password. Please try again.",
      })
    );
  }
};

const fetchUser = function* ({}) {
  try {
    const token = !(Cookies.get("token") === null);
    const userToken = token ? Cookies.get("token") : "";

    const { data } = yield call(Axios.get, backend_url + "/api/auth/current", {
      headers: {
        Authorization: "Token " + userToken,
      },
    });

    if (data.success) {
      yield put(actions.setUser(data.user));
    }
  } catch (err) {
    yield put(actions.setError(err));
  }
};

const updateAmbassadorProfile = function* ({ payload }) {
  try {
    const headerParams = {
      mode: "cors",
      credentials: "same-origin",
    };
    const response = yield call(
      Axios.post,
      backend_url + "/api/users/update",
      payload,
      headerParams
    );
    if (response.data.success) {
      yield put(actions.fetchAllAmbassadors());
      yield put(actions.fetchUser());
    }
  } catch (err) {
    console.log(err);
  }
};

const updateTeacherProfile = function* ({ payload }) {
  try {
    const headerParams = {
      mode: "cors",
      credentials: "same-origin",
    };
    const response = yield call(
      Axios.post,
      backend_url + "/api/users/update",
      payload,
      headerParams
    );

    if (response.data.success) {
      yield put(actions.fetchAllTeachers());
      yield put(actions.fetchUser());
    }
  } catch (err) {
    console.log(err);
  }
};

export default function* UserSaga() {
  yield all([
    takeLatest(actionTypes.LOGIN_USER, loginUser),
    takeLatest(actionTypes.AUTO_LOGIN, autoLogin),
    takeLatest(actionTypes.FETCH_ALL_AMBASSADORS, fetchAllAmbassadors),
    takeLatest(actionTypes.FETCH_ALL_TEACHERS, fetchAllTeachers),
    takeLatest(actionTypes.INITIALIZE_AMBASSADOR, initializeAmbassador),
    takeLatest(actionTypes.INITIALIZE_TEACHER, initializeTeacher),
    takeLatest(actionTypes.UPDATE_AMBASSADOR, updateAmbassador),
    takeLatest(actionTypes.UPDATE_TEACHER, updateTeacher),
    takeLatest(actionTypes.CHANGE_PASSWORD, changePassword),
    takeLatest(actionTypes.RESET_PASSWORD, resetPassword),
    takeLatest(actionTypes.FETCH_USER, fetchUser),
    takeLatest(actionTypes.UPDATE_AMBASSADOR_PROFILE, updateAmbassadorProfile),
    takeLatest(actionTypes.UPDATE_TEACHER_PROFILE, updateTeacherProfile),
  ]);
}

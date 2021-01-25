import Axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
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

export default function* UserSaga() {
  yield takeLatest(actionTypes.LOGIN_USER, loginUser);
}

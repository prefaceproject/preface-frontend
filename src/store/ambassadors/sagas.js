import Axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { backend_url } from "../../constants/url";

const createAmbassador = function* ({ payload }) {
  console.log("SAGA", payload)
  //yield call(Axios.post, backend_url + "/api/ambassadors", payload);
};

export default function* AmbassadorsSaga() {
  yield takeLatest(actionTypes.CREATE_AMBASSADOR, createAmbassador);
}

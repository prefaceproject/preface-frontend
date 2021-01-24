import Axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { backend_url } from '../../constants/url'


// sagas are used to trigger side effects (e.g. requests)
// uses generator functions as a way to deal with asynchronous code without using async-await
const requestExampleData = function* (_action, _payload) {
  try {
    const response = yield call(Axios.get, backend_url + "/example_saga_request");

    // put allows a saga to trigger another action
    yield put(actions.exampleReceiveData(response.data.message));
  } catch (err) {
    yield put(actions.exampleSetError(err));
  }
};

export default function* ExampleSaga() {
  yield takeLatest(actionTypes.EXAMPLE_REQUEST_DATA, requestExampleData);
}

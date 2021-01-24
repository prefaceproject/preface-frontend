import { all, fork } from "redux-saga/effects";
import { combineReducers } from "redux";

import ExampleReducer from "./example/reducer";
import ExampleSaga from "./example/sagas";
import SessionsReducer from "./sessions/reducer";
import SessionsSaga from "./sessions/sagas";

export const createRootReducer = () => {
  return combineReducers({
    example: ExampleReducer,
    sessions: SessionsReducer,
  });
};

export function* rootSaga() {
  yield all([fork(ExampleSaga)]);
  yield all([fork(SessionsSaga)]);
}

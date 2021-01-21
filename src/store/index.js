import { all, fork } from "redux-saga/effects";
import { combineReducers } from "redux";

import ExampleReducer from "./example/reducer";
import ExampleSaga from "./example/sagas";

export const createRootReducer = () => {
  return combineReducers({
    example: ExampleReducer,
  });
};

export function* rootSaga() {
  yield all([fork(ExampleSaga)]);
}

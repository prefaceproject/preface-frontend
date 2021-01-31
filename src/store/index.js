import { all, fork } from "redux-saga/effects";
import { combineReducers } from "redux";

import ExampleReducer from "./example/reducer";
import ExampleSaga from "./example/sagas";
import SessionsReducer from "./sessions/reducer";
import SessionsSaga from "./sessions/sagas";
import UserReducer from "./user/reducer";
import UserSaga from "./user/sagas";
import BookReducer from "./books/reducer";
import BookSaga from "./books/sagas";
 

export const createRootReducer = () => {
  return combineReducers({
    example: ExampleReducer,
    sessions: SessionsReducer,
    user: UserReducer,
    books: BookReducer
  });
};

export function* rootSaga() {
  yield all([fork(ExampleSaga)]);
  yield all([fork(SessionsSaga)]);
  yield all([fork(UserSaga)]);
  yield all([fork(BookSaga)])
}

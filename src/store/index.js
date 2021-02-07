import { all, fork } from "redux-saga/effects";
import { combineReducers } from "redux";

import ExampleReducer from "./example/reducer";
import ExampleSaga from "./example/sagas";
import SessionsReducer from "./sessions/reducer";
import SessionsSaga from "./sessions/sagas";
import UserReducer from "./user/reducer";
import UserSaga from "./user/sagas";
import BooksReducer from "./books/reducer";
import BooksSaga from "./books/sagas";
import StudentsReducer from "./students/reducer";
import StudentsSaga from "./students/sagas"

export const createRootReducer = () => {
  return combineReducers({
    example: ExampleReducer,
    sessions: SessionsReducer,
    user: UserReducer,
    students: StudentsReducer,
    books: BooksReducer,
  });
};

export function* rootSaga() {
  yield all([fork(ExampleSaga)]);
  yield all([fork(SessionsSaga)]);
  yield all([fork(UserSaga)]);
  yield all([fork(StudentsSaga)]);
  yield all([fork(BooksSaga)]);
}

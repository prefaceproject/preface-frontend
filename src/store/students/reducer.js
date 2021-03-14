/** @format */

import * as actionTypes from "./actionTypes";

export const initialState = {
  studentList: [],
  studentById: "",
  studentLoading: true,
};

const reducerActions = {
  [actionTypes.SET_ALL_STUDENTS](state, action) {
    return {
      ...state,
      studentList: action.payload,
    };
  },
  [actionTypes.SET_STUDENT_BY_ID](state, action) {
    return {
      ...state,
      studentById: action.payload,
      studentLoading: false,
    };
  },
};

export default function StudentsReducer(state = initialState, action) {
  return action?.type in reducerActions
    ? reducerActions[action.type](state, action)
    : state;
}

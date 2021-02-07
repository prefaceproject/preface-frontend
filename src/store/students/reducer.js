/** @format */

import * as actionTypes from "./actionTypes";

export const initialState = {
  studentList: []
};

const reducerActions = {
  [actionTypes.SET_ALL_STUDENTS](state, action) {
    return {
      ...state,
      studentList: action.payload,
    }
  },
};

export default function StudentsReducer(state = initialState, action) {
  return action?.type in reducerActions
    ? reducerActions[action.type](state, action)
    : state;
}

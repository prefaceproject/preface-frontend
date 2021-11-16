/** @format */

import * as actionTypes from "./actionTypes";

export const initialState = {
  studentList: [],
  studentById: "",
  studentLoading: true,
  total: 0,
  validCache: true,
  allStudents: [],
};

const reducerActions = {
  [actionTypes.SET_PAGINATED_STUDENTS](state, action) {
    return {
      ...state,
      studentList: action.payload.role,
      total: action.payload.total,
      validCache: true,
    };
  },
  [actionTypes.SET_STUDENT_BY_ID](state, action) {
    return {
      ...state,
      studentById: action.payload,
      studentLoading: false,
    };
  },
  [actionTypes.INVALIDATE_CACHE](state) {
    return {
      ...state,
      validCache: false,
    };
  },
  [actionTypes.SET_ALL_STUDENTS](state, action) {
    return {
      ...state,
      allStudents: action.payload.students,
    };
  },
};

export default function StudentsReducer(state = initialState, action) {
  return action?.type in reducerActions
    ? reducerActions[action.type](state, action)
    : state;
}

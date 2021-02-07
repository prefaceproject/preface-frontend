/** @format */

import * as actionTypes from "./actionTypes";

export const initialState = {
  data: null,
  error: null,
  ambassadorList: [],
  teacherList: [],
};

const reducerActions = {
  [actionTypes.SET_USER](state, action) {
    return {
      ...state,
      data: action.payload,
    };
  },
  [actionTypes.SET_ALL_AMBASSADORS](state, action) {
    return {
      ...state,
      ambassadorList: action.payload,
    }
  },
  [actionTypes.SET_ALL_TEACHERS](state, action) {
    return {
      ...state,
      teacherList: action.payload,
    }
  },
};


export default function UserReducer(state = initialState, action) {
  return action?.type in reducerActions
    ? reducerActions[action.type](state, action)
    : state;
}

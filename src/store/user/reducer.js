/** @format */

import * as actionTypes from "./actionTypes";

export const initialState = {
  data: null,
  error: null,
  loading: true,
};

const reducerActions = {
  [actionTypes.SET_USER](state, action) {
    return {
      ...state.user,
      error: action.payload,
      loading: false,
    };
  },
  [actionTypes.GET_USER](state, action) {
    return {
      ...state.user,
      data: action.payload,
      loading: false,
    };
  },
};

export default function UserReducer(state = initialState, action) {
  return action?.type in reducerActions
    ? reducerActions[action.type](state, action)
    : state;
}

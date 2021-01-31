/** @format */

import * as actionTypes from "./actionTypes";

export const initialState = {
  data: [],
  error: null,
};

const reducerActions = {
  [actionTypes.SET_ERROR](state, action) {
    return {
      ...state.sessions,
      error: action.payload,
    };
  },
  [actionTypes.RECEIVE_SESSIONS](state, action) {
    return {
      ...state.sessions,
      data: action.payload,
    };
  },
};

export default function SessionsReducer(state = initialState, action) {
  return action?.type in reducerActions
    ? reducerActions[action.type](state, action)
    : state;
}

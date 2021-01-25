/** @format */

import * as actionTypes from "./actionTypes";

export const initialState = {
  data: null,
  error: null,
};

const reducerActions = {
  [actionTypes.SET_USER](state, action) {
    return {
      ...state.user,
      data: action.payload,
    };
  },
};

export default function UserReducer(state = initialState, action) {
  return action?.type in reducerActions
    ? reducerActions[action.type](state, action)
    : state;
}

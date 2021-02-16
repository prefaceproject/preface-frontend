/** @format */

import * as actionTypes from "./actionTypes";

export const initialState = {
  data: [],
  error: null,
};

const reducerActions = {
  [actionTypes.CREATE_AMBASSADOR](state, action) {
    return {
      ...state.books,
      error: action.payload,
    };
  },
};

export default function AmbassadorsReducer(state = initialState, action) {
  return action?.type in reducerActions
    ? reducerActions[action.type](state, action)
    : state;
}

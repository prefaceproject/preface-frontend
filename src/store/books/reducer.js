/** @format */

import * as actionTypes from "./actionTypes";

export const initialState = {
  data: [],
  error: null,
};

const reducerActions = {
  [actionTypes.SET_ERROR](state, action) {
    return {
      ...state.books,
      error: action.payload,
    };
  },
  [actionTypes.RECEIVE_BOOKS](state, action) {
    return {
      ...state.books,
      data: action.payload,
    };
  },
};

export default function BooksReducer(state = initialState, action) {
  return action?.type in reducerActions
    ? reducerActions[action.type](state, action)
    : state;
}

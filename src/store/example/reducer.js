/** @format */

import * as actionTypes from "./actionTypes";

export const initialState = {
  data: null,
  error: null,
  loading: true,
};

const reducerActions = {
  [actionTypes.EXAMPLE_RECEIVE_DATA](state, action) {
    return {
      ...state.example,
      data: action.payload,
      loading: false,
    };
  },
  [actionTypes.EXAMPLE_SET_ERROR](state, action) {
    return {
      ...state.example,
      error: action.payload,
      loading: false,
    };
  },
};

export default function ExampleReducer(state = initialState, action) {
  return action?.type in reducerActions
    ? reducerActions[action.type](state, action)
    : state;
}

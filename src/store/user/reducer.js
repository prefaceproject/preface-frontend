/** @format */

import * as actionTypes from "./actionTypes";

export const initialState = {
  data: null,
  error: null,
  passwordError: null,
  resetPasswordError: null,
  loginError: null,
  autoLoginError: null,
  ambassadorList: [],
  teacherList: [],
  updateProfileError: null
};

const reducerActions = {
  [actionTypes.LOG_OUT]() {
    return initialState;
  },
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
    };
  },
  [actionTypes.SET_ALL_TEACHERS](state, action) {
    return {
      ...state,
      teacherList: action.payload,
    };
  },
  [actionTypes.SET_ERROR](state, action) {
    return {
      ...state,
      error: action.payload,
    };
  },
  [actionTypes.SET_PASSWORD_ERROR](state, action) {
    return {
      ...state,
      passwordError: action.payload,
    };
  },
  [actionTypes.SET_RESET_PASSWORD_ERROR](state, action) {
    return {
      ...state,
      resetPasswordError: action.payload,
    };
  },
  [actionTypes.SET_LOGIN_ERROR](state, action) {
    return {
      ...state,
      loginError: action.payload,
    };
  },
  [actionTypes.SET_AUTO_LOGIN_ERROR](state, action) {
    return {
      ...state,
      autoLoginError: action.payload,
    };
  },
  [actionTypes.SET_UPDATE_PROFILE_ERROR](state, action) {
    return {
      ...state,
      updateProfileError: action.payload,
    };
  },
};

export default function UserReducer(state = initialState, action) {
  return action?.type in reducerActions
    ? reducerActions[action.type](state, action)
    : state;
}

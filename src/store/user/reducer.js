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
  updateProfileError: null,
  totalAmbassadors: 0,
  totalTeachers: 0,
  validAmbassadorCache: true,
  validTeacherCache: true,
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
      ambassadorList: action.payload.results,
      totalAmbassadors: action.payload.total,
      validAmbassadorCache: true,
    };
  },
  [actionTypes.SET_ALL_TEACHERS](state, action) {
    return {
      ...state,
      teacherList: action.payload.results,
      totalTeachers: action.payload.total,
      validTeacherCache: true,
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

  [actionTypes.INVALIDATE_AMBASSADOR_CACHE](state) {
    return {
      ...state,
      validAmbassadorCache: false,
    };
  },

  [actionTypes.INVALIDATE_TEACHER_CACHE](state) {
    return {
      ...state,
      validTeacherCache: false,
    };
  },
};

export default function UserReducer(state = initialState, action) {
  return action?.type in reducerActions
    ? reducerActions[action.type](state, action)
    : state;
}

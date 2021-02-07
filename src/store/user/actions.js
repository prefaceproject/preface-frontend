import { action } from "typesafe-actions";

import * as actionTypes from "./actionTypes";

export const setUser = (data) =>
  action(actionTypes.SET_USER, data);

export const loginUser = (data) => 
  action(actionTypes.LOGIN_USER, data);

export const setAllAmbassadors = (role) =>
  action(actionTypes.SET_ALL_AMBASSADORS, role);

export const fetchAllAmbassadors = (role) => 
  action(actionTypes.FETCH_ALL_AMBASSADORS, role);

export const setAllTeachers = (role) =>
  action(actionTypes.SET_ALL_TEACHERS, role);

export const fetchAllTeachers = (role) => 
  action(actionTypes.FETCH_ALL_TEACHERS, role);

export const initializeAmbassador = (data) => 
  action(actionTypes.INITIALIZE_AMBASSADOR, data);

export const updateAmbassador = (data) =>
  action(actionTypes.UPDATE_AMBASSADOR, data);

export const initializeTeacher = (data) => 
  action(actionTypes.INITIALIZE_TEACHER, data);

export const updateTeacher = (data) =>
  action(actionTypes.UPDATE_TEACHER, data);
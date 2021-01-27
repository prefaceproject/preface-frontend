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

export const setAllStudents = (role) =>
  action(actionTypes.SET_ALL_STUDENTS, role);

export const fetchAllStudents = (role) => 
  action(actionTypes.FETCH_ALL_STUDENTS, role);
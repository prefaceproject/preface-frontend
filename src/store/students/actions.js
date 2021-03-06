import { action } from "typesafe-actions";

import * as actionTypes from "./actionTypes";

export const setAllStudents = (role) =>
  action(actionTypes.SET_ALL_STUDENTS, role);

export const fetchAllStudents = (role) => 
  action(actionTypes.FETCH_ALL_STUDENTS, role);

export const createStudent = (data) => 
  action(actionTypes.CREATE_STUDENT, data);

export const updateStudent = (data) =>
  action(actionTypes.UPDATE_STUDENT, data);

export const fetchStudentById = (data) => 
  action(actionTypes.FETCH_STUDENT_BY_ID, data);

export const setStudentById = (data) =>
  action(actionTypes.SET_STUDENT_BY_ID, data);
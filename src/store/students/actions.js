import { action } from "typesafe-actions";

import * as actionTypes from "./actionTypes";

export const setAllStudents = (role, total) =>
  action(actionTypes.SET_ALL_STUDENTS, { role, total });

export const fetchAllStudents = (userId, options = {}) =>
  action(actionTypes.FETCH_ALL_STUDENTS, { userId, options });

export const createStudent = (data) => action(actionTypes.CREATE_STUDENT, data);

export const updateStudent = (data) => action(actionTypes.UPDATE_STUDENT, data);

export const fetchStudentById = (data) =>
  action(actionTypes.FETCH_STUDENT_BY_ID, data);

export const setStudentById = (data) =>
  action(actionTypes.SET_STUDENT_BY_ID, data);

export const invalidateCache = () => action(actionTypes.INVALIDATE_CACHE);

import { action } from "typesafe-actions";

import * as actionTypes from "./actionTypes";

export const setPaginatedStudents = (role, total) =>
  action(actionTypes.SET_PAGINATED_STUDENTS, { role, total });

export const fetchPaginatedStudents = (userId, options = {}) =>
  action(actionTypes.FETCH_PAGINATED_STUDENTS, { userId, options });

export const fetchAllStudents = (userId) =>
  action(actionTypes.FETCH_ALL_STUDENTS, { userId });

export const setAllStudents = (data) =>
  action(actionTypes.SET_ALL_STUDENTS, { students: data });

export const createStudent = (data) => action(actionTypes.CREATE_STUDENT, data);

export const updateStudent = (data) => action(actionTypes.UPDATE_STUDENT, data);

export const fetchStudentById = (data) =>
  action(actionTypes.FETCH_STUDENT_BY_ID, data);

export const setStudentById = (data) =>
  action(actionTypes.SET_STUDENT_BY_ID, data);

export const invalidateCache = () => action(actionTypes.INVALIDATE_CACHE);

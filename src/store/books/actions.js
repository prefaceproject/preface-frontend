import { action } from "typesafe-actions";

import * as actionTypes from "./actionTypes";

export const createBook = (data) => action(actionTypes.CREATE_BOOK, data);
export const requestBooks = () => action(actionTypes.REQUEST_BOOKS);
export const receiveBooks = (bookData) => action(actionTypes.RECEIVE_BOOKS, bookData);
export const setError = (error) => action(actionTypes.SET_ERROR, error);

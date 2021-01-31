import { action } from "typesafe-actions";

import * as actionTypes from "./actionTypes"


export const storeBook = (data) =>
    action(actionTypes.STORE_BOOK, data);

export const setAllBooks = () =>
    action(actionTypes.SET_ALL_BOOKS);

export const fetchAllBooks = () =>
    action(actionTypes.FETCH_ALL_BOOKS);

/** @format */

import * as actionTypes from "./actionTypes";

export const initialState = {
    data: null,
    error: null,
    bookList: []
};

const reducerActions = {
    [actionTypes.SET_ALL_BOOKS] (state, action) {
        return {
            ...state,
            bookList: action.payload,
        };
    },
    [actionTypes.STORE_BOOK] (state, action) {
        return {
            ...state,
            data: action.payload,

        }
    },
};
export default function BookReducer(state = initialState, action) {
    return action?.type in reducerActions
        ? reducerActions[action.type](state, action)
        : state;
}
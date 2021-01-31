import Axios from "axios";
import { all, call, put, takeLatest, select, take, takeEvery } from "redux-saga/effects";
import * as actionTypes from "./actionTypes";
import * as actions from "./actions";
import { backend_url } from "../../constants/url";
import { action } from "typesafe-actions";


const storeBook = function* ({payload}) {
    try {
        const response = yield call(
            Axios.post,
            backend_url + "/api/books",
            payload,
        );
        if (response.data.success) {
            yield put(actions.storeBook(response.data))
        }
    } catch (err) {
        console.log(err)
    }
};

const fetchAllBooks = function* ({}) {
    try {
        const response = yield call(
            Axios.get,
            backend_url + "/api/books",
        );
        if (response.data.success) {
           // console.log("here")
            //console.log("here", response.data)
            yield put(actions.setAllBooks(response.data.list))
        }
    } catch(err){
        console.log(err)
    }
};

export default function* BookSaga() {
    yield all([
        takeLatest(actionTypes.STORE_BOOK, storeBook),
        takeLatest(actionTypes.FETCH_ALL_BOOKS, fetchAllBooks)
    ]);
}
import { action } from "typesafe-actions";

import * as actionTypes from "./actionTypes";

export const createSession = (data) => action(actionTypes.CREATE_SESSION, data);
export const setError = (error) => action(actionTypes.SET_ERROR, error);

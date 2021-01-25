import { action } from "typesafe-actions";

import * as actionTypes from "./actionTypes";

export const setUser = (data) =>
  action(actionTypes.SET_USER, data);

export const loginUser = (data) => 
  action(actionTypes.LOGIN_USER, data);

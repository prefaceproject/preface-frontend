import { action } from "typesafe-actions";

import * as actionTypes from "./actionTypes";

export const setUser = () =>
  action(actionTypes.SET_USER);

export const getUser = (data) =>
  action(actionTypes.GET_USER, data);

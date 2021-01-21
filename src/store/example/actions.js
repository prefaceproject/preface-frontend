import { action } from "typesafe-actions";

import * as actionTypes from "./actionTypes";

export const exampleRequestData = () =>
  action(actionTypes.EXAMPLE_REQUEST_DATA);

export const exampleReceiveData = (data) =>
  action(actionTypes.EXAMPLE_RECEIVE_DATA, data);

export const exampleSetError = (error) =>
  action(actionTypes.EXAMPLE_SET_ERROR, error);

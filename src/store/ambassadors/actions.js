import { action } from "typesafe-actions";

import * as actionTypes from "./actionTypes";

export const createAmbassador = (data) => action(actionTypes.CREATE_AMBASSADOR, data);

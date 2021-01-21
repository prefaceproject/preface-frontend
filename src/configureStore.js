/** @format */

import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { createRootReducer, rootSaga } from "./store";

export default function configureStore() {
  const composeEnhancers = composeWithDevTools({ name: "preface" });
  const sagaMiddleware = createSagaMiddleware();

  // if we decide to use connected react router, we can do add that middleware here
  const middlewares = [sagaMiddleware];
  const store = createStore(
    createRootReducer(),
    {},
    composeEnhancers(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);
  return store;
}

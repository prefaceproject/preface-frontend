import React from "react";
import { Provider } from "react-redux";

import App from "./containers/App/App";
import configureStore from "./configureStore";

const store = configureStore();

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Main;

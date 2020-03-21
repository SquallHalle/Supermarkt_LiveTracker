import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./store/index";
import { App } from "./App";
import "./index.css";

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
  rootReducer /* preloadedState, */,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

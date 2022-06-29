import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";
import App from "./App";
import thunk from "redux-thunk";

const composeEnhancers =
   (typeof window !== "undefined" &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
   compose;

const enhancer = composeEnhancers(
   applyMiddleware(thunk)
   // other store enhancers if any
);

const store = createStore(
   reducers,
   enhancer
   // compose(applyMiddleware(thunk))
);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById("root")
);

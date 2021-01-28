// react
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

// components
import App from "./components/App";

const store = createStore(reducers, {}, applyMiddleware()); // dummy store for the time being

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

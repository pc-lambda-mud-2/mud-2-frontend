import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import * as reducers from "./state/reducer";
import { BrowserRouter as Router } from "react-router-dom";

const monsterReducer = combineReducers({
  signUpReducer: reducers.RegisterReducer,
  logInReducer: reducers.LoginReducer,
  initializePlayerReducer: reducers.InitializePlayerReducer,
  moveReducer: reducers.moveNorthReducer,
  roomsReducer: reducers.GetRoomsReducer
});

const store = createStore(
  monsterReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

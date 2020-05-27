import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const invariant = require("redux-immutable-state-invariant").default();

const middlewares = [thunk, invariant];
const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const devTools =
  process.env.NODE_ENV !== "production"
    ? composeEnhancers(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

const store = createStore(rootReducer, initialState, devTools);

export default store;

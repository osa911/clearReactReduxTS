import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import logger from 'redux-logger'

import { IAppState } from "./appState";
import { counters } from "./reducers/counters";

export default createStore(
  combineReducers<IAppState>({
    counters
  }),
  applyMiddleware(thunk, logger)
);

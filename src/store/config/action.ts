import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

import { Action as AllActions } from "../actions";
import { IAppState } from "../appState";

export type AppAction<T, P = null> = Action<T> &
  (P extends NonNullable<P> ? { payload: P } : {});

export type AppThunkAction<R = void> = ThunkAction<
  Promise<R>,
  IAppState,
  {},
  AllActions
  >;

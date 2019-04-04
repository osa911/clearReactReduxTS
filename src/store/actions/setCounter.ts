import { AppAction } from "../config/action";
import {ICounter} from "../appState";

export type SetCounter = AppAction<"SET_COUNTER", { id: string, value: number }>;

export const setCounter = (counter: ICounter): SetCounter => ({
  type: "SET_COUNTER",
  payload: counter
});

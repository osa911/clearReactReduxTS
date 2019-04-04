import {AppThunkAction} from "../store/config/action";
import {ICounter} from "../store/appState";
import {setCounter} from "../store/actions";

export const createCounter = (): AppThunkAction => async (dispatch: any) => {
  const counter: ICounter = {
    id: String(new Date().getTime()),
    value: 0
  };

  dispatch(setCounter(counter))
}
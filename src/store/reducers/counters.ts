import { AppReducer } from "../config/reducer";

import { IAppState } from "../appState";

const InitialState: IAppState["counters"] = {
  foo: {
    id: 'foo',
    value: 0
  }
};

export const counters: AppReducer<IAppState["counters"]> = (
  state = InitialState,
  action
) => {
  switch (action.type) {
    case "INCREMENT": {
      const { id, value } = action.payload;
      return {
        ...state,
        [id]: {
          id,
          value: state[id].value + value
        }
      };
    }
    case "DECREMENT": {
      const { id, value } = action.payload;
      return {
        ...state,
        [id]: {
          id,
          value: state[id].value - value
        }
      };
    }
    case "SET_COUNTER": {
      const { id } = action.payload;
      return {
        ...state,
        [id]: action.payload
      }
    }
    default:
      return state;
  }
};

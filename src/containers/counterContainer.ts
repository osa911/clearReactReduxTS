import { connect } from "react-redux";

import {
  CounterControl,
  ICounterControlProps
} from "../components/counterControl";
import { IAppState } from "../store/appState";
import { decrement, increment } from "../store/actions";

export default connect<
  Pick<ICounterControlProps, "value">,
  Pick<ICounterControlProps, "onIncrement" | "onDecrement">,
  {id: string},
  IAppState
>((state, {id}) => ({
    value: state.counters[id].value
  })
  ,
  (dispatch, {id}) => ({
    onIncrement(value) {
      dispatch(increment(id, value));
    },
    onDecrement(value) {
      dispatch(decrement(id, value));
    }
  })
)(CounterControl);

import { connect } from "react-redux";
import {CountersControl, ICountersControlProps} from "../components/countersControl";
import {IAppState} from "../store/appState";
import {createCounter} from "../api/addCounter";

export default connect<
  Pick<ICountersControlProps, 'counters'>,
  Pick<ICountersControlProps, 'onAddCounter'>,
  {},
  IAppState
  >(
  (state) => ({
    counters: Object.values(state.counters)
  }),
    (dispatch) => ({
      onAddCounter() {
        dispatch(createCounter())
      }
    })
)(CountersControl)
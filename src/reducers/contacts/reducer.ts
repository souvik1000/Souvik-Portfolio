import { reducerWithInitialState } from "typescript-fsa-reducers";

import actions from "./action";

export interface IReducerState {
  error: boolean;
  status: boolean;
  loading: boolean;
  text: string | null;
}

const INITIAL_STATE: IReducerState = {
  text: null,
  error: false,
  status: false,
  loading: false,
};

const reducer = reducerWithInitialState<IReducerState>(INITIAL_STATE)
  .case(actions.setMilSentStatus.started, (state) => ({
    ...state,
    error: false,
    loading: true,
  }))
  .case(actions.setMilSentStatus.done, (state, payload) => {
    const { status, text } = payload.result;

    return {
      ...state,
      loading: true,
      error: status !== 200,
      status: status === 200,
      text: text,
    };
  })
  .build();

export default reducer;

import actions from "./action";
import reducers, { IReducerState } from "./reducer";

type IState = IReducerState;

export type { IState };
export { actions, reducers };

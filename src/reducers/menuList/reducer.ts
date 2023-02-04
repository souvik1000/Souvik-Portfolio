import { reducerWithInitialState } from "typescript-fsa-reducers";

import actions from "./action";

export type MenuTypes =
  | "About"
  | "Project"
  | "Work"
  | "Skill"
  | "Feedback"
  | null;

export interface IReducerState {
  error: boolean;
  loading: boolean;
  selectedMenu: MenuTypes;
}

const INITIAL_STATE: IReducerState = {
  error: false,
  loading: false,
  selectedMenu: null || (window.location.pathname.split("/")[1] as MenuTypes),
};

const reducer = reducerWithInitialState<IReducerState>(INITIAL_STATE)
  .case(actions.resetState, () => ({
    ...INITIAL_STATE,
  }))
  .case(actions.updateSelectedMenuOption, (state, payload) => ({
    ...state,
    selectedMenu: payload,
  }))
  .build();

export default reducer;

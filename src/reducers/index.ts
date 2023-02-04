import { combineReducers } from "redux";
import {
  IState as IMenuListState,
  reducers as menuOptionsReducer,
} from "src/reducers/menuList";
import {
  IState as IContactState,
  reducers as contactReducer,
} from "src/reducers/contacts";

export interface IReducerState {
  contacts: IContactState;
  menuOptions: IMenuListState;
}

export const reducer = combineReducers<IReducerState>({
  contacts: contactReducer,
  menuOptions: menuOptionsReducer,
});

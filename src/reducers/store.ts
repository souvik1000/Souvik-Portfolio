import { Store } from "redux";
import { ThunkAction } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

import { IReducerState, reducer } from ".";

export type IThunk = ThunkAction<any, IReducerState, any, any>;
export type RegisterReducer = (state: any) => Store<any>;

export const store = configureStore({
  reducer,
});

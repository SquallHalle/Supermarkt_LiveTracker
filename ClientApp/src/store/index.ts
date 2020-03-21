import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer, userStateType } from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer
});

export interface RootStateType {
  user: userStateType;
}

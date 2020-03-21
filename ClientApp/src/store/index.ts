import { createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer, userStateType } from "./userReducer";
import { marketReducer, marketStateType } from "./marketReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  market: marketReducer
});

export interface RootStateType {
  user: userStateType;
  market: marketStateType;
}

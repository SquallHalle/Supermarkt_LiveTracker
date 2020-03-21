import { User } from "../types/User";
import {
  ActionTypes,
  LOGIN_USER,
  LOGOUT_USER,
  SET_USER_INFO
} from "./userActions";

export interface userStateType {
  currentUser?: User;
}

const initialState = {
  currentUser: null
};

export function userReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case SET_USER_INFO:
      return {
        ...state,
        currentUser: {
          Name: action.payload.Name,
          AssociatedMarketId: action.payload.AssociatedMarketId,
          Token:
            state.currentUser == null
              ? null
              : (state.currentUser! as User).Token
        }
      };
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
}

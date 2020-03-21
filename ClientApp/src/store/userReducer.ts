import { User } from "../types/User";
import { ActionTypes, LOGIN_USER, LOGOUT_USER } from "./userActions";

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
    case LOGOUT_USER:
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
}

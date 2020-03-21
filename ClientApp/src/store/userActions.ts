import { User } from "../types/User";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_USER_INFO = "SET_USER_INFO";

interface loginUserAction {
  type: typeof LOGIN_USER;
  payload: User;
}
interface setUserInfoAction {
  type: typeof SET_USER_INFO;
  payload: User;
}
interface logoutUserAction {
  type: typeof LOGOUT_USER;
}

export function loginUser(userData: User): loginUserAction {
  return {
    type: LOGIN_USER,
    payload: userData
  };
}
export function setUserInfo(userData: User): setUserInfoAction {
  return {
    type: SET_USER_INFO,
    payload: userData
  };
}
export function logoutUser() {
  return {
    type: LOGOUT_USER
  };
}

export type ActionTypes =
  | loginUserAction
  | setUserInfoAction
  | logoutUserAction;

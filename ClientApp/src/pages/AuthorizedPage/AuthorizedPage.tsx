import * as React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { User } from "../../types/User";

export interface AuthProps {
  children?: any;
}

export interface RootState {
  user: {
    currentUser: User;
  };
}

export const AuthorizedPage = (props: AuthProps) => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  console.log("currentUser", currentUser);
  console.log(currentUser == null);

  if (currentUser == null) {
    // not logged in so redirect to login page with the return url
    return <Redirect to={{ pathname: "/auth" }} />;
  }

  // authorised so return component
  return <div className='authwrapper'>{props.children}</div>;
};

export default AuthorizedPage;

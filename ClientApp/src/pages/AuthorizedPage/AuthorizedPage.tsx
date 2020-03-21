import * as React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store/index";

export interface AuthProps {
  children?: any;
}

export const AuthorizedPage = (props: AuthProps) => {
  const currentUser = useSelector(
    (state: RootStateType) => state.user.currentUser
  );

  if (currentUser == null) {
    console.log("not logged in:", "redirect to /auth");
    // not logged in so redirect to login page with the return url
    return <Redirect to={{ pathname: "/auth" }} />;
  }

  console.log("logged in as", currentUser);
  // authorised so return component
  return <div className='authwrapper'>{props.children}</div>;
};

export default AuthorizedPage;

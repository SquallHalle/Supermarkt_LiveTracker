import * as React from "react";
import { Redirect } from "react-router-dom";

export interface AuthProps {
  children?: any;
}

export const AuthorizedPage = (props: AuthProps) => {
  const currentUser = "Pete"; //hier sollten wir den User aus dem Speicher holen (Redux)
  if (currentUser == null) {
    // not logged in so redirect to login page with the return url
    return <Redirect to={{ pathname: "/auth" }} />;
  }

  // authorised so return component
  return <div className='authwrapper'>{props.children}</div>;
};

export default AuthorizedPage;

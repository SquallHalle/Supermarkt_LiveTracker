import * as React from "react";
import { Button, ButtonTypes } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../types/User";
import { loginUser } from "../../store/userActions";
import { RootStateType } from "../../store/index";
import { Redirect } from "react-router-dom";

export const Authentication = () => {
  const currentUser = useSelector(
    (state: RootStateType) => state.user.currentUser
  );
  const dispatch = useDispatch();
  let userData: User = {
    name: "Pete",
    token: "jfklsadöjfölajeswilfjsdklöaj"
  };

  if (currentUser != null) {
    console.log("login successful:", "redirect to /updatestatus");
    return <Redirect to={{ pathname: "/updatestatus" }} />;
  }

  return (
    <div>
      AuthenticationPage
      <Button
        Type={ButtonTypes.Confirm}
        onClick={() => {
          dispatch(loginUser(userData));
        }}
      >
        LogIn
      </Button>
      <Button Type={ButtonTypes.Link} href='/register'>
        Register
      </Button>
    </div>
  );
};

export default Authentication;

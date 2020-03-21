import * as React from "react";
import { Button, ButtonTypes } from "../../components/index";
import { useDispatch } from "react-redux";
import { User } from "../../types/User";
import { loginUser } from "../../store/userActions";

export const Authentication = () => {
  const dispatch = useDispatch();
  let userData: User = {
    name: "Pete",
    token: "jfklsadöjfölajeswilfjsdklöaj"
  };
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
    </div>
  );
};

export default Authentication;

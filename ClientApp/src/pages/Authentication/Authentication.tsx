import * as React from "react";
import { TextField, TextFieldTypes, Button, ButtonTypes } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../../types/User";
import { loginUser } from "../../store/userActions";
import { RootStateType } from "../../store/index";
import { Redirect } from "react-router-dom";
import Api from "../../utils/FakeApi";

export const Authentication = () => {
  let [username, setUsername] = React.useState("");
  let [password, setPassword] = React.useState("");
  const currentUser = useSelector(
    (state: RootStateType) => state.user.currentUser
  );
  const dispatch = useDispatch();
  const populateLoginData = async function() {
    Api.Login(username, password).then(data => {
      let typedData = data as { Token: string };
      let currentUser: User = {
        Name: username,
        Token: typedData.Token,
        AssociatedMarketId: null
      };
      dispatch(loginUser(currentUser));
    });
  };

  if (currentUser != null) {
    console.log("login successful:", "redirect to /updatestatus");
    return <Redirect to={{ pathname: "/updatestatus" }} />;
  }

  return (
    <div>
      AuthenticationPage
      <TextField title = "Username" Type={TextFieldTypes.Normal} />
      <TextField title = "Password" Type={TextFieldTypes.Password} />
      <Button
        Type={ButtonTypes.Confirm}
        onClick={() => {
          populateLoginData();
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

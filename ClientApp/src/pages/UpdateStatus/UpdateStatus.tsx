import * as React from "react";
import { Button, ButtonTypes } from "../../components/index";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/userActions";
import { AuthorizedPage } from "../index";

export const UpdateStatus = () => {
  const dispatch = useDispatch();
  return (
    <AuthorizedPage>
      UpdateStatusPage
      <Button
        Type={ButtonTypes.Confirm}
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        LogOut
      </Button>
      <section className='UpdateStatus_ButtonList'>
        <Button
          Type={ButtonTypes.Confirm}
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          Leere Gänge
        </Button>
        <Button
          Type={ButtonTypes.Confirm}
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          Ein paar Kunden
        </Button>
        <Button
          Type={ButtonTypes.Confirm}
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          Voll, bitte nicht kommen
        </Button>
      </section>
    </AuthorizedPage>
  );
};

export default UpdateStatus;

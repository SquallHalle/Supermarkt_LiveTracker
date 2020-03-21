import * as React from "react";
import { Button, ButtonTypes } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/userActions";
import {
  setMarketStatus,
  setMarketStatusData
} from "../../store/marketActions";
import { RootStateType } from "../../store/index";
import { AuthorizedPage } from "../index";

export const UpdateStatus = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(
    (state: RootStateType) => state.user.currentUser
  );
  const MarketStatusTemplate: setMarketStatusData = {
    Token: currentUser ? currentUser.token : "",
    MarketId: currentUser ? currentUser.associatedMarketId : -1,
    Status: null
  };

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
            dispatch(setMarketStatus({ ...MarketStatusTemplate, Status: 1 }));
          }}
        >
          Leere Gänge
        </Button>
        <Button
          Type={ButtonTypes.Confirm}
          onClick={() => {
            dispatch(setMarketStatus({ ...MarketStatusTemplate, Status: 2 }));
          }}
        >
          Ein paar Kunden
        </Button>
        <Button
          Type={ButtonTypes.Confirm}
          onClick={() => {
            dispatch(setMarketStatus({ ...MarketStatusTemplate, Status: 3 }));
          }}
        >
          Voll, bitte nicht kommen
        </Button>
      </section>
    </AuthorizedPage>
  );
};

export default UpdateStatus;

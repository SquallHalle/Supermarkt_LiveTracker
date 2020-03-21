import * as React from "react";
import { Button, ButtonTypes } from "../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, setUserInfo } from "../../store/userActions";
import {
  setMarketStatus,
  setMarketStatusData
} from "../../store/marketActions";
import { RootStateType } from "../../store/index";
import { AuthorizedPage } from "../index";
import { useEffect } from "react";
import Api from "../../utils/FakeApi";
import { User } from "../../types/User";

export const UpdateStatus = () => {
  const currentUser = useSelector(
    (state: RootStateType) => state.user.currentUser
  );
  useEffect(() => {
    if (currentUser != null && currentUser.AssociatedMarketId == null) {
      populateUserData(currentUser.Token);
    }
  }, [currentUser]);

  const populateUserData = async function(token: string) {
    Api.GetUserProfil(token).then(data => {
      dispatch(setUserInfo(data as User));
    });
  };

  const dispatch = useDispatch();
  const MarketStatusTemplate: setMarketStatusData = {
    Token: currentUser ? currentUser.Token : "",
    MarketId:
      currentUser && currentUser.AssociatedMarketId
        ? currentUser.AssociatedMarketId
        : -1,
    Status: null
  };

  let setStatus = (status: number) => {
    if (currentUser != null && currentUser.AssociatedMarketId != null) {
      Api.SetMarket(
        currentUser.Token,
        currentUser.AssociatedMarketId,
        status
      ).then(data => {
        if (data) {
          dispatch(
            setMarketStatus({ ...MarketStatusTemplate, Status: status })
          );
        }
      });
    }
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
        <Button Type={ButtonTypes.Confirm} onClick={() => setStatus(1)}>
          Leere Gänge
        </Button>
        <Button Type={ButtonTypes.Confirm} onClick={() => setStatus(2)}>
          Ein paar Kunden
        </Button>
        <Button Type={ButtonTypes.Confirm} onClick={() => setStatus(3)}>
          Voll, bitte nicht kommen
        </Button>
      </section>
    </AuthorizedPage>
  );
};

export default UpdateStatus;

import * as React from "react";
import { Button, ButtonTypes, StatusSlider } from "../../components/index";
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
import "./UpdateStatus.styles.css";

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
      <header className='updatestatus_header'>
        <h1 className='updatestatus_header__title'>Lidl</h1>
        <Button
          Type={ButtonTypes.Confirm}
          onClick={() => {
            dispatch(logoutUser());
          }}
        >
          LogOut
        </Button>
      </header>
      <section className='updatestatus_sliderwrapper'>
        <StatusSlider
          step={1}
          min={1}
          max={3}
          onChange={value => setStatus(value)}
        />
      </section>
    </AuthorizedPage>
  );
};

export default UpdateStatus;

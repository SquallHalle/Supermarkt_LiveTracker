import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomerMap, Button, ButtonTypes } from "../../components/index";
import { addMarkets } from "../../store/marketActions";
import { Market, MarketList } from "../../types/Market";
import Api from "../../Utils/FakeApi";
import { RootStateType } from "../../store/index";
import "./Home.styles.css";

export const Home = () => {
  const dispatch = useDispatch();
  const markets = useSelector((state: RootStateType) => state.market.markets);

  useEffect(() => {
    populateMarketData();
  }, []);

  const populateMarketData = async function() {
    Api.GetMarketList().then(data => {
      dispatch(addMarkets(data as Array<Market>));
    });
  };

  const MarketList: MarketList = {
    Markets: markets
  };

  return (
    <div className='Home'>
      <CustomerMap
        MarketList={MarketList}
        MapCenter={{ lat: 52.520008, long: 13.404954 }}
      />
    </div>
  );
};

export default Home;

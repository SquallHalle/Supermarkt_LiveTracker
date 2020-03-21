import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CustomerMap, Button, ButtonTypes } from "../../components/index";
import { addMarkets } from "../../store/marketActions";
import { Market } from "../../types/Market";
import Api from "../../utils/FakeApi";
import "./Home.styles.css";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    populateMarketData();
  }, []);

  const populateMarketData = async function() {
    Api.GetMarketList().then(data => {
      dispatch(addMarkets(data as Array<Market>));
    });
  };

  return (
    <div className='Home'>
      <CustomerMap />
    </div>
  );
};

export default Home;

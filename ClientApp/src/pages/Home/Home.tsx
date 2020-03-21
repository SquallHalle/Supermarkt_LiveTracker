import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CustomerMap, Button, ButtonTypes } from "../../components/index";
import { addMarkets } from "../../store/marketActions";
import { Market } from "../../types/Market";
import Api from "../../utils/FakeApi";

export const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    populateSpaceshipData();
  }, []);

  const populateSpaceshipData = async function() {
    // const response = await fetch("https://swapi.co/api/starships/9/");
    // const data = await response.json();
    Api.GetMarketList().then(data => {
      console.log(data);
      dispatch(addMarkets(data as Array<Market>));
    });
  };

  return (
    <div>
      <CustomerMap />
      <Button Type={ButtonTypes.Link} href='/auth'>
        Markt Login
      </Button>
    </div>
  );
};

export default Home;

import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { CustomerMap, Button, ButtonTypes } from "../../components/index";
import { addMarkets } from "../../store/marketActions";
import { Market, MarketList } from "../../types/Market";
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

  const MarketList: MarketList = {
    Markets: [
      {
        Id: 12335,
        Name: "Rewe um die Ecke",
        Company: "Rewe",
        Adresse: "Straße5",
        GPSLocation: { lat: 52.520008, long: 13.404954 },
        Status: 3, // 1 = leer; 2=mittel; 3=voll; null = undefiniert
      },
      {
        Id: 2562,
        Name: "Rewe um die Ecke",
        Company: "Rewe",
        Adresse: "Straße3",
        GPSLocation: { lat: 52.600008, long: 13.404954 },
        Status: 2, // 1 = leer; 2=mittel; 3=voll; null = undefiniert
      },
      {
        Id: 2462,
        Name: "Rewe um die Ecke",
        Company: "Rewe",
        Adresse: "Straße3",
        GPSLocation: { lat: 52.500008, long: 13.404954 },
        Status: 1, // 1 = leer; 2=mittel; 3=voll; null = undefiniert
      }
    ]
  };

  return (
    <div className="Home">
      <CustomerMap
        MarketList={MarketList}
        MapCenter={{ lat: 52.520008, long: 13.404954 }}
      />
    </div>
  );
};

export default Home;

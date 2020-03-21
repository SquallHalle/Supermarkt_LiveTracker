import { Market } from "../types/Market";

export const ADD_MARKETS = "ADD_MARKETS";
export const SET_MARKET_STATUS = "SET_MARKET_STATUS";

interface setMarketStatusAction {
  type: typeof SET_MARKET_STATUS;
  payload: {
    Token: string;
    MarketID: number;
    Status: number;
  };
}
interface addMarketsAction {
  type: typeof ADD_MARKETS;
  payload: Array<Market>;
}

export function setMarketStatus(marketData: {
  Token: string;
  MarketID: number;
  Status: number;
}): setMarketStatusAction {
  return {
    type: SET_MARKET_STATUS,
    payload: marketData
  };
}

export function addMarkets(marketsData: Array<Market>): addMarketsAction {
  return {
    type: ADD_MARKETS,
    payload: marketsData
  };
}

export type ActionTypes = setMarketStatusAction | addMarketsAction;

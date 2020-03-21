import { Market } from "../types/Market";

export const ADD_MARKETS = "ADD_MARKETS";
export const SET_MARKET_STATUS = "SET_MARKET_STATUS";

interface setMarketStatusAction {
  type: typeof SET_MARKET_STATUS;
  payload: setMarketStatusData;
}
interface addMarketsAction {
  type: typeof ADD_MARKETS;
  payload: Array<Market>;
}

export interface setMarketStatusData {
  Token: string;
  MarketId: number;
  Status: number | null;
}
export function setMarketStatus(
  marketData: setMarketStatusData
): setMarketStatusAction {
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

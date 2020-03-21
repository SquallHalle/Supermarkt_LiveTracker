import { Market } from "../types/Market";
import { ActionTypes, ADD_MARKETS, SET_MARKET_STATUS } from "./marketActions";
import { Marker } from "react-leaflet";

export interface marketStateType {
  markets: Array<Market>;
}

const initialState: marketStateType = {
  markets: []
};

export function marketReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case ADD_MARKETS:
      const currentMarketIds = state.markets.map(market => {
        return market.Id;
      });
      return {
        ...state,
        markets: [
          ...state.markets,
          action.payload.filter((market: Market) => {
            return !currentMarketIds.includes(market.Id);
          })
        ]
      };
    case SET_MARKET_STATUS:
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
}

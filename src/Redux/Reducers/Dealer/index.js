import {
    FETCH_DEALER,
    FETCH_DEALER_SUCCSES,
    FETCH_DEALER_FAILED,
  } from "../../Actions/Dealer/Action";
  
  const DealerReducers = (ListDealer = [], action) => {
    switch (action.type) {
      case FETCH_DEALER_SUCCSES:
        return action.dealer;
      case FETCH_DEALER_FAILED:
        return [];
      default:
        return ListDealer;
    }
  };
  export default DealerReducers;
  
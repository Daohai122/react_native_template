import {
    FETCH_DEALER,
    FETCH_DEALER_FAILED,
    FETCH_DEALER_SUCCSES,
  } from "../../Redux/Actions/Dealer/Action";
  import { list } from "../../Api/Dealer";
  import { put, takeLatest, call } from "redux-saga/effects";
  
  function* fetchDealer() {
     try {
      const res = yield list();
      yield put({ type: FETCH_DEALER_SUCCSES, dealer: res.result??[] });
    } catch (error) {
     yield put({ type: FETCH_DEALER_FAILED, error: error });
    }
  }
  
  export function* watchFetchDealer() {
    yield takeLatest(FETCH_DEALER, fetchDealer);
  }
  
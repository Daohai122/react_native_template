import {
    FETCH_TABLE,
    FETCH_TABLE_FAILED,
    FETCH_TABLE_SUCCSES,
  } from "../../Redux/Actions/Table/Action";
  import { list } from "../../Api/Table";
  import { list as listDealer } from "../../Api/Dealer";
  import { put, takeLatest, call, all } from "redux-saga/effects";
  
  function* fetchTable() {
     try {
      const {customers, products} = yield all({
        customers: call(list),
        products: call(listDealer)
      });
      console.log('dadsadd1a', customers, 'dadsadd3a', products)
      // yield put({ type: FETCH_TABLE_SUCCSES, table: res.result??[] });
    } catch (error) {
      console.log('err2r', error)
     yield put({ type: FETCH_TABLE_FAILED, error: error });
    }
  }
  
  export function* watchFetchTable() {
    yield takeLatest(FETCH_TABLE, fetchTable);
  }
  
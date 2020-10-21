import {
    FETCH_TABLE,
    FETCH_TABLE_FAILED,
    FETCH_TABLE_SUCCSES,
  } from "../../Redux/Actions/Table/Action";
  import { list } from "../../Api/Table";
  import { put, takeLatest, call } from "redux-saga/effects";
  
  function* fetchTable() {
     try {
      const res = yield list();
      yield put({ type: FETCH_TABLE_SUCCSES, table: res.result??[] });
    } catch (error) {
     yield put({ type: FETCH_TABLE_FAILED, error: error });
    }
  }
  
  export function* watchFetchTable() {
    yield takeLatest(FETCH_TABLE, fetchTable);
  }
  
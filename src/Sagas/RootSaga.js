import { call, all, spawn } from "redux-saga/effects";

import { watchFetchTable } from "./Table";
import { watchFetchDealer } from "./Dealer";
import { watchFetchInit } from "./InitData";
export default function* RootSaga() {
  const sagas = [
    watchFetchTable,
    watchFetchDealer,
    watchFetchInit
  ];
  yield all(sagas.map(saga =>
    spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
          console.log(e)
        }
      }
    }))
  );
}
import { call, all, spawn} from "redux-saga/effects";

import { watchFetchTable } from "./Table";
import { watchFetchDealer } from "./Dealer";
export default function* RootSaga() {
    const sagas = [
        watchFetchTable,
        watchFetchDealer
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
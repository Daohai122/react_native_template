import { call, all, spawn} from "redux-saga/effects";

import { watchFetchTable } from "./Table";
export default function* RootSaga() {
    const sagas = [
        watchFetchTable
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
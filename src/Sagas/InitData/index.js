import {
    FETCH_TABLE_FAILED,
    FETCH_TABLE_SUCCSES,
} from "../../Redux/Actions/Table/Action";
import { UPDATE_DATAFILLTER } from "../../Redux/Actions/DataFillter/Action";
import {
    FETCH_DEALER_FAILED,
    FETCH_DEALER_SUCCSES,
} from "../../Redux/Actions/Dealer/Action";
import { list } from "../../Api/Table";
import { list as listDealer } from "../../Api/Dealer";
import { put, takeEvery, takeLatest, call, all, cps } from "redux-saga/effects";

function* fetchInit() {
    try {
        const { table, dealer } = yield all({
            table: call(list),
            dealer: call(listDealer)
        });
        const dataSetting = {
            table: table.result[table.result.length -1].id,
            tableName: table.result[table.result.length -1].name,
            dealerName: dealer.result[table.result.length -1].name,
            dealer: dealer.result[table.result.length -1].id,
            date: new Date(),
            time: new Date()
        }
        yield all([
            put({ type: UPDATE_DATAFILLTER, payload: dataSetting }),
            put({ type: FETCH_TABLE_SUCCSES, table: table.result ?? [] }),
            put({ type: FETCH_DEALER_SUCCSES, dealer: dealer.result ?? [] }),
        ]);

    } catch (error) {
        yield all([
            put({ type: FETCH_TABLE_FAILED, error: error }),
            put({ type: FETCH_DEALER_FAILED, error: error }),
        ]);
    }
}

export function* watchFetchInit() {
    yield takeLatest('FETCH_INIT', fetchInit);
}

import { FETCH_TABLE_FAILED, FETCH_TABLE_SUCCSES, FETCH_TABLE } from "./Action";

export const fetchTableAction = () => {
    return {
        type: FETCH_TABLE,
    }
}

export const fetchSucessAction = (reducerTable) => {
    return {
        type: FETCH_TABLE_SUCCSES,
        reducerTable
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_TABLE_FAILED,
        error
    }
}

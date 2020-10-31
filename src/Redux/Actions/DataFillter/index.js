import { UPDATE_DATAFILLTER } from "./Action";
export const updateDataFillter = (data) => {
    return {
        type: UPDATE_DATAFILLTER,
        payload: data
    }
}

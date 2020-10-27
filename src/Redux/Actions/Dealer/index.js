import { FETCH_DEALER_FAILED, FETCH_DEALER_SUCCSES, FETCH_DEALER } from "./Action";

export const fetchDealerAction = () => {
    return {
        type: FETCH_DEALER,
    }
}

export const fetchSucessAction = (reducerDealer) => {
    return {
        type: FETCH_DEALER_SUCCSES,
        reducerDealer
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_DEALER_FAILED,
        error
    }
}

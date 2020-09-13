export function saveCostumerRequest(data, history) {
    return {
        type: '@costumers/SAVE_COSTUMER_REQUEST',
        payload: { data, history }
    };
}

export function saveCostumerSuccess() {
    return {
        type: '@costumers/SAVE_COSTUMER_SUCCESS'
    };
}

export function saveCostumerFailure() {
    return {
        type: '@costumers/SAVE_COSTUMER_FAILURE'
    };
}

export function loadCostumersRequest(history) {
    return {
        type: '@costumers/LOAD_COSTUMERS_REQUEST',
        payload: { history }
    };
}

export function loadCostumersSuccess(data) {
    return {
        type: '@costumers/LOAD_COSTUMERS_SUCCESS',
        payload: { data }
    };
}

export function loadCostumersFailure() {
    return {
        type: '@costumers/LOAD_COSTUMERS_FAILURE'
    };
}

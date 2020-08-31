export function saveCostumerRequest(data) {
    return {
        type: '@costumers/SAVE_COSTUMER_REQUEST',
        payload: { data }
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

export function loadCostumersRequest() {
    return {
        type: '@costumers/LOAD_COSTUMERS_REQUEST'
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

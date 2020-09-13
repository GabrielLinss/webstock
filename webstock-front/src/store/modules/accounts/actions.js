export function saveAccountRequest(data, history) {
    return {
        type: '@accounts/SAVE_ACCOUNT_REQUEST',
        payload: { data, history }
    };
}

export function saveAccountSuccess() {
    return {
        type: '@accounts/SAVE_ACCOUNT_SUCCESS'
    };
}

export function saveAccountFailure() {
    return {
        type: '@accounts/SAVE_ACCOUNT_FAILURE'
    };
}

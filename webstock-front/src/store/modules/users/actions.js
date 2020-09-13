export function saveUserRequest(data, history) {
    return {
        type: '@users/SAVE_USER_REQUEST',
        payload: { data, history }
    };
}

export function saveUserSuccess(data) {
    return {
        type: '@users/SAVE_USER_SUCCESS',
        payload: { data }
    };
}

export function saveUserFailure() {
    return {
        type: '@users/SAVE_USER_FAILURE'
    };
}

export function loadUsersRequest(history) {
    return {
        type: '@users/LOAD_USERS_REQUEST',
        payload: { history }
    }
}

export function loadUsersSuccess(data) {
    return {
        type: '@users/LOAD_USERS_SUCCESS',
        payload: { data }
    }
}

export function loadUsersFailure() {
    return {
        type: '@users/LOAD_USERS_FAILURE'
    }
}

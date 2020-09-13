import produce from 'immer';

const INITIAL_STATE = {
    loading: false,
    data: []
};

export default function users(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {

            case '@users/SAVE_USER_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@users/SAVE_USER_SUCCESS': {
                draft.data = [action.payload.data, ...draft.data]
                draft.loading = false;
                break;
            }

            case '@users/SAVE_USER_FAILURE': {
                draft.loading = false;
                break;
            }

            case '@users/LOAD_USERS_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@users/LOAD_USERS_SUCCESS': {
                draft.data = action.payload.data
                draft.loading = false;
                break;
            }

            case '@users/LOAD_USERS_FAILURE': {
                draft.loading = false;
                break;
            }

            default:
        }
    });
}

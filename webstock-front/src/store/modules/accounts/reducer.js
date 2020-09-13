import produce from 'immer';

const INITIAL_STATE = {
    loading: false
};

export default function accounts(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {

            case '@accounts/SAVE_ACCOUNT_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@accounts/SAVE_ACCOUNT_SUCCESS': {
                draft.loading = false;
                break;
            }

            case '@accounts/SAVE_ACCOUNT_FAILURE': {
                draft.loading = false;
                break;
            }

            default:
        }
    });
}

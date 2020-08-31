import produce from 'immer';

const INITIAL_STATE = {
    loading: false,
    data: []
};

export default function costumers(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {

            case '@costumers/SAVE_COSTUMER_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@costumers/SAVE_COSTUMER_SUCCESS': {
                draft.loading = false;
                break;
            }

            case '@costumers/SAVE_COSTUMER_FAILURE': {
                draft.loading = false;
                break;
            }

            case '@costumers/LOAD_COSTUMERS_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@costumers/LOAD_COSTUMERS_SUCCESS': {
                draft.data = action.payload.data
                draft.loading = false;
                break;
            }

            case '@costumers/LOAD_COSTUMERS_FAILURE': {
                draft.loading = false;
                break;
            }

            default:
        }
    });
}

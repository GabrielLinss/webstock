import produce from 'immer';

const INITIAL_STATE = {
    loading: false,
    data: []
};

export default function products(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {

            case '@products/SAVE_PRODUCT_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@products/SAVE_PRODUCT_SUCCESS': {
                draft.loading = false;
                break;
            }

            case '@products/SAVE_PRODUCT_FAILURE': {
                draft.loading = false;
                break;
            }

            case '@products/LOAD_PRODUCTS_REQUEST': {
                draft.loading = true;
                break;
            }

            case '@products/LOAD_PRODUCTS_SUCCESS': {
                draft.data = action.payload.data
                draft.loading = false;
                break;
            }

            case '@products/LOAD_PRODUCTS_FAILURE': {
                draft.loading = false;
                break;
            }

            default:
        }
    });
}

export function saveProductRequest(data, history) {
    return {
        type: '@products/SAVE_PRODUCT_REQUEST',
        payload: { data, history }
    };
}

export function saveProductSuccess() {
    return {
        type: '@products/SAVE_PRODUCT_SUCCESS'
    };
}

export function saveProductFailure() {
    return {
        type: '@products/SAVE_PRODUCT_FAILURE'
    };
}

export function loadProductsRequest(selectedCategory, history) {
    return {
        type: '@products/LOAD_PRODUCTS_REQUEST',
        payload: { selectedCategory, history }
    };
}

export function loadProductsSuccess(data) {
    return {
        type: '@products/LOAD_PRODUCTS_SUCCESS',
        payload: { data }
    };
}

export function loadProductsFailure() {
    return {
        type: '@products/LOAD_PRODUCTS_FAILURE'
    };
}

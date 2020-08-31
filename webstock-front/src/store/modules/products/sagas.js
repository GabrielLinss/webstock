import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import {
    saveProductSuccess,
    saveProductFailure,
    loadProductsSuccess,
    loadProductsFailure
} from './actions';

export function* saveProduct({ payload }) {
    try {
        const { data } = payload

        const response = yield call(api.post, '/products', data)

        const product = response.data

        toast.success(`Produto ${product.description} lançado com sucesso!`)
        yield put(saveProductSuccess())
    } catch (e) {
        console.log(e);
        toast.error('Ocorreu um erro ao lançar o produto!')
        yield put(saveProductFailure())
    }
}

export function* loadProducts({ payload }) {
    try {
        const { selectedCategory } = payload

        const response = yield call(api.get, `/products?category_id=${selectedCategory}`)

        yield put(loadProductsSuccess(response.data))
    } catch (e) {
        console.log(e);
        toast.error('Ocorreu um erro ao carregar os produtos!')
        yield put(loadProductsFailure())
    }
}

export default all([
    takeLatest('@products/SAVE_PRODUCT_REQUEST', saveProduct),
    takeLatest('@products/LOAD_PRODUCTS_REQUEST', loadProducts)
]);

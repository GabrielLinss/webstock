import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import {
    saveCostumerSuccess,
    saveCostumerFailure,
    loadCostumersSuccess,
    loadCostumersFailure
} from './actions';

export function* saveCostumer({ payload }) {
    try {
        const { data } = payload

        const response = yield call(api.post, '/costumers', data)

        const costumer = response.data

        toast.success(`Cliente ${costumer.name} cadastrado com sucesso!`)
        yield put(saveCostumerSuccess())
    } catch (e) {
        console.log(e);
        toast.error('Ocorreu um erro ao cadastrar o cliente!')
        yield put(saveCostumerFailure())
    }
}

export function* loadCostumers() {
    try {
        const response = yield call(api.get, `/costumers`)

        yield put(loadCostumersSuccess(response.data))
    } catch (e) {
        console.log(e);
        toast.error('Ocorreu um erro ao carregar os clientes!')
        yield put(loadCostumersFailure())
    }
}

export default all([
    takeLatest('@costumers/SAVE_COSTUMER_REQUEST', saveCostumer),
    takeLatest('@costumers/LOAD_COSTUMERS_REQUEST', loadCostumers)
]);

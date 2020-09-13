import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { logout } from '../../../services/auth';

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
        toast.error('Ocorreu um erro ao cadastrar o cliente!')
        yield put(saveCostumerFailure())

        if (e.response.data && e.response.data.length > 0) {
            const status = e.response.data[0]

            if (status.error === 'Token invalid') {
                toast.error('Sessão expirada!')

                logout()

                const { history } = payload

                history.push('/login');
            }
        }
    }
}

export function* loadCostumers({ payload }) {
    try {
        const response = yield call(api.get, `/costumers`)

        yield put(loadCostumersSuccess(response.data))
    } catch (e) {
        toast.error('Ocorreu um erro ao carregar os clientes!')
        yield put(loadCostumersFailure())

        if (e.response.data && e.response.data.length > 0) {
            const status = e.response.data[0]

            if (status.error === 'Token invalid') {
                toast.error('Sessão expirada!')

                logout()

                const { history } = payload

                history.push('/login');
            }
        }
    }
}

export default all([
    takeLatest('@costumers/SAVE_COSTUMER_REQUEST', saveCostumer),
    takeLatest('@costumers/LOAD_COSTUMERS_REQUEST', loadCostumers)
]);

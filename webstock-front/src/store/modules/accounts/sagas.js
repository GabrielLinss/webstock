import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { logout } from '../../../services/auth';

import {
    saveAccountSuccess,
    saveAccountFailure
} from './actions';

export function* saveAccount({ payload }) {
    try {
        const { data } = payload

        yield call(api.post, '/accounts', data)

        toast.success('Conta criada com sucesso!')
        yield put(saveAccountSuccess())
    } catch (e) {
        toast.error('Ocorreu um erro ao cadastrar o conta!')
        yield put(saveAccountFailure())

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
    takeLatest('@accounts/SAVE_ACCOUNT_REQUEST', saveAccount)
]);

import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { logout } from '../../../services/auth';

import {
    saveUserSuccess,
    saveUserFailure,
    loadUsersSuccess,
    loadUsersFailure
} from './actions';

export function* saveUser({ payload }) {
    try {
        const { data } = payload

        const response = yield call(api.post, '/users', data)

        const user = response.data

        toast.success(`Usuário ${user.name} cadastrado com sucesso!`)
        yield put(saveUserSuccess(user))
    } catch (e) {
        toast.error('Ocorreu um erro ao cadastrar o usuário!')
        yield put(saveUserFailure())

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

export function* loadUsers({ payload }) {
    try {
        const response = yield call(api.get, '/users')

        yield put(loadUsersSuccess(response.data))
    } catch (e) {
        toast.error('Ocorreu um erro ao carregar os usuários!')
        yield put(loadUsersFailure())

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
    takeLatest('@users/SAVE_USER_REQUEST', saveUser),
    takeLatest('@users/LOAD_USERS_REQUEST', loadUsers)
]);

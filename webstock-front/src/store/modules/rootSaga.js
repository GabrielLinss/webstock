import { all } from 'redux-saga/effects';

import products from './products/sagas';
import costumers from './costumers/sagas';
import users from './users/sagas';
import accounts from './accounts/sagas';

export default function* rootSaga() {
    return yield all([products, costumers, users, accounts]);
}

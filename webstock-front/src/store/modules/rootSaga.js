import { all } from 'redux-saga/effects';

import products from './products/sagas';
import costumers from './costumers/sagas';

export default function* rootSaga() {
    return yield all([products, costumers]);
}

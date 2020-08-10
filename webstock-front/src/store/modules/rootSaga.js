import { all } from 'redux-saga/effects';

import products from './products/sagas';

export default function* rootSaga() {
    return yield all([products]);
}

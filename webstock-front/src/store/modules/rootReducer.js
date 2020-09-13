import { combineReducers } from 'redux';

import products from './products/reducer';
import costumers from './costumers/reducer';
import users from './users/reducer';
import accounts from './accounts/reducer';

export default combineReducers({
    products,
    costumers,
    users,
    accounts
})

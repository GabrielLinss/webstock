import { combineReducers } from 'redux';

import products from './products/reducer';
import costumers from './costumers/reducer';

export default combineReducers({
    products,
    costumers
})

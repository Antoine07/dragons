import { combineReducers } from 'redux';

import dragon from './dragon';
import knight from './knight';
import message from './message';

const reducers = combineReducers({
    dragon,
    knight,
    message
});

export default reducers;
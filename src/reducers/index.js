import { combineReducers } from 'redux';
import RPSReducer from './rps';

const rootReducer = combineReducers({
    rps: RPSReducer
});

export default rootReducer;

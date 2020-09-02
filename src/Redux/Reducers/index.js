import { combineReducers } from 'redux';
import KodenamesReducer from './KodenamesReducer';

export const rootReducer = combineReducers({
    kodenames: KodenamesReducer
});
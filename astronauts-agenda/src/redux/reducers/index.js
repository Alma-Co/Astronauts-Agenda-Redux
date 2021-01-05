import { combineReducers } from 'redux';
import astronautsReducer from './astronautsReducer';

const rootReducer = combineReducers({ astronautsReducer });

export default rootReducer;